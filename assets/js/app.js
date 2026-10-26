/* ============================================================
   迈斯老师 · 数学知识点 —— 应用脚本（无依赖，可直接双击打开）
   ============================================================ */
(function () {
  'use strict';

  const DATA = window.SITE_DATA || { books: [], formulas: [], site: {} };
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const LS = {
    theme: 'ms.theme',
    done: 'ms.done',
    fav: 'ms.fav',
    last: 'ms.last',
  };

  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    },
  };

  let done = new Set(store.get(LS.done, []));
  let favs = new Set(store.get(LS.fav, []));
  const saveDone = () => store.set(LS.done, [...done]);
  const saveFavs = () => store.set(LS.fav, [...favs]);

  /* ---------------- 数学与文本渲染 ---------------- */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function tex(src, display) {
    if (typeof katex === 'undefined') return '<code>' + esc(src) + '</code>';
    try {
      return katex.renderToString(src, {
        displayMode: !!display,
        throwOnError: false,
        strict: 'ignore',
        trust: false,
        output: 'html',
      });
    } catch (e) {
      return '<code>' + esc(src) + '</code>';
    }
  }

  const MATH_SPLIT = /(\$\$[\s\S]*?\$\$|\$[^$\n]*?\$)/g;

  function inline(text) {
    return String(text).split(MATH_SPLIT).map((seg) => {
      if (!seg) return '';
      if (seg.startsWith('$$') && seg.endsWith('$$') && seg.length > 4) {
        return '<span class="math-inline">' + tex(seg.slice(2, -2), false) + '</span>';
      }
      if (seg.startsWith('$') && seg.endsWith('$') && seg.length > 2) {
        return '<span class="math-inline">' + tex(seg.slice(1, -1), false) + '</span>';
      }
      let s = esc(seg);
      s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
      return s;
    }).join('');
  }

  function mdToHtml(src) {
    if (!src) return '';
    const blocks = String(src).trim().split(/\n{2,}/);
    return blocks.map((block) => {
      const raw = block.trim();
      if (raw.startsWith('$$') && raw.endsWith('$$')) {
        return '<div class="math-block">' + tex(raw.slice(2, -2).trim(), true) + '</div>';
      }
      const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean);
      if (!lines.length) return '';
      if (lines[0].startsWith('### ')) {
        return '<h3>' + inline(lines[0].slice(4)) + '</h3>';
      }
      if (/^[-*]\s/.test(lines[0])) {
        return '<ul>' + lines.map((l) => '<li>' + inline(l.replace(/^[-*]\s+/, '')) + '</li>').join('') + '</ul>';
      }
      if (/^\d+[.、]\s/.test(lines[0])) {
        return '<ol>' + lines.map((l) => '<li>' + inline(l.replace(/^\d+[.、]\s+/, '')) + '</li>').join('') + '</ol>';
      }
      return '<p>' + lines.map(inline).join('') + '</p>';
    }).filter(Boolean).join('');
  }

  /* ---------------- 数据索引 ---------------- */
  const books = DATA.books || [];
  const ITEMS = new Map();     // 可阅读单元（高中=节，初中=章）
  const CHAPTERS = new Map();  // 章节
  const BOOK_STATS = new Map();

  books.forEach((book) => {
    const stat = { chapters: 0, items: 0, free: 0, minutes: 0, done: 0 };
    book.volumes = book.volumes || [];
    book.volumes.forEach((vol) => {
      vol.chapters = vol.chapters || [];
      vol.chapters.forEach((ch) => {
        CHAPTERS.set(ch.id, { book, volume: vol, chapter: ch });
        stat.chapters += 1;
        const subs = (ch.sections && ch.sections.length) ? ch.sections : [null];
        subs.forEach((sec) => {
          const item = sec || ch;
          const entry = {
            id: item.id,
            no: sec ? sec.no : '',
            title: sec ? sec.title : ch.title,
            summary: sec ? sec.summary : ch.summary,
            intro: sec ? sec.intro : ch.intro,
            points: sec ? sec.points : ch.points,
            tips: sec ? sec.tips : ch.tips,
            story: sec ? sec.story : ch.story,
            free: sec ? !!sec.free : !!ch.free,
            minutes: (sec ? sec.minutes : ch.minutes) || 8,
            book, volume: vol, chapter: ch,
          };
          ITEMS.set(entry.id, entry);
          stat.items += 1;
          if (entry.free) stat.free += 1;
          stat.minutes += entry.minutes;
          if (done.has(entry.id)) stat.done += 1;
        });
      });
    });
    BOOK_STATS.set(book.id, stat);
  });

  const allItems = [...ITEMS.values()];

  function chapterSections(ch) {
    if (ch.sections && ch.sections.length) return ch.sections;
    return [ch];
  }
  function chapterItem(ch) {
    return (ch.sections && ch.sections.length) ? null : ch;
  }
  function bookUrl(id) { return '#/library/' + id; }
  function chapterUrl(id) { return '#/chapter/' + id; }
  function itemUrl(id) { return '#/read/' + id; }

  /* ---------------- 收藏 / 进度 ---------------- */
  const favKey = (id) => 'item:' + id;

  function isFav(id) { return favs.has(favKey(id)); }
  function toggleFav(id) {
    const k = favKey(id);
    if (favs.has(k)) favs.delete(k); else favs.add(k);
    saveFavs();
    return favs.has(k);
  }
  function isDone(id) { return done.has(id); }
  function toggleDone(id) {
    if (done.has(id)) done.delete(id); else done.add(id);
    saveDone();
    const book = (ITEMS.get(id) || {}).book;
    if (book) statRefresh(book.id);
    return done.has(id);
  }
  function statRefresh(bookId) {
    const stat = BOOK_STATS.get(bookId);
    if (!stat) return;
    let n = 0;
    allItems.forEach((it) => { if (it.book.id === bookId && done.has(it.id)) n += 1; });
    stat.done = n;
  }

  /* ---------------- 路由 ---------------- */
  const routes = {
    home: renderHome,
    library: renderLibrary,
    chapter: renderChapter,
    read: renderRead,
    formulas: renderFormulas,
    about: renderAbout,
    access: renderAccess,
    favorites: renderFavorites,
  };

  function parseHash() {
    const raw = (location.hash || '#/').replace(/^#\/?/, '');
    const [beforeAnchor, anchor] = raw.split('#');
    const [pathPart, query] = beforeAnchor.split('?');
    const parts = pathPart.split('/').filter(Boolean);
    return { parts, anchor: anchor || '', query: new URLSearchParams(query || '') };
  }

  function navigate(to) {
    if (location.hash === to) { route(); return; }
    location.hash = to;
  }

  let lastPath = '';

  function route() {
    const { parts, anchor } = parseHash();
    const name = parts[0] || 'home';
    const fn = routes[name] || renderNotFound;
    const main = $('#main');
    closeMobileNav();
    const path = parts.join('/');
    const isNew = path !== lastPath;
    lastPath = path;

    main.innerHTML = '';
    const view = document.createElement('div');
    view.className = 'page-enter';
    main.appendChild(view);
    fn(view, parts.slice(1));

    if (isNew) {
      if (anchor) {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }
    markNav(name);
    const dt = (view.dataset.title || '').replace(/\$|\\/g, '');
    document.title = (dt ? dt + ' · ' : '') + '迈斯老师 · 初高中数学知识点';
    requestAnimationFrame(updateReadingProgress);
  }

  function markNav(name) {
    const map = { library: 'library', chapter: 'library', read: 'library', formulas: 'formulas', about: 'about', access: 'access', favorites: '' };
    $$('.site-nav a').forEach((a) => {
      if (a.dataset.nav && a.dataset.nav === map[name]) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function renderNotFound(view) {
    view.innerHTML = '<div class="wrap"><div class="empty"><div class="e-mark">404</div><p>这一页不在知识点里。</p><a class="btn btn-primary" href="#/">回到首页</a></div></div>';
  }

  /* ---------------- 公共组件 ---------------- */
  function bookTone(book) {
    return book.tone || '#1f3d5c';
  }

  function unitLabel(book) {
    return book.volumes.some((v) => v.chapters.some((c) => c.sections && c.sections.length)) ? '节' : '章';
  }

  function bookCard(book) {
    const stat = BOOK_STATS.get(book.id) || { chapters: 0, items: 0, free: 0, done: 0 };
    const pct = stat.items ? Math.round((stat.done / stat.items) * 100) : 0;
    const unit = unitLabel(book);
    return `
      <a class="book-card" href="${bookUrl(book.id)}" style="--tone:${bookTone(book)}">
        <div class="book-stage"><span>${esc(book.stage)} · ${esc(book.edition)}</span>${stat.free ? '<span class="badge-free">试读 ' + stat.free + ' ' + unit + '</span>' : ''}</div>
        <h3>${inline(book.title)}</h3>
        <p class="book-sub">${inline(book.subtitle)}</p>
        <dl class="book-meta">
          <div><dt>${book.volumes.length}</dt><dd>册</dd></div>
          <div><dt>${stat.chapters}</dt><dd>章</dd></div>
          ${unit === '节' ? `<div><dt>${stat.items}</dt><dd>节</dd></div>` : ''}
          <div><dt>${stat.free}</dt><dd>免费</dd></div>
        </dl>
        <div class="book-progress">
          <div class="bar"><i style="width:${pct}%"></i></div>
          <div class="lbl"><span>已学 ${stat.done}/${stat.items}</span><span>${pct}%</span></div>
        </div>
      </a>`;
  }

  function stageTabs(active, hrefBase) {
    const stages = ['全部', '高中', '初中'];
    return `<div class="stage-tabs" role="tablist">` + stages.map((s) => {
      const on = s === active;
      const href = s === '全部' ? hrefBase : hrefBase + '?stage=' + encodeURIComponent(s);
      return `<a role="tab" aria-selected="${on}" href="${href}">${s}</a>`;
    }).join('') + `</div>`;
  }

  function lockBadge(item) {
    if (item.free) return '<span class="tag tag-free">免费试读</span>';
    return '<span class="tag tag-lock">完整版</span>';
  }

  function doneBadge(id) {
    return done.has(id) ? '<span class="tag tag-done">已学</span>' : '';
  }

  function breadcrumb(parts) {
    const items = parts.filter((p, i) => i === 0 || p.label !== parts[i - 1].label);
    return '<nav class="breadcrumb" aria-label="面包屑">' + items.map((p, i) => {
      const last = i === items.length - 1;
      const sep = i ? '<span class="sep">/</span>' : '';
      return sep + (last || !p.href ? `<span>${inline(p.label)}</span>` : `<a href="${p.href}">${inline(p.label)}</a>`);
    }).join('') + '</nav>';
  }

  function avatarSeal(text) {
    return `<span class="brand-seal" aria-hidden="true">${esc(text)}</span>`;
  }

  /* ---------------- 首页 ---------------- */
  function renderHome(view) {
    const site = DATA.site || {};
    const totalItems = allItems.length;
    const totalChapters = CHAPTERS.size;
    const freeItems = allItems.filter((i) => i.free).length;
    const formulas = DATA.formulas || [];
    const featured = formulas.filter((f) => f.featured).slice(0, 6);
    const freeOnes = books
      .map((b) => allItems.find((i) => i.book.id === b.id && i.free))
      .filter(Boolean);

    view.innerHTML = `
      <section class="hero">
        <div class="wrap hero-inner">
          <div class="hero-copy">
            <p class="eyebrow">初高中数学 · 知识体系</p>
            <h1>把书读薄，<br>把知识点串成<span class="hl">一张图</span>。</h1>
            <p class="lede">${esc(site.intro || '')}</p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#/library">开始学习
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
              </a>
              <a class="btn btn-ghost" href="#/formulas">公式速查</a>
            </div>
            <dl class="hero-stats">
              <div><dt>${books.length}</dt><dd>套知识体系</dd></div>
              <div><dt>${totalChapters}</dt><dd>个章节</dd></div>
              <div><dt>${totalItems}</dt><dd>个学习单元</dd></div>
              <div><dt>${freeItems}</dt><dd>个免费试读</dd></div>
            </dl>
          </div>
          <div class="hero-art" aria-hidden="true">
            <article class="paper paper-1">
              <div class="p-kicker"><span>§ 5.2</span><span>导数</span></div>
              <h3>导数的运算法则</h3>
              <div class="p-math">${tex('(uv)\' = u\'v + uv\'', true)}</div>
              <div class="p-rule"></div>
              <div class="p-math">${tex('\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^{2}}', true)}</div>
              <div class="p-rule"></div>
              <div class="p-foot">理解结构，而不是背结论</div>
            </article>
            <article class="paper paper-2">
              <div class="p-kicker"><span>§ 5.5</span><span>三角</span></div>
              <h3>三角恒等变换</h3>
              <div class="p-math">${tex('\\sin^{2}\\alpha+\\cos^{2}\\alpha=1', true)}</div>
              <div class="p-rule"></div>
              <div class="p-math">${tex('\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha', true)}</div>
              <div class="p-foot">同一个角的三种写法</div>
            </article>
            <div class="seal-stamp">迈斯<br>笔记</div>
          </div>
        </div>
      </section>

      <section class="section" id="books">
        <div class="wrap">
          <div class="section-head">
            <div>
              <p class="eyebrow">Knowledge Base</p>
              <h2>三套资料，一张完整的知识地图</h2>
            </div>
            <p>按教材顺序逐章梳理，先看目录建立框架，再逐节吃透概念、公式与定理。</p>
          </div>
          <div class="book-grid">${books.map(bookCard).join('')}</div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <div>
              <p class="eyebrow">Free Preview</p>
              <h2>先读一节，再决定</h2>
            </div>
            <a class="btn-text btn head-link" href="#/library">查看全部目录 →</a>
          </div>
          <div class="chapter-list">
            ${freeOnes.map((it) => `
              <a class="chapter-item" href="${itemUrl(it.id)}">
                <div class="c-no">${esc(it.no || it.chapter.no || '')}</div>
                <div>
                  <h4>${inline(it.title)}</h4>
                  <p class="c-sum">${inline(it.summary || '')}</p>
                </div>
                <div class="c-meta">
                  <span class="c-book">${esc(it.book.title)}</span>
                  <span class="tag tag-free">免费试读</span>
                </div>
              </a>`).join('')}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <div>
              <p class="eyebrow">Formula Sheet</p>
              <h2>常被问到的公式，都在这里</h2>
            </div>
            <a class="btn-text btn head-link" href="#/formulas">全部 ${formulas.length} 条 →</a>
          </div>
          <div class="formula-grid">
            ${featured.map((f) => formulaCard(f)).join('')}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <div>
              <p class="eyebrow">How to use</p>
              <h2>这样用，效率最高</h2>
            </div>
          </div>
          <div class="steps">
            <div class="step"><span class="n">01 / 建框架</span><h3>先看目录</h3><p>进入知识库，按教材顺序把章节过一遍，先知道这一册要学什么、彼此怎么连接。</p></div>
            <div class="step"><span class="n">02 / 抓核心</span><h3>再读知识点</h3><p>每一节把概念、公式、定理拆成条目，公式单独排版，方便抄进笔记、贴在书桌前。</p></div>
            <div class="step"><span class="n">03 / 做标记</span><h3>收藏与进度</h3><p>把薄弱的地方收藏起来，学完一节标记完成，页面会记住你的进度，下次接着看。</p></div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="wrap about-band">
          <div>
            <p class="eyebrow">About</p>
            <blockquote class="about-quote" style="margin-top:18px">“数学的知识体系，从来不是一堆孤立公式的简单堆砌。函数与导数血脉相连，向量与三角同根同源。<em>如果能把这些内在逻辑打通，每个公式都有来路，每个定理都有归处。</em>”</blockquote>
            <div class="about-sign"><span class="line"></span>迈斯老师 · 初高中数学</div>
          </div>
          <div class="about-copy">
            <p>${esc(site.bio || '')}</p>
            <p>${esc(site.bio2 || '')}</p>
            <a class="btn btn-ghost btn-sm" href="#/about">了解更多 →</a>
          </div>
        </div>
      </section>
    `;
  }

  function formulaCard(f) {
    return `
      <article class="formula-card" data-id="${esc(f.id)}">
        <span class="f-tag">${esc(f.module)}</span>
        <div class="f-math">${tex(f.latex, true)}</div>
        <p class="f-note">${inline(f.name)}${f.note ? ' · ' + inline(f.note) : ''}</p>
      </article>`;
  }

  /* ---------------- 知识库 ---------------- */
  function renderLibrary(view, args) {
    const bookId = args[0];
    if (bookId) return renderBookDetail(view, bookId);

    view.dataset.title = '知识库';
    const params = new URLSearchParams((location.hash.split('?')[1] || ''));
    const stage = params.get('stage') || '全部';
    const list = books.filter((b) => stage === '全部' || b.stage === stage);

    view.innerHTML = `
      <div class="wrap">
        <header class="page-head">
          <nav class="breadcrumb" aria-label="面包屑"><a href="#/">首页</a><span class="sep">/</span><span>知识库</span></nav>
          <h1 class="page-title">知识库</h1>
          <p class="page-sub">三套资料，覆盖人教A版高中数学五册、人教版初中数学与北师大版初中数学全部章节。每套资料的第一章可免费试读。</p>
          <div style="margin-top:22px">${stageTabs(stage, '#/library')}</div>
        </header>
        <div style="padding:40px 0 80px">
          <div class="book-grid">${list.map(bookCard).join('')}</div>
          <div class="section" style="padding:64px 0 0;border-top:1px solid var(--line);margin-top:64px">
            <div class="section-head">
              <div><p class="eyebrow">All chapters</p><h2>全部章节</h2></div>
              <p>共 ${CHAPTERS.size} 章 · ${allItems.length} 个学习单元</p>
            </div>
            ${list.map(bookOutline).join('')}
          </div>
        </div>
      </div>`;
  }

  function bookOutline(book) {
    return `
      <div class="volume-block">
        <div class="volume-head">
          <h3>${esc(book.title)}</h3>
          <span>${esc(book.edition)} · ${esc(book.stage)}</span>
        </div>
        <div class="chapter-list chapter-list-2">
          ${book.volumes.map((vol) => vol.chapters.map((ch) => {
            const hasSecs = !!(ch.sections && ch.sections.length);
            const isFree = (hasSecs && ch.sections.some((s) => s.free)) || ch.free;
            return `
            <a class="chapter-item" href="${chapterUrl(ch.id)}">
              <div class="c-no">${esc(vol.short || vol.name)}</div>
              <div>
                <h4>${inline(ch.no)} ${inline(ch.title)}</h4>
                <p class="c-sum">${inline(ch.summary || '')}</p>
              </div>
              <div class="c-meta">
                ${hasSecs ? `<span class="tag tag-lock">${ch.sections.length} 节</span>` : '<span class="tag tag-lock">整章</span>'}
                ${isFree ? '<span class="tag tag-free">试读</span>' : ''}
              </div>
            </a>`;
          }).join('')).join('')}
        </div>
      </div>`;
  }

  function renderBookDetail(view, bookId) {
    const book = books.find((b) => b.id === bookId);
    if (!book) return renderNotFound(view);
    const stat = BOOK_STATS.get(book.id);
    const pct = stat.items ? Math.round((stat.done / stat.items) * 100) : 0;
    const unit = unitLabel(book);
    view.dataset.title = book.title;

    view.innerHTML = `
      <div class="wrap">
        <header class="page-head">
          ${breadcrumb([{ label: '首页', href: '#/' }, { label: '知识库', href: '#/library' }, { label: book.title }])}
          <h1 class="page-title">${inline(book.title)}</h1>
          <p class="page-sub">${inline(book.subtitle)}</p>
          <div class="article-meta" style="margin-top:18px">
            <span>${book.volumes.length} 册</span>
            <span>${stat.chapters} 章</span>
            ${unit === '节' ? `<span>${stat.items} 节</span>` : ''}
            <span>免费试读 ${stat.free} ${unit}</span>
            <span>已学 ${stat.done} ${unit} · ${pct}%</span>
          </div>
        </header>
        <div class="library-layout">
          <aside class="side-nav" id="side-nav">
            <button class="btn btn-ghost btn-sm sn-toggle" type="button" style="width:100%;margin-bottom:10px;display:none">展开 / 收起目录</button>
            <div class="sn-scroll">
              <p class="sn-label">目录</p>
              ${book.volumes.map((vol) => `
                <div class="sn-book" data-open="true" style="--tone:${bookTone(book)}">
                  <button type="button"><span class="dot"></span>${esc(vol.name)}<svg class="caret" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
                  <ul>
                    ${vol.chapters.map((ch) => `<li><a href="${chapterUrl(ch.id)}"><span class="no">${esc(ch.no)}</span><span>${inline(ch.title)}</span></a></li>`).join('')}
                  </ul>
                </div>`).join('')}
            </div>
          </aside>
          <div>
            ${book.volumes.map((vol) => `
              <div class="volume-block" id="vol-${esc(vol.id)}">
                <div class="volume-head">
                  <h3>${esc(vol.name)}</h3>
                  <span>${vol.chapters.length} 章</span>
                </div>
                <div class="chapter-list">
                  ${vol.chapters.map((ch) => {
                    const hasSecs = !!(ch.sections && ch.sections.length);
                    if (!hasSecs) {
                      return `
                        <a class="chapter-item" href="${chapterUrl(ch.id)}">
                          <div class="c-no">${esc(ch.no)}</div>
                          <div>
                            <h4>${inline(ch.title)}</h4>
                            <p class="c-sum">${inline(ch.summary || '')}</p>
                          </div>
                          <div class="c-meta">
                            ${ch.free ? '<span class="tag tag-free">免费试读</span>' : '<span class="tag tag-lock">完整版</span>'}
                            <span class="s-time">${ch.minutes || 15}′</span>
                          </div>
                        </a>`;
                    }
                    const secs = ch.sections;
                    const freeCount = secs.filter((s) => s.free).length;
                    return `
                    <div class="chapter-item">
                      <div class="c-no">${esc(ch.no)}</div>
                      <div>
                        <h4><a href="${chapterUrl(ch.id)}">${inline(ch.title)}</a></h4>
                        <p class="c-sum">${inline(ch.summary || '')}</p>
                        <div class="sec-grid">
                          ${secs.map((s) => `
                            <a class="sec-chip${done.has(s.id) ? ' is-done' : ''}" href="${itemUrl(s.id)}" title="${esc(s.title)}">
                              <span class="n">${esc(s.no || '')}</span>
                              <span class="t">${inline(s.title)}</span>
                              ${s.free ? '<span class="tag tag-free">免费</span>' : ''}
                            </a>`).join('')}
                        </div>
                      </div>
                      <div class="c-meta">
                        <span class="tag tag-lock">${secs.length} 节</span>
                        ${freeCount ? `<span class="tag tag-free">试读 ${freeCount}</span>` : ''}
                      </div>
                    </div>`;
                  }).join('')}
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>`;

    const toggle = $('.sn-toggle', view);
    toggle.style.display = window.innerWidth <= 860 ? 'inline-flex' : 'none';
    toggle.addEventListener('click', () => $('#side-nav', view).classList.toggle('is-open'));
    $$('.sn-book > button', view).forEach((btn) => {
      btn.addEventListener('click', () => {
        const box = btn.parentElement;
        box.dataset.open = box.dataset.open === 'true' ? 'false' : 'true';
      });
    });
  }

  /* ---------------- 章节页 ---------------- */
  function renderChapter(view, args) {
    const cid = args[0];
    const entry = CHAPTERS.get(cid);
    if (!entry) return renderNotFound(view);
    const { book, volume, chapter } = entry;

    if (!chapter.sections || !chapter.sections.length) {
      return renderArticle(view, ITEMS.get(chapter.id));
    }

    view.dataset.title = chapter.title;
    const secs = chapter.sections;
    const freeCount = secs.filter((s) => s.free).length;
    const idx = volume.chapters.indexOf(chapter);
    const prev = idx > 0 ? volume.chapters[idx - 1] : null;
    const next = idx < volume.chapters.length - 1 ? volume.chapters[idx + 1] : null;

    view.innerHTML = `
      <div class="wrap">
        <header class="page-head">
          ${breadcrumb([{ label: '首页', href: '#/' }, { label: '知识库', href: '#/library' }, { label: book.title, href: bookUrl(book.id) }, { label: chapter.title }])}
          <div class="article-head" style="border:0;padding:0;margin-top:14px">
            <div class="kicker">
              <span class="tag tag-lock">${esc(book.stage)} · ${esc(book.edition)}</span>
              <span class="tag tag-lock">${esc(volume.name)}</span>
              ${freeCount ? `<span class="tag tag-free">本章 ${freeCount} 节免费</span>` : ''}
            </div>
            <h1 class="page-title" style="margin:6px 0 0">${inline(chapter.no)} ${inline(chapter.title)}</h1>
            <p class="page-sub" style="margin-top:12px">${inline(chapter.summary || '')}</p>
          </div>
        </header>
        <div class="narrow" style="padding:34px 0 80px">
          <div class="section-list">
            ${secs.map((s) => `
              <a class="section-row" href="${itemUrl(s.id)}" style="padding:18px 18px;border:1px solid var(--line);background:var(--bg-elev);margin-bottom:8px">
                <span class="s-no">${esc(s.no)}</span>
                <span>
                  <span class="s-title" style="font-size:16px">${inline(s.title)}</span>
                  ${s.summary ? `<span class="s-sum" style="display:block">${inline(s.summary)}</span>` : ''}
                </span>
                <span class="s-meta">
                  ${s.free ? '<span class="tag tag-free">免费试读</span>' : '<span class="tag tag-lock">完整版</span>'}
                  ${done.has(s.id) ? '<span class="tag tag-done">已学</span>' : ''}
                  <span class="s-time">${s.minutes || 8}′</span>
                </span>
              </a>`).join('')}
          </div>
          <div class="pager">
            ${prev ? `<a href="${chapterUrl(prev.id)}"><span class="p-label">上一章</span><span class="p-title">${inline(prev.title)}</span></a>` : '<span></span>'}
            ${next ? `<a class="next" href="${chapterUrl(next.id)}"><span class="p-label">下一章</span><span class="p-title">${inline(next.title)}</span></a>` : '<span></span>'}
          </div>
        </div>
      </div>`;
  }

  /* ---------------- 阅读页 ---------------- */
  function renderRead(view, args) {
    const id = args[0];
    const item = ITEMS.get(id);
    if (!item) return renderNotFound(view);
    renderArticle(view, item);
  }

  function articleToc(item) {
    const ch = item.chapter;
    if (ch.sections && ch.sections.length) return ch.sections;
    return [];
  }

  function renderArticle(view, item) {
    if (!item) return renderNotFound(view);
    const { book, volume, chapter } = item;
    view.dataset.title = item.title;
    const points = item.points || [];
    const isFree = item.free;
    const secs = articleToc(item);
    const idx = secs.findIndex((s) => s.id === item.id);
    const prev = idx > 0 ? secs[idx - 1] : null;
    const next = idx >= 0 && idx < secs.length - 1 ? secs[idx + 1] : null;

    const head = `
      <header class="article-head">
        <div class="kicker">
          <span class="tag tag-lock">${esc(book.stage)} · ${esc(book.edition)}</span>
          <span class="tag tag-lock">${esc(volume.name)}</span>
          ${isFree ? '<span class="tag tag-free">免费试读</span>' : '<span class="tag tag-lock">完整版内容</span>'}
          ${done.has(item.id) ? '<span class="tag tag-done">已学</span>' : ''}
        </div>
        <h1>${inline(item.no ? item.no + ' ' : '')}${inline(item.title)}</h1>
        ${item.intro ? `<p class="intro">${inline(item.intro)}</p>` : ''}
        <div class="article-meta">
          ${points.length ? `<span><svg viewBox="0 0 24 24"><path d="M4 5.5h16M4 12h16M4 18.5h10"/></svg>${points.length} 个知识点</span>` : ''}
          <span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></svg>约 ${item.minutes || 8} 分钟</span>
          <span>${inline(chapter.no)} ${inline(chapter.title)}</span>
        </div>
      </header>`;

    const lockedBlock = !isFree ? `
      <div class="chapter-brief">
        <h2>本节导读</h2>
        <p>${inline(item.intro || chapter.summary || '')}</p>
        <div class="cb-meta">
          <span>所属：${inline(chapter.no)} ${inline(chapter.title)}</span>
          <span>收录于《${inline(book.title)}》</span>
        </div>
      </div>
      ${paywallHTML(chapter, book)}` : '';

    const body = isFree ? renderPoints(points, item) : lockedBlock;

    view.innerHTML = `
      <div class="wrap reading-wrap">
        <div style="margin-bottom:22px">
          ${breadcrumb([{ label: '知识库', href: '#/library' }, { label: book.title, href: bookUrl(book.id) }, { label: chapter.title, href: chapterUrl(chapter.id) }, { label: item.title }])}
        </div>
        <div class="reading-grid">
          <article class="article" id="article">
            ${head}
            <div id="article-body">${body}</div>
            ${isFree ? `
            <div class="article-foot">
              <button class="icon-action" type="button" id="fav-btn" aria-pressed="${isFav(item.id)}">
                <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.35-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.65 12 20 12 20z"/></svg>
                <span>${isFav(item.id) ? '已收藏' : '收藏本节'}</span>
              </button>
              <button class="icon-action${done.has(item.id) ? ' is-done' : ''}" type="button" id="done-btn">
                <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>
                <span>${done.has(item.id) ? '已学完' : '标记已学'}</span>
              </button>
              <button class="icon-action" type="button" id="copy-btn">
                <svg viewBox="0 0 24 24"><path d="M10 13a4.5 4.5 0 0 0 6.4 0l2.6-2.6a4.5 4.5 0 0 0-6.4-6.4L11.4 5.2"/><path d="M14 11a4.5 4.5 0 0 0-6.4 0l-2.6 2.6a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2"/></svg>
                <span>复制链接</span>
              </button>
              <span class="spacer"></span>
              <button class="icon-action" type="button" onclick="window.print()">
                <svg viewBox="0 0 24 24"><path d="M7 8V4h10v4M7 18H5a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2"/><rect x="7" y="14" width="10" height="6" rx="1"/></svg>
                <span>打印</span>
              </button>
            </div>` : ''}
            ${isFree && secs.length ? `
            <nav class="pager" aria-label="章节翻页">
              ${prev ? `<a href="${itemUrl(prev.id)}"><span class="p-label">上一节</span><span class="p-title">${inline(prev.title)}</span></a>` : '<span></span>'}
              ${next ? `<a class="next" href="${itemUrl(next.id)}"><span class="p-label">下一节</span><span class="p-title">${inline(next.title)}</span></a>` : '<span></span>'}
            </nav>` : ''}
          </article>
          <aside class="aside">
            ${secs.length ? `
            <div class="aside-card toc-card">
              <h3>本章目录</h3>
              <ul class="toc-list">
                ${secs.map((s) => `<li><a href="${itemUrl(s.id)}" class="${s.id === item.id ? 'is-active' : ''}"><span class="t-no">${esc(s.no)}</span>${inline(s.title)}</a></li>`).join('')}
              </ul>
            </div>` : points.length ? `
            <div class="aside-card toc-card">
              <h3>本节要点</h3>
              <ul class="toc-list">
                ${points.map((p, i) => `<li><a href="#kp-${i + 1}"><span class="t-no">${String(i + 1).padStart(2, '0')}</span>${inline(p.h)}</a></li>`).join('')}
              </ul>
            </div>` : ''}
            ${(secs.length || points.length) ? `
            <div class="aside-card">
              <h3>学习状态</h3>
              <div class="aside-progress">
                ${secs.length
                  ? `<div class="ring" style="--p:${Math.round(((idx + 1) / secs.length) * 100)}"><b>${idx + 1}/${secs.length}</b></div>
                     <p>本章共 ${secs.length} 节<br>${done.has(item.id) ? '本节已完成' : '读完记得标记已学'}</p>`
                  : `<div class="ring" style="--p:${done.has(item.id) ? 100 : 0}"><b>${done.has(item.id) ? '✓' : '0%'}</b></div>
                     <p>本章共 ${points.length} 个知识点<br>${done.has(item.id) ? '已经学完' : '读完记得标记已学'}</p>`}
              </div>
            </div>` : ''}
            ${!isFree ? `
            <div class="aside-card" style="background:var(--accent-soft);border-color:transparent">
              <h3 style="color:var(--accent)">完整版</h3>
              <p style="font-size:13px;color:var(--ink-2);line-height:1.8">本节属于「${inline(chapter.title)}」，完整讲解收录在《${inline(book.title)}》中。</p>
              <a class="btn btn-accent btn-sm" href="#/access" style="margin-top:12px;width:100%">获取完整版</a>
            </div>` : ''}
          </aside>
        </div>
      </div>`;

    // 交互
    const favBtn = $('#fav-btn', view);
    if (favBtn) {
      favBtn.addEventListener('click', () => {
        const on = toggleFav(item.id);
        favBtn.classList.toggle('is-on', on);
        favBtn.setAttribute('aria-pressed', String(on));
        $('span', favBtn).textContent = on ? '已收藏' : '收藏本节';
        toast(on ? '已加入收藏' : '已取消收藏');
      });
      if (isFav(item.id)) favBtn.classList.add('is-on');
    }
    const doneBtn = $('#done-btn', view);
    if (doneBtn) {
      doneBtn.addEventListener('click', () => {
        const on = toggleDone(item.id);
        doneBtn.classList.toggle('is-done', on);
        $('span', doneBtn).textContent = on ? '已学完' : '标记已学';
        toast(on ? '已标记为学完' : '已取消完成标记');
      });
    }
    const copyBtn = $('#copy-btn', view);
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const link = location.href;
        const ok = () => toast('链接已复制，可分享给同学');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(link).then(ok).catch(() => fallbackCopy(link, ok));
        } else fallbackCopy(link, ok);
      });
    }

    attachScrollSpy();
    store.set(LS.last, item.id);
  }

  function fallbackCopy(text, cb) {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); cb(); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  function renderPoints(points, item) {
    const html = points.map((p, i) => `
      <section class="kp" id="kp-${i + 1}">
        <span class="kp-num">${String(i + 1).padStart(2, '0')}</span>
        <h2>${inline(p.h)}</h2>
        <div class="prose">${mdToHtml(p.b)}</div>
      </section>`).join('');

    const story = item.story ? `
      <div class="callout story">
        <div class="c-title">${esc(item.story.title || '小故事')}</div>
        <div class="prose">${mdToHtml(item.story.b)}</div>
      </div>` : '';

    const tips = item.tips ? `
      <div class="callout">
        <div class="c-title">易错提醒</div>
        <div class="prose">${mdToHtml(item.tips)}</div>
      </div>` : '';

    const chips = points.length > 1 ? `
      <div class="point-nav">
        ${points.map((p, i) => `<a class="chip-link" href="#kp-${i + 1}">${String(i + 1).padStart(2, '0')} ${inline(p.h)}</a>`).join('')}
      </div>` : '';

    return html + story + tips + chips;
  }

  function paywallHTML(chapter, book) {
    const stat = BOOK_STATS.get(book.id) || { chapters: 0, items: 0 };
    const unit = unitLabel(book);
    return `
      <div class="paywall">
        <p class="pw-eyebrow">Complete Version</p>
        <h3>解锁本节完整讲解</h3>
        <p>完整版收录《${inline(book.title)}》全部 ${stat.chapters} 章、${stat.items} ${unit}，按教材顺序逐节整理，可直接用于预习、复习与备课。</p>
        <ul class="pw-feats">
          <li>概念、公式、定理逐条梳理</li>
          <li>推导思路与易错提醒</li>
          <li>高清 PDF，可打印、可批注</li>
        </ul>
        <div class="pw-actions">
          <a class="btn btn-accent" href="#/access">获取完整版</a>
          <a class="btn btn-ghost" href="#/library">先看其他试读</a>
        </div>
        <p class="pw-note">获取方式：小红书私信 / 微信，见「获取资料」页</p>
      </div>`;
  }

  /* ---------------- 公式速查 ---------------- */
  function renderFormulas(view) {
    view.dataset.title = '公式速查';
    const formulas = DATA.formulas || [];
    const params = new URLSearchParams((location.hash.split('?')[1] || ''));
    let stage = params.get('stage') || '全部';
    let q = params.get('q') || '';

    view.innerHTML = `
      <div class="wrap">
        <header class="page-head">
          ${breadcrumb([{ label: '首页', href: '#/' }, { label: '公式速查' }])}
          <h1 class="page-title">公式速查</h1>
          <p class="page-sub">把初高中最常用、最容易记混的公式集中在一页。按模块筛选，或直接搜索关键词。</p>
          <div class="formula-toolbar">
            <div class="filter-chips" id="stage-filter">
              ${['全部', '初中', '高中'].map((s) => `<button type="button" data-stage="${s}" aria-pressed="${s === stage}">${s}</button>`).join('')}
            </div>
            <label class="formula-search">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5 21 21"/></svg>
              <input type="search" id="formula-q" placeholder="搜索公式，如：余弦定理" value="${esc(q)}">
            </label>
          </div>
        </header>
        <div id="formula-body" style="padding:10px 0 80px"></div>
      </div>`;

    function paint() {
      const body = $('#formula-body', view);
      const list = formulas.filter((f) => (stage === '全部' || f.stage === stage) &&
        (!q || (f.name + f.module + f.note + f.latex).toLowerCase().includes(q.toLowerCase())));
      if (!list.length) {
        body.innerHTML = '<div class="empty"><div class="e-mark">∅</div><p>没有找到相关公式，换个关键词试试。</p></div>';
        return;
      }
      const groups = new Map();
      list.forEach((f) => {
        const key = f.stage + ' · ' + f.module;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(f);
      });
      body.innerHTML = [...groups.entries()].map(([key, arr]) => `
        <section class="formula-section">
          <h3>${esc(key)}<span>${arr.length} 条</span></h3>
          <div class="formula-grid">
            ${arr.map((f) => `
              <article class="formula-card" id="f-${esc(f.id)}">
                <span class="f-tag">${inline(f.name)}</span>
                <div class="f-math">${tex(f.latex, true)}</div>
                ${f.note ? `<p class="f-note">${inline(f.note)}</p>` : ''}
                <div class="f-actions"><button class="copy-btn" type="button" data-copy="${esc(f.latex)}">复制 LaTeX</button></div>
              </article>`).join('')}
          </div>
        </section>`).join('');
      $$('.copy-btn', body).forEach((b) => b.addEventListener('click', () => {
        fallbackCopy(b.dataset.copy, () => toast('LaTeX 已复制'));
      }));
    }

    paint();
    $$('#stage-filter button', view).forEach((b) => b.addEventListener('click', () => {
      stage = b.dataset.stage;
      $$('#stage-filter button', view).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      paint();
    }));
    $('#formula-q', view).addEventListener('input', (e) => { q = e.target.value.trim(); paint(); });
  }

  /* ---------------- 关于 / 获取 ---------------- */
  function renderAbout(view) {
    view.dataset.title = '关于';
    const site = DATA.site || {};
    view.innerHTML = `
      <div class="wrap">
        <div class="narrow">
          <header class="page-head">
            ${breadcrumb([{ label: '首页', href: '#/' }, { label: '关于' }])}
            <h1 class="page-title">关于迈斯老师</h1>
            <p class="page-sub">${esc(site.tagline || '')}</p>
          </header>
          <div class="prose-page" style="padding-top:44px">
            <h2>为什么整理这份知识点</h2>
            <p>${esc(site.about1 || '')}</p>
            <p>${esc(site.about2 || '')}</p>
            <h2>三套资料</h2>
            <div class="chapter-list">
              ${books.map((b) => `
                <a class="chapter-item" href="${bookUrl(b.id)}">
                  <div class="c-no">${esc(b.stage)}</div>
                  <div><h4>${inline(b.title)}</h4><p class="c-sum">${inline(b.subtitle)}</p></div>
                  <div class="c-meta"><span class="tag tag-lock">${b.volumes.length} 册</span></div>
                </a>`).join('')}
            </div>
            <h2>整理原则</h2>
            <ul>
              <li><strong>全面系统，但不冗余。</strong>覆盖教材全部核心知识点，剔除过于冗长的叙述，只保留最本质的内容。</li>
              <li><strong>重视概念，更重视过程。</strong>公式尽量给出推导思路，例如用面积法推基本不等式、用单位圆和向量两次推导两角差的余弦。</li>
              <li><strong>融入故事和温度。</strong>三把钥匙的故事帮你分清「充分」「必要」「充要」，宇宙银行的小学徒带你走近${inline('自然常数 $e$')}。</li>
            </ul>
            <div class="rule"></div>
            <p style="color:var(--muted);font-size:13.5px">本站为个人教学整理，页面内容为节选与试读。完整版以 PDF 形式提供，版权所有，侵权必究。</p>
            <p style="margin-top:20px"><a class="btn btn-primary" href="#/access">获取完整版</a> <a class="btn btn-ghost" href="#/library">浏览知识库</a></p>
          </div>
        </div>
      </div>`;
  }

  function renderAccess(view) {
    view.dataset.title = '获取完整版';
    const site = DATA.site || {};
    const contact = site.contact || {};
    const freeList = allItems.filter((i) => i.free);
    view.innerHTML = `
      <div class="wrap">
        <div class="narrow">
          <header class="page-head">
            ${breadcrumb([{ label: '首页', href: '#/' }, { label: '获取资料' }])}
            <h1 class="page-title">获取完整版</h1>
            <p class="page-sub">每套资料的第一章都可以免费试读。如果你觉得这份整理的思路对你有帮助，可以通过下面的方式获取完整版。</p>
          </header>
          <div class="prose-page" style="padding-top:40px;max-width:100%">
            <div class="access-grid">
              <div class="access-card">
                <p class="a-kicker">STEP 01</p>
                <h3>先试读</h3>
                <p>任选一节免费章节，看看排版、讲解深度和整理思路是否适合你。</p>
                <a class="btn-text btn" href="#/library">去试读 →</a>
              </div>
              <div class="access-card">
                <p class="a-kicker">STEP 02</p>
                <h3>联系我</h3>
                <p>小红书私信或添加微信，说明你需要的版本（高中人教A / 初中人教 / 初中北师大）。</p>
                <a class="btn-text btn" href="#/about">了解整理思路 →</a>
              </div>
              <div class="access-card">
                <p class="a-kicker">STEP 03</p>
                <h3>获取 PDF</h3>
                <p>完整版为高清 PDF，按章节编排，可直接打印，也可在平板、手机上随时翻阅。</p>
                <a class="btn-text btn" href="#/formulas">先看公式速查 →</a>
              </div>
            </div>

            <div class="contact-block">
              <div class="contact-row">
                <span class="k">微信</span>
                <span><span class="v">${esc(contact.wechat || '（待填写）')}</span> <button class="copy-mini" type="button" data-copy="${esc(contact.wechat || '')}">复制</button></span>
              </div>
              <div class="contact-row">
                <span class="k">小红书</span>
                <span class="v">${esc(contact.xiaohongshu || '（待填写）')}</span>
              </div>
              <div class="contact-row">
                <span class="k">备注</span>
                <span style="font-size:13px;color:var(--muted);text-align:right">${esc(contact.note || '')}</span>
              </div>
            </div>

            <h2>免费试读范围</h2>
            <p>以下内容在网站上完整开放，无需任何注册：</p>
            <ul>
              ${freeList.map((i) => `<li><a href="${itemUrl(i.id)}" style="color:var(--accent)">${inline((i.no ? i.no + ' ' : '') + i.title)}</a> —— ${inline(i.book.title)}</li>`).join('')}
              <li><a href="#/formulas" style="color:var(--accent)">公式速查</a> —— 初高中常用公式 ${(DATA.formulas || []).length} 条</li>
              <li>全部 ${CHAPTERS.size} 章的目录、导语与章节结构</li>
            </ul>

            <h2>完整版包含什么</h2>
            <ul>
              <li>三套资料全部 ${allItems.length} 个学习单元的完整讲解</li>
              <li>概念、公式、定理、推论与易错提醒，按教材顺序编排</li>
              <li>高清 PDF，A4 排版，适合打印装订或在平板上批注</li>
              <li>后续修订免费更新</li>
            </ul>

            <div class="rule"></div>
            <p style="font-size:13px;color:var(--muted)">注：本站不提供在线支付。所有资料通过微信 / 小红书私信交付，谨防其他渠道的盗版与二次售卖。</p>
          </div>
        </div>
      </div>`;

    $$('.copy-mini', view).forEach((b) => b.addEventListener('click', () => {
      fallbackCopy(b.dataset.copy, () => toast('微信号已复制'));
    }));
  }

  /* ---------------- 收藏 ---------------- */
  function renderFavorites(view) {
    view.dataset.title = '我的收藏';
    const items = allItems.filter((i) => isFav(i.id));
    view.innerHTML = `
      <div class="wrap">
        <header class="page-head">
          ${breadcrumb([{ label: '首页', href: '#/' }, { label: '我的收藏' }])}
          <h1 class="page-title">我的收藏</h1>
          <p class="page-sub">收藏保存在当前浏览器中，换设备或清理缓存后会丢失。</p>
        </header>
        <div style="padding:30px 0 80px;max-width:860px">
          ${items.length ? `<div class="fav-list">${items.map((it) => `
            <a class="section-row" href="${itemUrl(it.id)}" style="border:1px solid var(--line);background:var(--bg-elev)">
              <span class="s-no">${esc(it.no || '')}</span>
              <span><span class="s-title">${inline(it.title)}</span><span class="s-sum" style="display:block">${inline(it.book.title)} · ${inline(it.chapter.title)}</span></span>
              <span class="s-meta">${it.free ? '<span class="tag tag-free">免费</span>' : '<span class="tag tag-lock">完整版</span>'}</span>
            </a>`).join('')}</div>`
        : `<div class="empty"><div class="e-mark">☆</div><p>还没有收藏。在阅读页面点击「收藏本节」，之后就能在这里快速找到。</p><a class="btn btn-primary" href="#/library">去知识库</a></div>`}
        </div>
      </div>`;
  }

  /* ---------------- 搜索 ---------------- */
  let searchIndex = null;

  function plain(text) {
    return String(text || '')
      .replace(/\$\$[\s\S]*?\$\$/g, ' ')
      .replace(/\$[^$\n]*\$/g, ' ')
      .replace(/\*\*/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function buildSearchIndex() {
    const idx = [];
    books.forEach((book) => {
      book.volumes.forEach((vol) => {
        vol.chapters.forEach((ch) => {
          idx.push({
            group: '章节',
            title: ch.no + ' ' + ch.title,
            meta: book.title + ' · ' + vol.name,
            text: plain(ch.summary),
            url: chapterUrl(ch.id),
          });
          chapterSections(ch).forEach((s) => {
            if (!s.title) return;
            if (ch.sections && ch.sections.length) {
              idx.push({
                group: '学习单元',
                title: (s.no ? s.no + ' ' : '') + s.title,
                meta: book.title + ' · ' + ch.title,
                text: plain(s.summary) + ' ' + plain(s.intro) + ' ' + (s.points || []).map((p) => plain(p.h) + ' ' + plain(p.b)).join(' '),
                url: itemUrl(s.id),
              });
            }
            (s.points || []).forEach((p, i) => {
              idx.push({
                group: '知识点',
                title: p.h,
                meta: (ch.sections && ch.sections.length && s.no ? s.no + ' ' : '') + (s.title || ch.title) + ' · ' + book.title,
                text: plain(p.b),
                url: itemUrl(s.id) + '#kp-' + (i + 1),
              });
            });
          });
        });
      });
    });
    (DATA.formulas || []).forEach((f) => {
      idx.push({
        group: '公式',
        title: f.name,
        meta: f.stage + ' · ' + f.module,
        text: f.note + ' ' + f.latex,
        url: '#/formulas#f-' + f.id,
      });
    });
    searchIndex = idx;
    return idx;
  }

  function highlight(text, q) {
    if (!q) return esc(text);
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return esc(text);
    return esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
  }

  function search(q) {
    if (!searchIndex) buildSearchIndex();
    const query = q.trim();
    if (!query) return [];
    const terms = query.toLowerCase().split(/\s+/);
    const scored = [];
    searchIndex.forEach((e) => {
      const hay = (e.title + ' ' + e.meta + ' ' + e.text).toLowerCase();
      if (!terms.every((t) => hay.includes(t))) return;
      let score = 0;
      if (e.title.toLowerCase().includes(query.toLowerCase())) score += 40;
      if (e.title.toLowerCase().startsWith(query.toLowerCase())) score += 20;
      if (e.group === '知识点') score += 4;
      if (e.text.toLowerCase().includes(query.toLowerCase())) score += 6;
      scored.push([score, e]);
    });
    return scored.sort((a, b) => b[0] - a[0]).slice(0, 24).map((x) => x[1]);
  }

  let searchFocus = -1;

  function openSearch(prefill) {
    const overlay = $('#search-overlay');
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    const input = $('#search-input');
    input.value = prefill || '';
    searchFocus = -1;
    renderSearchResults(input.value);
    setTimeout(() => input.focus(), 20);
  }

  function closeSearch() {
    const overlay = $('#search-overlay');
    if (overlay.hidden) return;
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  function renderSearchResults(q) {
    const box = $('#search-results');
    if (!q.trim()) {
      box.innerHTML = `<div class="sr-empty">输入关键词，搜索章节标题、知识点或公式。<br>例如「基本不等式」「导数」「勾股定理」。</div>`;
      return;
    }
    const res = search(q);
    if (!res.length) {
      box.innerHTML = `<div class="sr-empty">没有找到「${esc(q)}」相关的内容。<br>可以试试更短的关键词。</div>`;
      return;
    }
    let html = '';
    const order = ['章节', '学习单元', '知识点', '公式'];
    const groups = new Map();
    res.forEach((r) => {
      if (!groups.has(r.group)) groups.set(r.group, []);
      groups.get(r.group).push(r);
    });
    let i = 0;
    [...groups.keys()].sort((a, b) => order.indexOf(a) - order.indexOf(b)).forEach((g) => {
      html += `<div class="sr-group">${esc(g)}</div>`;
      groups.get(g).forEach((r) => {
        const n = i++;
        html += `<a class="sr-item${n === 0 ? ' is-focus' : ''}" href="${r.url}" data-i="${n}">
          <div class="sr-title">${highlight(r.title, q)}</div>
          <div class="sr-meta">${esc(r.meta)}${r.text ? ' · ' + highlight(r.text.slice(0, 70), q) : ''}</div>
        </a>`;
      });
    });
    box.innerHTML = html;
    searchFocus = 0;
  }

  /* ---------------- 滚动进度 / 目录高亮 ---------------- */
  function updateReadingProgress() {
    const bar = $('#progress-bar');
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    if (bar) bar.style.width = pct + '%';
  }

  let spyObserver = null;
  function attachScrollSpy() {
    if (spyObserver) spyObserver.disconnect();
    const links = $$('.aside .toc-list a');
    if (!links.length) return;
    spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const id = en.target.id;
          links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + id));
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    $$('.kp[id]').forEach((el) => spyObserver.observe(el));
  }

  /* ---------------- 提示 ---------------- */
  let toastTimer = null;
  function toast(msg) {
    let el = $('#toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.style.cssText = 'position:fixed;left:50%;bottom:32px;transform:translateX(-50%) translateY(8px);background:var(--ink);color:var(--bg);padding:10px 18px;border-radius:999px;font-size:13px;z-index:300;opacity:0;transition:all .25s ease;pointer-events:none;box-shadow:var(--shadow-sm)';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateX(-50%) translateY(0)'; });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(-50%) translateY(8px)'; }, 1800);
  }

  /* ---------------- 主题 / 菜单 ---------------- */
  function initTheme() {
    const stored = localStorage.getItem(LS.theme);
    const theme = stored || 'light';
    document.documentElement.dataset.theme = theme;
    syncThemeMeta(theme);
  }
  function syncThemeMeta(theme) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#10141a' : '#f7f3ea');
  }
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem(LS.theme, next);
    syncThemeMeta(next);
  }

  function closeMobileNav() {
    const nav = $('#mobile-nav');
    const btn = $('#menu-toggle');
    if (nav && !nav.hidden) {
      nav.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    }
  }

  /* ---------------- 启动 ---------------- */
  function init() {
    initTheme();
    $('#year').textContent = String(new Date().getFullYear());

    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    bar.id = 'progress-bar';
    document.body.appendChild(bar);

    window.addEventListener('hashchange', route);
    window.addEventListener('scroll', updateReadingProgress, { passive: true });
    window.addEventListener('resize', updateReadingProgress);

    $('#theme-toggle').addEventListener('click', toggleTheme);
    $('#search-open').addEventListener('click', () => openSearch(''));
    $('#search-close').addEventListener('click', closeSearch);
    $('#search-overlay').addEventListener('click', (e) => { if (e.target.id === 'search-overlay') closeSearch(); });

    const input = $('#search-input');
    input.addEventListener('input', (e) => renderSearchResults(e.target.value));
    input.addEventListener('keydown', (e) => {
      const items = $$('.sr-item', $('#search-results'));
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!items.length) return;
        searchFocus = e.key === 'ArrowDown' ? Math.min(searchFocus + 1, items.length - 1) : Math.max(searchFocus - 1, 0);
        items.forEach((el, i) => el.classList.toggle('is-focus', i === searchFocus));
        items[searchFocus].scrollIntoView({ block: 'nearest' });
      }
      if (e.key === 'Enter') {
        const target = items[searchFocus] || items[0];
        if (target) { const href = target.getAttribute('href'); closeSearch(); navigate(href); }
      }
    });

    $$('#search-hints button').forEach((b) => b.addEventListener('click', () => {
      input.value = b.dataset.q;
      renderSearchResults(b.dataset.q);
      input.focus();
    }));

    $('#menu-toggle').addEventListener('click', () => {
      const nav = $('#mobile-nav');
      const open = nav.hidden;
      nav.hidden = !open;
      $('#menu-toggle').setAttribute('aria-expanded', String(open));
    });
    $$('[data-search]').forEach((b) => b.addEventListener('click', () => openSearch('')));
    $$('#mobile-nav a').forEach((a) => a.addEventListener('click', closeMobileNav));

    document.addEventListener('keydown', (e) => {
      const tag = (e.target.tagName || '').toLowerCase();
      const typing = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;
      if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        openSearch('');
      }
      if (e.key === 'Escape') closeSearch();
    });

    window.addEventListener('beforeprint', () => { document.body.dataset.printing = '1'; });
    window.addEventListener('afterprint', () => { delete document.body.dataset.printing; });

    route();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

