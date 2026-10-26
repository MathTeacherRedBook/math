/* 由 tools/build_data.py 自动生成，请勿手改 */
window.SITE_DATA = {
 "site": {
  "brand": "迈斯老师",
  "tagline": "初高中数学 · 知识体系",
  "intro": "我是一名初高中数学老师。这个网站把我多年整理的知识点，按教材章节重新排了一遍：概念、公式、定理各归其位。可以预习，可以复习，也可以直接拿来备课。",
  "bio": "从初中到高中，我把教材里的概念、公式、定理一条条拆开，去掉冗长的叙述，只留下最本质的内容，再按章节重新串起来。",
  "bio2": "这套整理最初是给自己学生用的。后来发现，老师备课、家长辅导、孩子预习复习，缺的往往不是题，而是一份「能把书读薄」的东西。",
  "about1": "很多同学面对数学，第一感觉是「内容太多、太散」：公式定理密密麻麻，仿佛一座望不见顶的山。于是学起来容易陷入两种困境：要么一头扎进题海，越做越迷茫；要么死记硬背结论，换道题目便束手无策。",
  "about2": "我始终认为，问题出在缺少一份「能把书读薄」的东西。数学的知识体系，从来不是一堆孤立公式的简单堆砌。函数与导数血脉相连，向量与三角恒等变换同根同源，计数原理与概率统计一脉相承。如果能把这些章节之间的内在逻辑打通，让每个公式都有来路、每个定理都有归处，呈现在你面前的就不再是一座碎片化的大山，而是一棵主干分明、枝叶清晰的知识树。",
  "contact": {
   "wechat": "maisimath",
   "xiaohongshu": "@迈斯老师",
   "note": "添加时备注「知识点」，方便我第一时间通过。"
  }
 },
 "books": [
  {
   "id": "hs-rja",
   "stage": "高中",
   "edition": "人教A版",
   "title": "高中数学知识点",
   "subtitle": "必修第一册、第二册 · 选择性必修第一册、第二册、第三册",
   "tone": "#1f3d5c",
   "volumes": [
    {
     "id": "bx1",
     "name": "必修第一册",
     "short": "必修一",
     "chapters": [
      {
       "no": "第一章",
       "title": "集合与常用逻辑用语",
       "summary": "用符号语言描述对象与关系，这是高中数学的第一种语言。",
       "sections": [
        {
         "no": "1.1",
         "title": "集合的概念",
         "summary": "元素、集合与三种表示法",
         "free": true,
         "minutes": 10,
         "intro": "集合是高中数学的第一种语言。这一节先把「元素」「集合」说清楚，再学会用符号把它们写出来。",
         "points": [
          {
           "h": "元素与集合",
           "b": "一般地，我们把研究对象统称为**元素**（element），把一些元素组成的总体叫做**集合**（set，简称集）。\n\n集合中的元素是不重复出现的。只要构成两个集合的元素是一样的，我们就称这两个集合是**相等**的。\n\n通常用大写字母 $A,B,C$ 表示集合，用小写字母 $a,b,c$ 表示元素。"
          },
          {
           "h": "集合元素的三特性",
           "b": "- **确定性**：给定一个集合，任何一个对象是否属于它是确定的。\n- **互异性**：集合中的元素互不相同，重复的元素只算一个。\n- **无序性**：元素没有先后顺序，$\\{1,2\\}$ 与 $\\{2,1\\}$ 是同一个集合。\n\n判断一组对象能否组成集合，关键就看「确定性」。"
          },
          {
           "h": "属于与不属于",
           "b": "如果 $a$ 是集合 $A$ 的元素，就说 $a$ **属于**（belong to）$A$，记作\n\n$$a \\in A.$$\n\n如果 $a$ 不是集合 $A$ 中的元素，就说 $a$ **不属于** $A$，记作\n\n$$a \\notin A.$$"
          },
          {
           "h": "常用数集及其记法",
           "b": "- $\\mathbf{N}$：自然数集（非负整数集）\n- $\\mathbf{N}^{*}$ 或 $\\mathbf{N}_{+}$：正整数集\n- $\\mathbf{Z}$：整数集\n- $\\mathbf{Q}$：有理数集\n- $\\mathbf{R}$：实数集\n\n这些符号以后会反复出现，建议在第一节课就记牢。"
          },
          {
           "h": "集合的表示法",
           "b": "- **列举法**：把集合中的元素一一列举出来，用花括号括起来，如 $\\{1,2,3\\}$。\n- **描述法**：把集合中元素的共同特征写出来，形如\n\n$$\\{x \\in A \\mid P(x)\\},$$\n\n表示集合 $A$ 中具有共同特征 $P(x)$ 的元素 $x$ 组成的集合。\n\n例如方程 $x^{2}-3x+2=0$ 的解集可以写成\n\n$$\\{x \\mid x^{2}-3x+2=0\\}=\\{1,2\\}.$$"
          }
         ],
         "tips": "判断能否构成集合，看「确定性」：像「接近 $1$ 的数」「高个子同学」都不满足确定性。\n\n用描述法时，要看清楚代表元素是谁：$\\{x \\mid y=x^{2}\\}$ 表示自变量 $x$ 的取值集合，而 $\\{y \\mid y=x^{2}\\}$ 表示函数值的集合，两者并不相同。",
         "id": "hs-rja-bx1-c1-s1"
        },
        {
         "no": "1.2",
         "title": "集合间的基本关系",
         "summary": "子集、真子集、相等与空集",
         "free": true,
         "minutes": 9,
         "intro": "两个集合之间最常见的关系是「包含」。这一节把子集、真子集、相等和空集一次说清。",
         "points": [
          {
           "h": "子集",
           "b": "若集合 $A$ 中任意一个元素都是集合 $B$ 中的元素，则称 $A$ 是 $B$ 的**子集**（subset），记作\n\n$$A \\subseteq B \\quad (\\text{或}\\ B \\supseteq A).$$\n\n用 Venn 图来看，就是 $A$ 的「圈」完全落在 $B$ 的「圈」里。"
          },
          {
           "h": "集合相等",
           "b": "若 $A \\subseteq B$ 且 $B \\subseteq A$，则 $A=B$。\n\n证明两个集合相等，标准做法就是「互相包含」：先证 $A \\subseteq B$，再证 $B \\subseteq A$。"
          },
          {
           "h": "真子集",
           "b": "若 $A \\subseteq B$，且存在 $x \\in B$ 但 $x \\notin A$，则称 $A$ 是 $B$ 的**真子集**（proper subset），记作\n\n$$A \\subsetneq B \\quad (\\text{或}\\ B \\supsetneq A).$$\n\n也就是说，$B$ 里至少有一个元素不在 $A$ 里。"
          },
          {
           "h": "空集",
           "b": "不含任何元素的集合叫做**空集**（empty set），记作 $\\varnothing$。规定：\n\n- 空集是任何集合的子集，即 $\\varnothing \\subseteq A$；\n- 空集是任何非空集合的真子集。"
          },
          {
           "h": "由基本关系得到的结论",
           "b": "- 任何一个集合是它本身的子集：$A \\subseteq A$。\n- 传递性：若 $A \\subseteq B$ 且 $B \\subseteq C$，则 $A \\subseteq C$。\n- 若集合 $A$ 含有 $n$ 个元素，则 $A$ 有 $2^{n}$ 个子集、$2^{n}-1$ 个真子集、$2^{n}-2$ 个非空真子集。"
          }
         ],
         "tips": "空集是「隐形陷阱」：题目说 $A \\subseteq B$ 时，别忘了 $A=\\varnothing$ 的情况；讨论含参集合时，先看二次项系数，再看判别式。\n\n另外，$\\in$ 与 $\\subseteq$ 是两种不同的关系：前者连接「元素与集合」，后者连接「集合与集合」。",
         "id": "hs-rja-bx1-c1-s2"
        },
        {
         "no": "1.3",
         "title": "集合的基本运算",
         "summary": "并集、交集、全集与补集",
         "free": true,
         "minutes": 10,
         "intro": "集合的运算，本质上是对「范围」做加减法。",
         "points": [
          {
           "h": "并集",
           "b": "由所有属于集合 $A$ 或属于集合 $B$ 的元素组成的集合，叫做 $A$ 与 $B$ 的**并集**（union set），记作 $A \\cup B$，即\n\n$$A \\cup B=\\{x \\mid x \\in A,\\ \\text{或}\\ x \\in B\\}.$$\n\n这里的「或」包含三种情况：只属于 $A$、只属于 $B$、同时属于两者。"
          },
          {
           "h": "交集",
           "b": "由既属于集合 $A$ 又属于集合 $B$ 的所有元素组成的集合，叫做 $A$ 与 $B$ 的**交集**（intersection set），记作 $A \\cap B$，即\n\n$$A \\cap B=\\{x \\mid x \\in A,\\ \\text{且}\\ x \\in B\\}.$$"
          },
          {
           "h": "全集与补集",
           "b": "含有所研究问题中涉及的所有元素的集合叫做**全集**（universal set），记作 $U$。\n\n对于全集 $U$ 的子集 $A$，由 $U$ 中所有不属于 $A$ 的元素组成的集合，叫做 $A$ 在 $U$ 中的**补集**（complementary set），记作 $\\complement_{U}A$，即\n\n$$\\complement_{U}A=\\{x \\mid x \\in U,\\ \\text{且}\\ x \\notin A\\}.$$"
          },
          {
           "h": "运算性质",
           "b": "- $A \\cup A=A$，$A \\cup \\varnothing=A$，$A \\cup B=B \\cup A$\n- $A \\cap A=A$，$A \\cap \\varnothing=\\varnothing$，$A \\cap B=B \\cap A$\n- $A \\subseteq B \\iff A \\cup B=B \\iff A \\cap B=A$\n- $A \\cup (\\complement_{U}A)=U$，$A \\cap (\\complement_{U}A)=\\varnothing$\n- 德摩根律：\n\n$$\\complement_{U}(A \\cup B)=(\\complement_{U}A) \\cap (\\complement_{U}B),$$\n\n$$\\complement_{U}(A \\cap B)=(\\complement_{U}A) \\cup (\\complement_{U}B).$$"
          }
         ],
         "tips": "数轴是处理集合运算最好的草稿纸：并集看「覆盖」，交集看「重叠」，补集看「剩余」。\n\n端点能否取到，要单独用实心点、空心点标出来，最后再写成区间或集合的形式。",
         "id": "hs-rja-bx1-c1-s3"
        },
        {
         "no": "1.4",
         "title": "充分条件与必要条件",
         "summary": "用「推出」关系判断条件",
         "free": true,
         "minutes": 12,
         "intro": "「若 $p$ 则 $q$」是数学里最常见的句子。这一节教你用「推出」关系判断条件。",
         "points": [
          {
           "h": "命题",
           "b": "一般地，我们把用语言、符号或式子表达的，可以判断真假的陈述句叫做**命题**。\n\n命题常写成「若 $p$，则 $q$」的形式，其中 $p$ 为条件，$q$ 为结论。"
          },
          {
           "h": "充分条件与必要条件",
           "b": "一般地，「若 $p$，则 $q$」为真命题，是指由 $p$ 通过推理可以得出 $q$。这时我们就说，由 $p$ 可以推出 $q$，记作\n\n$$p \\Rightarrow q,$$\n\n并且说，$p$ 是 $q$ 的**充分条件**（sufficient condition），$q$ 是 $p$ 的**必要条件**（necessary condition）。"
          },
          {
           "h": "充要条件",
           "b": "若 $p \\Rightarrow q$ 且 $q \\Rightarrow p$，则 $p$ 与 $q$ 互为**充分必要条件**，简称**充要条件**（necessary and sufficient condition），记作\n\n$$p \\Leftrightarrow q.$$\n\n按「谁能推出谁」，条件可以分为四类：\n\n- $p \\Rightarrow q$ 且 $q \\nRightarrow p$：$p$ 是 $q$ 的充分不必要条件；\n- $q \\Rightarrow p$ 且 $p \\nRightarrow q$：$p$ 是 $q$ 的必要不充分条件；\n- $p \\Leftrightarrow q$：$p$ 是 $q$ 的充要条件；\n- 两个方向都推不过去：$p$ 是 $q$ 的既不充分也不必要条件。"
          },
          {
           "h": "从集合看条件",
           "b": "设 $A=\\{x \\mid p(x)\\}$，$B=\\{x \\mid q(x)\\}$，则\n\n$$p \\Rightarrow q \\iff A \\subseteq B.$$\n\n于是有「小范围推出大范围」：小集合对应充分条件，大集合对应必要条件。\n\n这也是判断条件关系最稳的方法：把 $p,q$ 分别解成集合，再看包含关系。"
          },
          {
           "h": "判定定理与性质定理",
           "b": "数学中的**判定定理**给出的是充分条件：满足条件，就可以判定结论成立。\n\n**性质定理**给出的是必要条件：具备结论的性质，必然满足相应的条件。"
          }
         ],
         "story": {
          "title": "小故事 · 三把钥匙",
          "b": "老国王临终前，把三个儿子叫到宝库前：「宝库的门由三重锁守护，谁能打开它，谁就是新国王。」\n\n大王子阿满看到第一行字「只要插入铜钥匙，门就会开」，插进铜钥匙，第一道锁开了。他哈哈大笑：「有铜钥匙就足够了！」——铜钥匙是**充分的**，但不是**必需的**。\n\n二王子阿慎读到第二行「只有插入银钥匙，门才会开」，试了银钥匙、金钥匙、铁钥匙，门都纹丝不动。他明白：银钥匙是**必需的**，但光有它还不够。\n\n三王子阿智把三行字都抄了下来，一把一把试过去：铜钥匙开第一道，银钥匙加转三圈开第二道，玉钥匙开第三道。「当且仅当插入玉钥匙，锁才开」——这才是**充要条件**。\n\n分清「有它就行」和「没它不行」，是这一节最重要的一件事。"
         },
         "tips": "判断「$p$ 是 $q$ 的什么条件」，先分清谁推谁，再想反例：能举出反例，就说明推不过去。\n\n「$A$ 是 $B$ 的充分条件」与「$B$ 的充分条件是 $A$」是同一句话，读题时注意语序。",
         "id": "hs-rja-bx1-c1-s4"
        },
        {
         "no": "1.5",
         "title": "全称量词与存在量词",
         "summary": "量词命题及其否定",
         "free": true,
         "minutes": 9,
         "intro": "「所有」「存在」是数学陈述里的两个量词，它们决定了命题的强度，也决定了怎么否定。",
         "points": [
          {
           "h": "全称量词与全称量词命题",
           "b": "「所有的」「任意一个」等，叫做**全称量词**（universal quantifier），用符号 $\\forall$ 表示。\n\n含有全称量词的命题叫做**全称量词命题**，一般形式为\n\n$$\\forall x \\in M,\\ p(x).$$"
          },
          {
           "h": "存在量词与存在量词命题",
           "b": "「存在一个」「至少有一个」等，叫做**存在量词**（existential quantifier），用符号 $\\exists$ 表示。\n\n含有存在量词的命题叫做**存在量词命题**，一般形式为\n\n$$\\exists x \\in M,\\ p(x).$$"
          },
          {
           "h": "命题的否定",
           "b": "- 全称量词命题的否定是存在量词命题：\n\n$$\\neg(\\forall x \\in M,\\ p(x)) \\iff \\exists x \\in M,\\ \\neg p(x).$$\n\n- 存在量词命题的否定是全称量词命题：\n\n$$\\neg(\\exists x \\in M,\\ p(x)) \\iff \\forall x \\in M,\\ \\neg p(x).$$\n\n规律是八个字：**量词互换，结论否定**。"
          },
          {
           "h": "常见词语的否定",
           "b": "- 「都是」的否定是「不都是」（不是「都不是」）\n- 「至少有一个」的否定是「一个也没有」\n- 「至多有一个」的否定是「至少有两个」\n- 「$>$」的否定是「$\\le$」，「$\\ge$」的否定是「$<$」"
          }
         ],
         "tips": "写否定时，两步都不能少：先换量词，再否结论。\n\n判断一个全称命题为假，只需举出一个反例；判断一个存在命题为真，也只需找到一个实例。",
         "id": "hs-rja-bx1-c1-s5"
        }
       ],
       "id": "hs-rja-bx1-ch1"
      },
      {
       "no": "第二章",
       "title": "一元二次函数、方程和不等式",
       "summary": "从等式性质到基本不等式，建立不等关系的运算与最值意识。",
       "sections": [
        {
         "no": "2.1",
         "title": "等式性质与不等式性质",
         "summary": "比较大小与不等式的基本性质",
         "minutes": 9,
         "id": "hs-rja-bx1-c2-s1"
        },
        {
         "no": "2.2",
         "title": "基本不等式",
         "summary": "一正、二定、三相等",
         "free": true,
         "minutes": 12,
         "intro": "它是高中最重要的不等式，也是求最值的利器。",
         "points": [
          {
           "h": "基本不等式",
           "b": "若 $a>0,\\ b>0$，则\n\n$$\\sqrt{ab} \\le \\frac{a+b}{2},$$\n\n当且仅当 $a=b$ 时取等号。"
          },
          {
           "h": "两个平均数",
           "b": "$\\frac{a+b}{2}$ 叫做 $a,b$ 的**算术平均数**，$\\sqrt{ab}$ 叫做 $a,b$ 的**几何平均数**。\n\n基本不等式说的就是：几何平均数不超过算术平均数。"
          },
          {
           "h": "最值结论",
           "b": "- 若积 $xy=P$（定值），$x>0,\\ y>0$，则当 $x=y$ 时，$x+y$ 有最小值 $2\\sqrt{P}$；\n- 若和 $x+y=S$（定值），$x>0,\\ y>0$，则当 $x=y$ 时，$xy$ 有最大值 $\\frac{S^{2}}{4}$。"
          },
          {
           "h": "面积法证明",
           "b": "构造一个边长为 $a+b$ 的大正方形，四周是四个 $a \\times b$ 的矩形（面积为 $4ab$），中间留出一个边长为 $|a-b|$ 的小正方形。\n\n由面积关系\n\n$$(a+b)^{2}=4ab+(a-b)^{2} \\ge 4ab.$$\n\n两边开平方（$a,b>0$），得\n\n$$a+b \\ge 2\\sqrt{ab} \\quad\\Longrightarrow\\quad \\frac{a+b}{2} \\ge \\sqrt{ab}.$$\n\n当且仅当 $a=b$ 时，$(a-b)^{2}=0$，等号成立。"
          },
          {
           "h": "常用变形",
           "b": "- $a+b \\ge 2\\sqrt{ab}$，$ab \\le \\left(\\frac{a+b}{2}\\right)^{2}$（$a,b>0$）\n- $a^{2}+b^{2} \\ge 2ab$（当且仅当 $a=b$ 时取等号）\n- $\\frac{1}{a}+\\frac{1}{b} \\ge \\frac{4}{a+b}$（$a,b>0$）"
          }
         ],
         "tips": "用基本不等式求最值，口诀是「一正、二定、三相等」：先确认各项为正，再凑出定值，最后验证等号能否取到。\n\n等号取不到时，说明最值不在 $a=b$ 处取得，要改用函数的单调性。",
         "id": "hs-rja-bx1-c2-s2"
        },
        {
         "no": "2.3",
         "title": "二次函数与一元二次方程、不等式",
         "summary": "用图象解一元二次不等式",
         "minutes": 12,
         "id": "hs-rja-bx1-c2-s3"
        }
       ],
       "id": "hs-rja-bx1-ch2"
      },
      {
       "no": "第三章",
       "title": "函数的概念与性质",
       "summary": "函数是贯穿高中的主线：定义域、值域、单调性与奇偶性。",
       "sections": [
        {
         "no": "3.1",
         "title": "函数的概念及其表示",
         "summary": "定义域、值域与三种表示法",
         "minutes": 10,
         "id": "hs-rja-bx1-c3-s1"
        },
        {
         "no": "3.2",
         "title": "函数的基本性质",
         "summary": "单调性、最值与奇偶性",
         "minutes": 12,
         "id": "hs-rja-bx1-c3-s2"
        },
        {
         "no": "3.3",
         "title": "幂函数",
         "summary": "五个常见幂函数的图象",
         "minutes": 8,
         "id": "hs-rja-bx1-c3-s3"
        }
       ],
       "id": "hs-rja-bx1-ch3"
      },
      {
       "no": "第四章",
       "title": "指数函数与对数函数",
       "summary": "指数与对数是同一关系的两种写法，图像与运算性质是核心。",
       "sections": [
        {
         "no": "4.1",
         "title": "指数",
         "summary": "根式与分数指数幂",
         "minutes": 8,
         "id": "hs-rja-bx1-c4-s1"
        },
        {
         "no": "4.2",
         "title": "指数函数",
         "summary": "图象、单调性与比较大小",
         "minutes": 10,
         "id": "hs-rja-bx1-c4-s2"
        },
        {
         "no": "4.3",
         "title": "对数",
         "summary": "对数定义与运算性质",
         "minutes": 10,
         "id": "hs-rja-bx1-c4-s3"
        },
        {
         "no": "4.4",
         "title": "对数函数",
         "summary": "与指数函数互为反函数",
         "minutes": 10,
         "id": "hs-rja-bx1-c4-s4"
        },
        {
         "no": "4.5",
         "title": "函数的应用",
         "summary": "零点、二分法与建模",
         "minutes": 10,
         "id": "hs-rja-bx1-c4-s5"
        }
       ],
       "id": "hs-rja-bx1-ch4"
      },
      {
       "no": "第五章",
       "title": "三角函数",
       "summary": "角、弧度、单位圆与周期性，把几何量化成函数。",
       "sections": [
        {
         "no": "5.1",
         "title": "任意角和弧度制",
         "summary": "角的推广与弧度制",
         "minutes": 9,
         "id": "hs-rja-bx1-c5-s1"
        },
        {
         "no": "5.2",
         "title": "三角函数的概念",
         "summary": "单位圆定义与符号规律",
         "minutes": 10,
         "id": "hs-rja-bx1-c5-s2"
        },
        {
         "no": "5.3",
         "title": "诱导公式",
         "summary": "奇变偶不变，符号看象限",
         "minutes": 10,
         "id": "hs-rja-bx1-c5-s3"
        },
        {
         "no": "5.4",
         "title": "三角函数的图象与性质",
         "summary": "周期、单调区间与对称轴",
         "minutes": 12,
         "id": "hs-rja-bx1-c5-s4"
        },
        {
         "no": "5.5",
         "title": "三角恒等变换",
         "summary": "和差角、二倍角与辅助角",
         "minutes": 14,
         "id": "hs-rja-bx1-c5-s5"
        },
        {
         "no": "5.6",
         "title": "函数 $y=A\\sin(\\omega x+\\varphi)$",
         "summary": "图象变换与参数意义",
         "minutes": 12,
         "id": "hs-rja-bx1-c5-s6"
        }
       ],
       "id": "hs-rja-bx1-ch5"
      }
     ]
    },
    {
     "id": "bx2",
     "name": "必修第二册",
     "short": "必修二",
     "chapters": [
      {
       "no": "第六章",
       "title": "平面向量及其应用",
       "summary": "用向量把几何问题代数化：运算、坐标与数量积。",
       "sections": [
        {
         "no": "6.1",
         "title": "平面向量的概念",
         "summary": "向量、模、共线向量",
         "minutes": 8,
         "id": "hs-rja-bx2-c1-s1"
        },
        {
         "no": "6.2",
         "title": "平面向量的运算",
         "summary": "加减法、数乘与数量积",
         "minutes": 12,
         "id": "hs-rja-bx2-c1-s2"
        },
        {
         "no": "6.3",
         "title": "平面向量基本定理及坐标表示",
         "summary": "基底思想与坐标运算",
         "minutes": 12,
         "id": "hs-rja-bx2-c1-s3"
        },
        {
         "no": "6.4",
         "title": "平面向量的应用",
         "summary": "用向量解三角形与几何问题",
         "minutes": 12,
         "id": "hs-rja-bx2-c1-s4"
        }
       ],
       "id": "hs-rja-bx2-ch1"
      },
      {
       "no": "第七章",
       "title": "复数",
       "summary": "数系的又一次扩充：从 $i^{2}=-1$ 到复平面。",
       "sections": [
        {
         "no": "7.1",
         "title": "复数的概念",
         "summary": "实部、虚部与复平面",
         "minutes": 8,
         "id": "hs-rja-bx2-c2-s1"
        },
        {
         "no": "7.2",
         "title": "复数的四则运算",
         "summary": "加减乘除与共轭复数",
         "minutes": 10,
         "id": "hs-rja-bx2-c2-s2"
        },
        {
         "no": "7.3*",
         "title": "复数的三角表示",
         "summary": "模、辐角与乘除的几何意义",
         "minutes": 10,
         "id": "hs-rja-bx2-c2-s3"
        }
       ],
       "id": "hs-rja-bx2-ch2"
      },
      {
       "no": "第八章",
       "title": "立体几何初步",
       "summary": "从直观图到位置关系，建立空间想象与证明框架。",
       "sections": [
        {
         "no": "8.1",
         "title": "基本立体图形",
         "summary": "棱柱、棱锥、棱台与旋转体",
         "minutes": 10,
         "id": "hs-rja-bx2-c3-s1"
        },
        {
         "no": "8.2",
         "title": "立体图形的直观图",
         "summary": "斜二测画法",
         "minutes": 8,
         "id": "hs-rja-bx2-c3-s2"
        },
        {
         "no": "8.3",
         "title": "简单几何体的表面积与体积",
         "summary": "展开图与体积公式",
         "minutes": 12,
         "id": "hs-rja-bx2-c3-s3"
        },
        {
         "no": "8.4",
         "title": "空间点、直线、平面之间的位置关系",
         "summary": "基本事实与异面直线",
         "minutes": 12,
         "id": "hs-rja-bx2-c3-s4"
        },
        {
         "no": "8.5",
         "title": "空间直线、平面的平行",
         "summary": "线面平行的判定与性质",
         "minutes": 12,
         "id": "hs-rja-bx2-c3-s5"
        },
        {
         "no": "8.6",
         "title": "空间直线、平面的垂直",
         "summary": "线面垂直的判定与性质",
         "minutes": 14,
         "id": "hs-rja-bx2-c3-s6"
        }
       ],
       "id": "hs-rja-bx2-ch3"
      },
      {
       "no": "第九章",
       "title": "统计",
       "summary": "抽样与用样本估计总体，理解数据的代表性。",
       "sections": [
        {
         "no": "9.1",
         "title": "随机抽样",
         "summary": "简单随机抽样与分层抽样",
         "minutes": 10,
         "id": "hs-rja-bx2-c4-s1"
        },
        {
         "no": "9.2",
         "title": "用样本估计总体",
         "summary": "频率分布与数字特征",
         "minutes": 12,
         "id": "hs-rja-bx2-c4-s2"
        }
       ],
       "id": "hs-rja-bx2-ch4"
      },
      {
       "no": "第十章",
       "title": "概率",
       "summary": "随机事件的度量：古典概型、独立性与频率。",
       "sections": [
        {
         "no": "10.1",
         "title": "随机事件与概率",
         "summary": "样本空间与古典概型",
         "minutes": 12,
         "id": "hs-rja-bx2-c5-s1"
        },
        {
         "no": "10.2",
         "title": "事件的相互独立性",
         "summary": "独立事件与乘法公式",
         "minutes": 10,
         "id": "hs-rja-bx2-c5-s2"
        },
        {
         "no": "10.3",
         "title": "频率与概率",
         "summary": "用频率估计概率",
         "minutes": 8,
         "id": "hs-rja-bx2-c5-s3"
        }
       ],
       "id": "hs-rja-bx2-ch5"
      }
     ]
    },
    {
     "id": "xx1",
     "name": "选择性必修第一册",
     "short": "选必一",
     "chapters": [
      {
       "no": "第一章",
       "title": "空间向量与立体几何",
       "summary": "用坐标与向量算角度、距离，把证明变成计算。",
       "sections": [
        {
         "no": "1.1",
         "title": "空间向量及其运算",
         "summary": "线性运算与数量积",
         "minutes": 10,
         "id": "hs-rja-xx1-c1-s1"
        },
        {
         "no": "1.2",
         "title": "空间向量基本定理",
         "summary": "基底与坐标化",
         "minutes": 10,
         "id": "hs-rja-xx1-c1-s2"
        },
        {
         "no": "1.3",
         "title": "空间向量及其运算的坐标表示",
         "summary": "用坐标算夹角与距离",
         "minutes": 12,
         "id": "hs-rja-xx1-c1-s3"
        },
        {
         "no": "1.4",
         "title": "空间向量的应用",
         "summary": "法向量与二面角",
         "minutes": 14,
         "id": "hs-rja-xx1-c1-s4"
        }
       ],
       "id": "hs-rja-xx1-ch1"
      },
      {
       "no": "第二章",
       "title": "直线和圆的方程",
       "summary": "解析几何的起点：用方程研究直线与圆。",
       "sections": [
        {
         "no": "2.1",
         "title": "直线的倾斜角与斜率",
         "summary": "倾斜角、斜率与方向向量",
         "minutes": 10,
         "id": "hs-rja-xx1-c2-s1"
        },
        {
         "no": "2.2",
         "title": "直线的方程",
         "summary": "点斜式、斜截式与一般式",
         "minutes": 10,
         "id": "hs-rja-xx1-c2-s2"
        },
        {
         "no": "2.3",
         "title": "直线的交点坐标与距离公式",
         "summary": "交点、距离与对称问题",
         "minutes": 12,
         "id": "hs-rja-xx1-c2-s3"
        },
        {
         "no": "2.4",
         "title": "圆的方程",
         "summary": "标准方程与一般方程",
         "minutes": 10,
         "id": "hs-rja-xx1-c2-s4"
        },
        {
         "no": "2.5",
         "title": "直线与圆、圆与圆的位置关系",
         "summary": "用圆心距判断位置关系",
         "minutes": 12,
         "id": "hs-rja-xx1-c2-s5"
        }
       ],
       "id": "hs-rja-xx1-ch2"
      },
      {
       "no": "第三章",
       "title": "圆锥曲线的方程",
       "summary": "椭圆、双曲线、抛物线：定义、方程与几何性质。",
       "sections": [
        {
         "no": "3.1",
         "title": "椭圆",
         "summary": "定义、标准方程与离心率",
         "minutes": 14,
         "id": "hs-rja-xx1-c3-s1"
        },
        {
         "no": "3.2",
         "title": "双曲线",
         "summary": "渐近线与离心率",
         "minutes": 14,
         "id": "hs-rja-xx1-c3-s2"
        },
        {
         "no": "3.3",
         "title": "抛物线",
         "summary": "焦点、准线与通径",
         "minutes": 12,
         "id": "hs-rja-xx1-c3-s3"
        }
       ],
       "id": "hs-rja-xx1-ch3"
      }
     ]
    },
    {
     "id": "xx2",
     "name": "选择性必修第二册",
     "short": "选必二",
     "chapters": [
      {
       "no": "第四章",
       "title": "数列",
       "summary": "等差、等比与递推，把离散规律写成通项与求和。",
       "sections": [
        {
         "no": "4.1",
         "title": "数列的概念",
         "summary": "通项公式与递推公式",
         "minutes": 9,
         "id": "hs-rja-xx2-c1-s1"
        },
        {
         "no": "4.2",
         "title": "等差数列",
         "summary": "通项、求和与性质",
         "minutes": 12,
         "id": "hs-rja-xx2-c1-s2"
        },
        {
         "no": "4.3",
         "title": "等比数列",
         "summary": "通项、求和与性质",
         "minutes": 12,
         "id": "hs-rja-xx2-c1-s3"
        },
        {
         "no": "4.4",
         "title": "数学归纳法",
         "summary": "两步证明与常见变形",
         "minutes": 12,
         "id": "hs-rja-xx2-c1-s4"
        }
       ],
       "id": "hs-rja-xx2-ch1"
      },
      {
       "no": "第五章",
       "title": "一元函数的导数及其应用",
       "summary": "从平均变化率到瞬时变化率，用导数研究单调与极值。",
       "sections": [
        {
         "no": "5.1",
         "title": "导数的概念及其意义",
         "summary": "瞬时变化率与切线",
         "minutes": 12,
         "id": "hs-rja-xx2-c2-s1"
        },
        {
         "no": "5.2",
         "title": "导数的运算",
         "summary": "基本公式与四则运算",
         "minutes": 12,
         "id": "hs-rja-xx2-c2-s2"
        },
        {
         "no": "5.3",
         "title": "导数在研究函数中的应用",
         "summary": "单调性、极值与最值",
         "minutes": 16,
         "id": "hs-rja-xx2-c2-s3"
        }
       ],
       "id": "hs-rja-xx2-ch2"
      }
     ]
    },
    {
     "id": "xx3",
     "name": "选择性必修第三册",
     "short": "选必三",
     "chapters": [
      {
       "no": "第六章",
       "title": "计数原理",
       "summary": "分类加法、分步乘法，排列组合与二项式定理。",
       "sections": [
        {
         "no": "6.1",
         "title": "分类加法计数原理与分步乘法计数原理",
         "summary": "两个基本原理",
         "minutes": 10,
         "id": "hs-rja-xx3-c1-s1"
        },
        {
         "no": "6.2",
         "title": "排列与组合",
         "summary": "排列数、组合数与常见模型",
         "minutes": 14,
         "id": "hs-rja-xx3-c1-s2"
        },
        {
         "no": "6.3",
         "title": "二项式定理",
         "summary": "通项、系数与赋值法",
         "minutes": 12,
         "id": "hs-rja-xx3-c1-s3"
        }
       ],
       "id": "hs-rja-xx3-ch1"
      },
      {
       "no": "第七章",
       "title": "随机变量及其分布",
       "summary": "把随机试验的结果数量化：分布列、期望与方差。",
       "sections": [
        {
         "no": "7.1",
         "title": "条件概率与全概率公式",
         "summary": "条件概率、乘法与全概率",
         "minutes": 12,
         "id": "hs-rja-xx3-c2-s1"
        },
        {
         "no": "7.2",
         "title": "离散型随机变量及其分布列",
         "summary": "分布列的性质与求法",
         "minutes": 12,
         "id": "hs-rja-xx3-c2-s2"
        },
        {
         "no": "7.3",
         "title": "离散型随机变量的数字特征",
         "summary": "均值、方差与线性性质",
         "minutes": 12,
         "id": "hs-rja-xx3-c2-s3"
        },
        {
         "no": "7.4",
         "title": "二项分布与超几何分布",
         "summary": "模型识别与公式",
         "minutes": 14,
         "id": "hs-rja-xx3-c2-s4"
        },
        {
         "no": "7.5",
         "title": "正态分布",
         "summary": "正态曲线与 $3\\sigma$ 原则",
         "minutes": 10,
         "id": "hs-rja-xx3-c2-s5"
        }
       ],
       "id": "hs-rja-xx3-ch2"
      },
      {
       "no": "第八章",
       "title": "成对数据的统计分析",
       "summary": "相关、回归与独立性检验，用数据做判断。",
       "sections": [
        {
         "no": "8.1",
         "title": "成对数据的统计相关性",
         "summary": "散点图与相关系数",
         "minutes": 10,
         "id": "hs-rja-xx3-c3-s1"
        },
        {
         "no": "8.2",
         "title": "一元线性回归模型及其应用",
         "summary": "最小二乘与残差分析",
         "minutes": 12,
         "id": "hs-rja-xx3-c3-s2"
        },
        {
         "no": "8.3",
         "title": "列联表与独立性检验",
         "summary": "$\\chi^{2}$ 统计量与判断规则",
         "minutes": 12,
         "id": "hs-rja-xx3-c3-s3"
        }
       ],
       "id": "hs-rja-xx3-ch3"
      }
     ]
    }
   ]
  },
  {
   "id": "cz-rj",
   "stage": "初中",
   "edition": "人教版",
   "title": "初中数学知识点",
   "subtitle": "七年级至九年级 · 按年级分册整理",
   "tone": "#a83b2c",
   "volumes": [
    {
     "id": "7a",
     "name": "七年级上册",
     "short": "七上",
     "chapters": [
      {
       "no": "第一章",
       "title": "有理数",
       "summary": "正负数、数轴、相反数与绝对值，把数扩充到有理数。",
       "free": true,
       "minutes": 18,
       "intro": "从正负数开始，把「数」扩充到有理数，再借数轴把数与点对应起来。",
       "points": [
        {
         "h": "正数与负数",
         "b": "大于 $0$ 的数叫做**正数**（如 $3,\\ 50,\\ 7.8\\%$），可以在前面加上「$+$」号。\n\n在正数前面加上「$-$」号的数叫做**负数**（如 $-3,\\ -10,\\ -0.7$）。"
        },
        {
         "h": "$0$ 的意义",
         "b": "$0$ 既不是正数，也不是负数，它是正数与负数的分界。\n\n$0$ 有实际意义：$0^{\\circ}\\mathrm{C}$ 是冰水混合物的温度，海拔 $0\\ \\mathrm{m}$ 是海平面的高度。"
        },
        {
         "h": "相反意义的量",
         "b": "零上与零下、盈利与亏损、增长与减少，都是具有相反意义的量，可以用正数和负数分别表示。\n\n例如收入 $100$ 元记作 $+100$ 元，支出 $30$ 元记作 $-30$ 元。"
        },
        {
         "h": "有理数",
         "b": "能够写成 $\\frac{p}{q}$（$p,q$ 为整数，$q \\ne 0$）形式的数叫做**有理数**，包括整数和分数。"
        },
        {
         "h": "有理数的分类",
         "b": "- 按定义分：整数（正整数、$0$、负整数）与分数（正分数、负分数）。\n- 按符号分：正有理数、$0$、负有理数。\n- 有限小数和无限循环小数都可以化成分数，因此都是有理数。"
        },
        {
         "h": "数轴",
         "b": "规定了**原点**、**正方向**和**单位长度**的直线叫做数轴。\n\n三要素缺一不可：原点表示 $0$，正方向通常向右，单位长度要统一。"
        },
        {
         "h": "数轴上的点与有理数",
         "b": "有理数都可以用数轴上的点表示：正数在正半轴，负数在负半轴，到原点的距离就是它的绝对值。"
        },
        {
         "h": "相反数",
         "b": "只有符号不同的两个数互为**相反数**（如 $3$ 与 $-3$，$\\frac{1}{2}$ 与 $-\\frac{1}{2}$）。\n\n性质：\n\n- $0$ 的相反数是 $0$；\n- $a$ 的相反数是 $-a$；\n- 在数轴上，互为相反数的两个点关于原点对称。"
        },
        {
         "h": "绝对值",
         "b": "数轴上表示数 $a$ 的点与原点的距离，叫做 $a$ 的**绝对值**，记作 $|a|$。"
        },
        {
         "h": "绝对值的性质",
         "b": "$$|a|=\\begin{cases} a, & a>0,\\\\ 0, & a=0,\\\\ -a, & a<0. \\end{cases}$$\n\n绝对值一定是非负数，即 $|a| \\ge 0$。"
        },
        {
         "h": "有理数的大小比较",
         "b": "- **数轴法则**：数轴上左边的数小于右边的数。\n- **直接法则**：正数 $>0>$ 负数；两个负数，绝对值大的反而小。"
        }
       ],
       "tips": "$-a$ 不一定是负数：当 $a<0$ 时，$-a$ 是正数。判断符号时，先看 $a$ 本身的正负，再下结论。\n\n比较两个负数的大小时，先比较绝对值，绝对值大的那个反而小。",
       "id": "cz-rj-7a-ch1",
       "sections": []
      },
      {
       "no": "第二章",
       "title": "有理数的运算",
       "summary": "加减乘除、乘方与科学记数法。",
       "minutes": 18,
       "id": "cz-rj-7a-ch2",
       "sections": []
      },
      {
       "no": "第三章",
       "title": "代数式",
       "summary": "用字母表示数，列代数式表示数量关系。",
       "minutes": 12,
       "id": "cz-rj-7a-ch3",
       "sections": []
      },
      {
       "no": "第四章",
       "title": "整式的加减",
       "summary": "单项式、多项式、同类项与去括号。",
       "minutes": 14,
       "id": "cz-rj-7a-ch4",
       "sections": []
      },
      {
       "no": "第五章",
       "title": "一元一次方程",
       "summary": "等式性质与解方程的五步法。",
       "minutes": 16,
       "id": "cz-rj-7a-ch5",
       "sections": []
      },
      {
       "no": "第六章",
       "title": "几何图形初步",
       "summary": "直线、射线、线段、角与余角补角。",
       "minutes": 16,
       "id": "cz-rj-7a-ch6",
       "sections": []
      }
     ]
    },
    {
     "id": "7b",
     "name": "七年级下册",
     "short": "七下",
     "chapters": [
      {
       "no": "第七章",
       "title": "相交线与平行线",
       "summary": "对顶角、垂线、平行线的判定与性质。",
       "minutes": 16,
       "id": "cz-rj-7b-ch1",
       "sections": []
      },
      {
       "no": "第八章",
       "title": "实数",
       "summary": "平方根、立方根与无理数。",
       "minutes": 14,
       "id": "cz-rj-7b-ch2",
       "sections": []
      },
      {
       "no": "第九章",
       "title": "平面直角坐标系",
       "summary": "用有序数对确定位置。",
       "minutes": 12,
       "id": "cz-rj-7b-ch3",
       "sections": []
      },
      {
       "no": "第十章",
       "title": "二元一次方程组",
       "summary": "代入消元与加减消元。",
       "minutes": 16,
       "id": "cz-rj-7b-ch4",
       "sections": []
      },
      {
       "no": "第十一章",
       "title": "不等式与不等式组",
       "summary": "不等式的性质与解集。",
       "minutes": 14,
       "id": "cz-rj-7b-ch5",
       "sections": []
      },
      {
       "no": "第十二章",
       "title": "数据的收集、整理与描述",
       "summary": "全面调查、抽样调查与统计图。",
       "minutes": 12,
       "id": "cz-rj-7b-ch6",
       "sections": []
      }
     ]
    },
    {
     "id": "8a",
     "name": "八年级上册",
     "short": "八上",
     "chapters": [
      {
       "no": "第十三章",
       "title": "三角形",
       "summary": "三边关系、内角和与外角。",
       "minutes": 14,
       "id": "cz-rj-8a-ch1",
       "sections": []
      },
      {
       "no": "第十四章",
       "title": "全等三角形",
       "summary": "SSS、SAS、ASA、AAS、HL。",
       "minutes": 16,
       "id": "cz-rj-8a-ch2",
       "sections": []
      },
      {
       "no": "第十五章",
       "title": "轴对称",
       "summary": "轴对称图形、垂直平分线与等腰三角形。",
       "minutes": 16,
       "id": "cz-rj-8a-ch3",
       "sections": []
      },
      {
       "no": "第十六章",
       "title": "整式的乘法",
       "summary": "幂的运算、乘法公式与整式除法。",
       "minutes": 16,
       "id": "cz-rj-8a-ch4",
       "sections": []
      },
      {
       "no": "第十七章",
       "title": "因式分解",
       "summary": "提公因式与公式法。",
       "minutes": 14,
       "id": "cz-rj-8a-ch5",
       "sections": []
      },
      {
       "no": "第十八章",
       "title": "分式",
       "summary": "分式的运算与分式方程。",
       "minutes": 16,
       "id": "cz-rj-8a-ch6",
       "sections": []
      }
     ]
    },
    {
     "id": "8b",
     "name": "八年级下册",
     "short": "八下",
     "chapters": [
      {
       "no": "第十九章",
       "title": "二次根式",
       "summary": "二次根式的性质与化简。",
       "minutes": 14,
       "id": "cz-rj-8b-ch1",
       "sections": []
      },
      {
       "no": "第二十章",
       "title": "勾股定理",
       "summary": "勾股定理及其逆定理。",
       "minutes": 16,
       "id": "cz-rj-8b-ch2",
       "sections": []
      },
      {
       "no": "第二十一章",
       "title": "平行四边形",
       "summary": "平行四边形的性质与判定。",
       "minutes": 16,
       "id": "cz-rj-8b-ch3",
       "sections": []
      },
      {
       "no": "第二十二章",
       "title": "一次函数",
       "summary": "图象、性质与待定系数法。",
       "minutes": 18,
       "id": "cz-rj-8b-ch4",
       "sections": []
      },
      {
       "no": "第二十三章",
       "title": "数据的分析",
       "summary": "平均数、中位数、众数与方差。",
       "minutes": 12,
       "id": "cz-rj-8b-ch5",
       "sections": []
      }
     ]
    },
    {
     "id": "9a",
     "name": "九年级上册",
     "short": "九上",
     "chapters": [
      {
       "no": "第二十四章",
       "title": "一元二次方程",
       "summary": "四种解法与根的判别式。",
       "minutes": 18,
       "id": "cz-rj-9a-ch1",
       "sections": []
      },
      {
       "no": "第二十五章",
       "title": "二次函数",
       "summary": "图象、顶点式与最值。",
       "minutes": 20,
       "id": "cz-rj-9a-ch2",
       "sections": []
      },
      {
       "no": "第二十六章",
       "title": "旋转",
       "summary": "旋转的性质与中心对称。",
       "minutes": 12,
       "id": "cz-rj-9a-ch3",
       "sections": []
      },
      {
       "no": "第二十七章",
       "title": "圆",
       "summary": "垂径定理、圆周角与切线。",
       "minutes": 20,
       "id": "cz-rj-9a-ch4",
       "sections": []
      },
      {
       "no": "第二十八章",
       "title": "概率初步",
       "summary": "随机事件与概率的计算。",
       "minutes": 12,
       "id": "cz-rj-9a-ch5",
       "sections": []
      }
     ]
    },
    {
     "id": "9b",
     "name": "九年级下册",
     "short": "九下",
     "chapters": [
      {
       "no": "第二十九章",
       "title": "反比例函数",
       "summary": "图象、性质与实际应用。",
       "minutes": 14,
       "id": "cz-rj-9b-ch1",
       "sections": []
      },
      {
       "no": "第三十章",
       "title": "相似",
       "summary": "相似三角形的判定与性质。",
       "minutes": 18,
       "id": "cz-rj-9b-ch2",
       "sections": []
      },
      {
       "no": "第三十一章",
       "title": "锐角三角函数",
       "summary": "正弦、余弦、正切与解直角三角形。",
       "minutes": 18,
       "id": "cz-rj-9b-ch3",
       "sections": []
      },
      {
       "no": "第三十二章",
       "title": "投影与视图",
       "summary": "平行投影、中心投影与三视图。",
       "minutes": 10,
       "id": "cz-rj-9b-ch4",
       "sections": []
      }
     ]
    }
   ]
  },
  {
   "id": "cz-bs",
   "stage": "初中",
   "edition": "北师大版",
   "title": "初中数学知识点",
   "subtitle": "七年级至九年级 · 按年级分册整理",
   "tone": "#2f5d50",
   "volumes": [
    {
     "id": "7a",
     "name": "七年级上册",
     "short": "七上",
     "chapters": [
      {
       "no": "第一章",
       "title": "丰富的图形世界",
       "summary": "立体图形、展开图与三视图，训练空间想象。",
       "free": true,
       "minutes": 16,
       "intro": "从立体图形到平面展开图，再到三视图，这一节训练的是空间想象。",
       "points": [
        {
         "h": "几何体的分类",
         "b": "- **柱体**：棱柱（如长方体、正方体）、圆柱。\n- **锥体**：棱锥、圆锥。\n- **球体**：球。"
        },
        {
         "h": "展开图",
         "b": "把立体图形沿某些棱剪开、铺平，得到的平面图形叫做它的**展开图**。\n\n同一个立体图形可能有不同的展开图，例如正方体就有 $11$ 种。"
        },
        {
         "h": "正方体的 $11$ 种展开图",
         "b": "正方体共有 $11$ 种展开图，按形状可以分为四类：一四一型 $6$ 种、二三一型 $3$ 种、二二二型 $1$ 种、三三型 $1$ 种。"
        },
        {
         "h": "一四一型（$6$ 种）",
         "b": "口诀：**中间四个成一行，两边各一位置灵活。**\n\n特征：中间一行 $4$ 个正方形，上下各 $1$ 个，呈对称分布。"
        },
        {
         "h": "二三一型（$3$ 种）",
         "b": "口诀：**二三紧连错一个，三一相连一随意。**\n\n特征：中间 $3$ 个正方形连成列，两侧各有 $2$ 个和 $1$ 个。"
        },
        {
         "h": "二二二型（$1$ 种）",
         "b": "口诀：**二二二，阶梯路。**\n\n特征：每行 $2$ 个正方形，呈阶梯状排列。"
        },
        {
         "h": "三三型（$1$ 种）",
         "b": "口诀：**两个三，日相连。**\n\n特征：两行各 $3$ 个正方形，错位相连。"
        },
        {
         "h": "三视图",
         "b": "从正面、侧面和上面观察几何体，得到的平面图形分别叫做**主视图**、**左视图**、**俯视图**。\n\n画三视图时注意「长对正、高平齐、宽相等」。"
        }
       ],
       "tips": "判断展开图能否折成正方体，可以用「相对面」排查：同一行（列）隔一个的两个面是相对面。\n\n「田」字形、「凹」字形的展开图一定不能折成正方体。",
       "id": "cz-bs-7a-ch1",
       "sections": []
      },
      {
       "no": "第二章",
       "title": "有理数及其运算",
       "summary": "正负数、数轴、绝对值与四则运算。",
       "minutes": 18,
       "id": "cz-bs-7a-ch2",
       "sections": []
      },
      {
       "no": "第三章",
       "title": "整式及其加减",
       "summary": "字母表示数、整式与合并同类项。",
       "minutes": 14,
       "id": "cz-bs-7a-ch3",
       "sections": []
      },
      {
       "no": "第四章",
       "title": "基本平面图形",
       "summary": "线段、射线、直线、角与圆。",
       "minutes": 16,
       "id": "cz-bs-7a-ch4",
       "sections": []
      },
      {
       "no": "第五章",
       "title": "一元一次方程",
       "summary": "等式性质与解方程。",
       "minutes": 16,
       "id": "cz-bs-7a-ch5",
       "sections": []
      },
      {
       "no": "第六章",
       "title": "数据的收集与整理",
       "summary": "调查方式、统计图与频数频率。",
       "minutes": 12,
       "id": "cz-bs-7a-ch6",
       "sections": []
      }
     ]
    },
    {
     "id": "7b",
     "name": "七年级下册",
     "short": "七下",
     "chapters": [
      {
       "no": "第一章",
       "title": "整式的乘除",
       "summary": "幂的运算、整式乘法与除法。",
       "minutes": 16,
       "id": "cz-bs-7b-ch1",
       "sections": []
      },
      {
       "no": "第二章",
       "title": "相交线和平行线",
       "summary": "对顶角、垂线、平行线的判定与性质。",
       "minutes": 16,
       "id": "cz-bs-7b-ch2",
       "sections": []
      },
      {
       "no": "第三章",
       "title": "概率初步",
       "summary": "随机事件与等可能事件的概率。",
       "minutes": 10,
       "id": "cz-bs-7b-ch3",
       "sections": []
      },
      {
       "no": "第四章",
       "title": "三角形",
       "summary": "三边关系、内角和与全等判定。",
       "minutes": 18,
       "id": "cz-bs-7b-ch4",
       "sections": []
      },
      {
       "no": "第五章",
       "title": "图形的轴对称",
       "summary": "轴对称的性质与简单图案设计。",
       "minutes": 14,
       "id": "cz-bs-7b-ch5",
       "sections": []
      },
      {
       "no": "第六章",
       "title": "变量之间的关系",
       "summary": "用表格、关系式与图象表示变量。",
       "minutes": 12,
       "id": "cz-bs-7b-ch6",
       "sections": []
      }
     ]
    },
    {
     "id": "8a",
     "name": "八年级上册",
     "short": "八上",
     "chapters": [
      {
       "no": "第一章",
       "title": "勾股定理",
       "summary": "勾股定理、逆定理与实际应用。",
       "minutes": 16,
       "id": "cz-bs-8a-ch1",
       "sections": []
      },
      {
       "no": "第二章",
       "title": "实数",
       "summary": "无理数、平方根与立方根。",
       "minutes": 14,
       "id": "cz-bs-8a-ch2",
       "sections": []
      },
      {
       "no": "第三章",
       "title": "位置与坐标",
       "summary": "平面直角坐标系与坐标变化。",
       "minutes": 12,
       "id": "cz-bs-8a-ch3",
       "sections": []
      },
      {
       "no": "第四章",
       "title": "一次函数",
       "summary": "正比例函数、一次函数与图象。",
       "minutes": 18,
       "id": "cz-bs-8a-ch4",
       "sections": []
      },
      {
       "no": "第五章",
       "title": "二元一次方程组",
       "summary": "代入消元与加减消元。",
       "minutes": 16,
       "id": "cz-bs-8a-ch5",
       "sections": []
      },
      {
       "no": "第六章",
       "title": "数据的分析",
       "summary": "平均数、中位数、众数与方差。",
       "minutes": 12,
       "id": "cz-bs-8a-ch6",
       "sections": []
      },
      {
       "no": "第七章",
       "title": "命题与证明",
       "summary": "定义、命题、定理与证明格式。",
       "minutes": 12,
       "id": "cz-bs-8a-ch7",
       "sections": []
      }
     ]
    },
    {
     "id": "8b",
     "name": "八年级下册",
     "short": "八下",
     "chapters": [
      {
       "no": "第一章",
       "title": "三角形的证明",
       "summary": "等腰三角形、直角三角形与线段的垂直平分线。",
       "minutes": 18,
       "id": "cz-bs-8b-ch1",
       "sections": []
      },
      {
       "no": "第二章",
       "title": "一元一次不等式与一元一次不等式组",
       "summary": "不等式的性质与解集。",
       "minutes": 14,
       "id": "cz-bs-8b-ch2",
       "sections": []
      },
      {
       "no": "第三章",
       "title": "图形的平移与旋转",
       "summary": "平移、旋转的性质与坐标变化。",
       "minutes": 14,
       "id": "cz-bs-8b-ch3",
       "sections": []
      },
      {
       "no": "第四章",
       "title": "平行四边形",
       "summary": "平行四边形的性质与判定。",
       "minutes": 16,
       "id": "cz-bs-8b-ch4",
       "sections": []
      },
      {
       "no": "第五章",
       "title": "因式分解",
       "summary": "提公因式与公式法。",
       "minutes": 14,
       "id": "cz-bs-8b-ch5",
       "sections": []
      },
      {
       "no": "第六章",
       "title": "分式",
       "summary": "分式运算与分式方程。",
       "minutes": 16,
       "id": "cz-bs-8b-ch6",
       "sections": []
      }
     ]
    },
    {
     "id": "9a",
     "name": "九年级上册",
     "short": "九上",
     "chapters": [
      {
       "no": "第一章",
       "title": "特殊平行四边形",
       "summary": "矩形、菱形、正方形的性质与判定。",
       "minutes": 18,
       "id": "cz-bs-9a-ch1",
       "sections": []
      },
      {
       "no": "第二章",
       "title": "一元二次方程",
       "summary": "四种解法与根的判别式。",
       "minutes": 18,
       "id": "cz-bs-9a-ch2",
       "sections": []
      },
      {
       "no": "第三章",
       "title": "概率的进一步认识",
       "summary": "树状图与列表法求概率。",
       "minutes": 12,
       "id": "cz-bs-9a-ch3",
       "sections": []
      },
      {
       "no": "第四章",
       "title": "图形的相似",
       "summary": "相似三角形的判定与性质。",
       "minutes": 18,
       "id": "cz-bs-9a-ch4",
       "sections": []
      },
      {
       "no": "第五章",
       "title": "投影与视图",
       "summary": "平行投影、中心投影与三视图。",
       "minutes": 10,
       "id": "cz-bs-9a-ch5",
       "sections": []
      },
      {
       "no": "第六章",
       "title": "反比例函数",
       "summary": "图象、性质与应用。",
       "minutes": 14,
       "id": "cz-bs-9a-ch6",
       "sections": []
      }
     ]
    },
    {
     "id": "9b",
     "name": "九年级下册",
     "short": "九下",
     "chapters": [
      {
       "no": "第一章",
       "title": "直角三角形的边角关系",
       "summary": "锐角三角函数与解直角三角形。",
       "minutes": 18,
       "id": "cz-bs-9b-ch1",
       "sections": []
      },
      {
       "no": "第二章",
       "title": "二次函数",
       "summary": "图象、顶点式与最值。",
       "minutes": 20,
       "id": "cz-bs-9b-ch2",
       "sections": []
      },
      {
       "no": "第三章",
       "title": "圆",
       "summary": "圆周角、切线与圆的计算。",
       "minutes": 20,
       "id": "cz-bs-9b-ch3",
       "sections": []
      },
      {
       "no": "第四章",
       "title": "统计与概率",
       "summary": "统计图表、数字特征与概率计算。",
       "minutes": 12,
       "id": "cz-bs-9b-ch4",
       "sections": []
      }
     ]
    }
   ]
  }
 ],
 "formulas": [
  {
   "id": "cz-pingfangcha",
   "stage": "初中",
   "module": "代数",
   "name": "平方差公式",
   "latex": "(a+b)(a-b)=a^{2}-b^{2}",
   "note": "逆用即可因式分解",
   "featured": true
  },
  {
   "id": "cz-wanquan",
   "stage": "初中",
   "module": "代数",
   "name": "完全平方公式",
   "latex": "(a\\pm b)^{2}=a^{2}\\pm 2ab+b^{2}",
   "note": "注意中间项是「2 倍积」",
   "featured": false
  },
  {
   "id": "cz-mi",
   "stage": "初中",
   "module": "代数",
   "name": "幂的运算",
   "latex": "\\begin{aligned} a^{m}\\cdot a^{n}&=a^{m+n}\\\\ (a^{m})^{n}&=a^{mn}\\\\ (ab)^{n}&=a^{n}b^{n}\\end{aligned}",
   "note": "同底数幂相乘，指数相加",
   "featured": false
  },
  {
   "id": "cz-qiugen",
   "stage": "初中",
   "module": "代数",
   "name": "一元二次方程求根公式",
   "latex": "x=\\frac{-b\\pm\\sqrt{b^{2}-4ac}}{2a}\\quad(a\\neq 0)",
   "note": "$\\Delta=b^{2}-4ac$ 决定根的个数",
   "featured": false
  },
  {
   "id": "cz-weida",
   "stage": "初中",
   "module": "代数",
   "name": "韦达定理",
   "latex": "x_{1}+x_{2}=-\\frac{b}{a},\\quad x_{1}x_{2}=\\frac{c}{a}",
   "note": "不解方程也能处理对称式",
   "featured": false
  },
  {
   "id": "cz-dingdian",
   "stage": "初中",
   "module": "代数",
   "name": "二次函数顶点式",
   "latex": "y=a\\left(x+\\frac{b}{2a}\\right)^{2}+\\frac{4ac-b^{2}}{4a}",
   "note": "对称轴 $x=-\\frac{b}{2a}$",
   "featured": false
  },
  {
   "id": "cz-yinshi",
   "stage": "初中",
   "module": "代数",
   "name": "因式分解 · 十字相乘",
   "latex": "x^{2}+(p+q)x+pq=(x+p)(x+q)",
   "note": "找两个数，和为一次项系数、积为常数项",
   "featured": false
  },
  {
   "id": "cz-gougu",
   "stage": "初中",
   "module": "几何",
   "name": "勾股定理",
   "latex": "a^{2}+b^{2}=c^{2}",
   "note": "直角三角形两直角边的平方和等于斜边的平方",
   "featured": true
  },
  {
   "id": "cz-sanjiao-mianji",
   "stage": "初中",
   "module": "几何",
   "name": "三角形面积",
   "latex": "S=\\frac{1}{2}ah",
   "note": "$a$ 为底，$h$ 为对应的高",
   "featured": false
  },
  {
   "id": "cz-neijiaohe",
   "stage": "初中",
   "module": "几何",
   "name": "多边形内角和",
   "latex": "(n-2)\\times 180^{\\circ}",
   "note": "外角和恒为 $360^{\\circ}$",
   "featured": false
  },
  {
   "id": "cz-yuan",
   "stage": "初中",
   "module": "几何",
   "name": "圆的周长与面积",
   "latex": "C=2\\pi r,\\quad S=\\pi r^{2}",
   "note": "",
   "featured": false
  },
  {
   "id": "cz-huchang",
   "stage": "初中",
   "module": "几何",
   "name": "弧长与扇形面积",
   "latex": "l=\\frac{n\\pi r}{180},\\quad S=\\frac{n\\pi r^{2}}{360}=\\frac{1}{2}lr",
   "note": "$n$ 为圆心角的度数",
   "featured": false
  },
  {
   "id": "cz-yuanzhu",
   "stage": "初中",
   "module": "几何",
   "name": "圆锥侧面积",
   "latex": "S_{\\mathrm{lat}}=\\pi r l",
   "note": "$l$ 为母线长",
   "featured": false
  },
  {
   "id": "cz-ruijiao",
   "stage": "初中",
   "module": "几何",
   "name": "锐角三角函数",
   "latex": "\\sin A=\\frac{a}{c},\\quad \\cos A=\\frac{b}{c},\\quad \\tan A=\\frac{a}{b}",
   "note": "对边比斜边、邻边比斜边、对边比邻边",
   "featured": false
  },
  {
   "id": "cz-teshu",
   "stage": "初中",
   "module": "几何",
   "name": "特殊角的三角函数值",
   "latex": "\\begin{aligned}\\sin 30^{\\circ}&=\\frac{1}{2},\\quad \\sin 45^{\\circ}=\\frac{\\sqrt{2}}{2}\\\\ \\sin 60^{\\circ}&=\\frac{\\sqrt{3}}{2}\\end{aligned}",
   "note": "余弦、正切可由此推出",
   "featured": false
  },
  {
   "id": "cz-xiangsi",
   "stage": "初中",
   "module": "几何",
   "name": "相似三角形的周长比与面积比",
   "latex": "\\frac{C_{1}}{C_{2}}=k,\\quad \\frac{S_{1}}{S_{2}}=k^{2}",
   "note": "相似比为 $k$",
   "featured": false
  },
  {
   "id": "cz-zhongweixian",
   "stage": "初中",
   "module": "几何",
   "name": "三角形中位线定理",
   "latex": "DE=\\frac{1}{2}BC,\\quad DE\\parallel BC",
   "note": "中位线平行于第三边且等于它的一半",
   "featured": false
  },
  {
   "id": "cz-pingxing",
   "stage": "初中",
   "module": "几何",
   "name": "平行四边形面积",
   "latex": "S=ah",
   "note": "$a$ 为底，$h$ 为对应的高",
   "featured": false
  },
  {
   "id": "cz-fangcha",
   "stage": "初中",
   "module": "统计与概率",
   "name": "方差",
   "latex": "\\begin{aligned}s^{2}=\\frac{1}{n}\\big[&(x_{1}-\\bar{x})^{2}+(x_{2}-\\bar{x})^{2}\\\\ &+\\cdots+(x_{n}-\\bar{x})^{2}\\big]\\end{aligned}",
   "note": "方差越小，数据越稳定",
   "featured": false
  },
  {
   "id": "cz-gailv",
   "stage": "初中",
   "module": "统计与概率",
   "name": "等可能事件的概率",
   "latex": "P(A)=\\frac{m}{n}",
   "note": "$m$ 为事件 $A$ 包含的结果数，$n$ 为总结果数",
   "featured": false
  },
  {
   "id": "gz-ziji",
   "stage": "高中",
   "module": "集合与逻辑",
   "name": "子集个数",
   "latex": "2^{n}",
   "note": "含 $n$ 个元素的集合：$2^{n}$ 个子集、$2^{n}-1$ 个真子集",
   "featured": false
  },
  {
   "id": "gz-demorgan",
   "stage": "高中",
   "module": "集合与逻辑",
   "name": "德摩根律",
   "latex": "\\complement_{U}(A\\cup B)=(\\complement_{U}A)\\cap(\\complement_{U}B)",
   "note": "「并的补」等于「补的交」",
   "featured": false
  },
  {
   "id": "gz-zhishu",
   "stage": "高中",
   "module": "函数",
   "name": "指数运算法则",
   "latex": "a^{m}a^{n}=a^{m+n},\\quad (a^{m})^{n}=a^{mn},\\quad a^{-n}=\\frac{1}{a^{n}}",
   "note": "$a>0$，$m,n\\in\\mathbf{R}$",
   "featured": false
  },
  {
   "id": "gz-duishu",
   "stage": "高中",
   "module": "函数",
   "name": "对数运算法则",
   "latex": "\\begin{aligned}\\log_{a}(MN)&=\\log_{a}M+\\log_{a}N\\\\ \\log_{a}\\frac{M}{N}&=\\log_{a}M-\\log_{a}N\\end{aligned}",
   "note": "「积的对数等于对数的和」",
   "featured": false
  },
  {
   "id": "gz-duishu-mi",
   "stage": "高中",
   "module": "函数",
   "name": "对数的幂与换底",
   "latex": "\\log_{a}M^{n}=n\\log_{a}M,\\quad \\log_{a}b=\\frac{\\log_{c}b}{\\log_{c}a}",
   "note": "换底公式把底数统一",
   "featured": false
  },
  {
   "id": "gz-duishu-heng",
   "stage": "高中",
   "module": "函数",
   "name": "对数恒等式",
   "latex": "a^{\\log_{a}N}=N",
   "note": "$a>0$ 且 $a\\neq 1$，$N>0$",
   "featured": false
  },
  {
   "id": "gz-tongjiao",
   "stage": "高中",
   "module": "三角",
   "name": "同角三角函数关系",
   "latex": "\\sin^{2}\\alpha+\\cos^{2}\\alpha=1,\\quad \\tan\\alpha=\\frac{\\sin\\alpha}{\\cos\\alpha}",
   "note": "弦切互化、$1$ 的代换",
   "featured": false
  },
  {
   "id": "gz-hecha-sin",
   "stage": "高中",
   "module": "三角",
   "name": "两角和与差的正弦",
   "latex": "\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta",
   "note": "「正余余正，符号同」",
   "featured": false
  },
  {
   "id": "gz-hecha-cos",
   "stage": "高中",
   "module": "三角",
   "name": "两角和与差的余弦",
   "latex": "\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp\\sin\\alpha\\sin\\beta",
   "note": "「余余正正，符号反」",
   "featured": false
  },
  {
   "id": "gz-beijiao",
   "stage": "高中",
   "module": "三角",
   "name": "二倍角公式",
   "latex": "\\begin{aligned}\\sin 2\\alpha&=2\\sin\\alpha\\cos\\alpha\\\\ \\cos 2\\alpha&=\\cos^{2}\\alpha-\\sin^{2}\\alpha\\end{aligned}",
   "note": "还有 $\\cos2\\alpha=2\\cos^{2}\\alpha-1=1-2\\sin^{2}\\alpha$",
   "featured": false
  },
  {
   "id": "gz-fuzhujiao",
   "stage": "高中",
   "module": "三角",
   "name": "辅助角公式",
   "latex": "a\\sin x+b\\cos x=\\sqrt{a^{2}+b^{2}}\\,\\sin(x+\\varphi)",
   "note": "其中 $\\tan\\varphi=\\frac{b}{a}$",
   "featured": false
  },
  {
   "id": "gz-zhengxian",
   "stage": "高中",
   "module": "三角",
   "name": "正弦定理",
   "latex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}=2R",
   "note": "$R$ 为外接圆半径",
   "featured": true
  },
  {
   "id": "gz-yuxian",
   "stage": "高中",
   "module": "三角",
   "name": "余弦定理",
   "latex": "a^{2}=b^{2}+c^{2}-2bc\\cos A",
   "note": "已知两边及夹角求第三边",
   "featured": false
  },
  {
   "id": "gz-sanjiao-mianji",
   "stage": "高中",
   "module": "三角",
   "name": "三角形面积公式",
   "latex": "S=\\frac{1}{2}ab\\sin C",
   "note": "两边及其夹角",
   "featured": false
  },
  {
   "id": "gz-hudu",
   "stage": "高中",
   "module": "三角",
   "name": "弧长与扇形面积",
   "latex": "l=\\alpha r,\\quad S=\\frac{1}{2}lr=\\frac{1}{2}\\alpha r^{2}",
   "note": "$\\alpha$ 为弧度制圆心角",
   "featured": false
  },
  {
   "id": "gz-shuliangji",
   "stage": "高中",
   "module": "向量",
   "name": "数量积",
   "latex": "\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\theta=x_{1}x_{2}+y_{1}y_{2}",
   "note": "几何定义与坐标运算",
   "featured": true
  },
  {
   "id": "gz-jiajiao",
   "stage": "高中",
   "module": "向量",
   "name": "向量夹角",
   "latex": "\\cos\\theta=\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|}",
   "note": "求异面直线夹角时取绝对值",
   "featured": false
  },
  {
   "id": "gz-pingxing-chuizhi",
   "stage": "高中",
   "module": "向量",
   "name": "平行与垂直的坐标条件",
   "latex": "\\begin{aligned}\\vec{a}\\parallel\\vec{b}&\\iff x_{1}y_{2}-x_{2}y_{1}=0\\\\ \\vec{a}\\perp\\vec{b}&\\iff x_{1}x_{2}+y_{1}y_{2}=0\\end{aligned}",
   "note": "平行看「交叉积」，垂直看「对应积之和」",
   "featured": false
  },
  {
   "id": "gz-dengcha",
   "stage": "高中",
   "module": "数列",
   "name": "等差数列",
   "latex": "a_{n}=a_{1}+(n-1)d,\\quad S_{n}=\\frac{n(a_{1}+a_{n})}{2}",
   "note": "还有 $S_{n}=na_{1}+\\frac{n(n-1)}{2}d$",
   "featured": false
  },
  {
   "id": "gz-dengbi",
   "stage": "高中",
   "module": "数列",
   "name": "等比数列",
   "latex": "a_{n}=a_{1}q^{n-1},\\quad S_{n}=\\frac{a_{1}(1-q^{n})}{1-q}\\ (q\\neq 1)",
   "note": "注意 $q=1$ 时 $S_{n}=na_{1}$",
   "featured": false
  },
  {
   "id": "gz-liexiang",
   "stage": "高中",
   "module": "数列",
   "name": "裂项相消",
   "latex": "\\frac{1}{n(n+1)}=\\frac{1}{n}-\\frac{1}{n+1}",
   "note": "分母是相邻两数之积时优先考虑",
   "featured": false
  },
  {
   "id": "gz-jibenbudengshi",
   "stage": "高中",
   "module": "不等式",
   "name": "基本不等式",
   "latex": "\\sqrt{ab}\\leq\\frac{a+b}{2}\\quad(a,b>0)",
   "note": "当且仅当 $a=b$ 时取等号",
   "featured": true
  },
  {
   "id": "gz-jueduibudengshi",
   "stage": "高中",
   "module": "不等式",
   "name": "绝对值三角不等式",
   "latex": "\\left|\\,|a|-|b|\\,\\right|\\leq|a+b|\\leq|a|+|b|",
   "note": "「和」的绝对值不超过绝对值之和",
   "featured": false
  },
  {
   "id": "gz-liangdian-juli",
   "stage": "高中",
   "module": "解析几何",
   "name": "两点间距离",
   "latex": "|AB|=\\sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}}",
   "note": "",
   "featured": false
  },
  {
   "id": "gz-dianxian-juli",
   "stage": "高中",
   "module": "解析几何",
   "name": "点到直线的距离",
   "latex": "d=\\frac{|Ax_{0}+By_{0}+C|}{\\sqrt{A^{2}+B^{2}}}",
   "note": "直线 $Ax+By+C=0$",
   "featured": false
  },
  {
   "id": "gz-yuan",
   "stage": "高中",
   "module": "解析几何",
   "name": "圆的标准方程",
   "latex": "(x-a)^{2}+(y-b)^{2}=r^{2}",
   "note": "圆心 $(a,b)$，半径 $r$",
   "featured": false
  },
  {
   "id": "gz-tuoyuan",
   "stage": "高中",
   "module": "解析几何",
   "name": "椭圆",
   "latex": "\\frac{x^{2}}{a^{2}}+\\frac{y^{2}}{b^{2}}=1,\\quad c^{2}=a^{2}-b^{2},\\quad e=\\frac{c}{a}",
   "note": "焦点在长轴上",
   "featured": true
  },
  {
   "id": "gz-shuangquxian",
   "stage": "高中",
   "module": "解析几何",
   "name": "双曲线",
   "latex": "\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}=1,\\quad c^{2}=a^{2}+b^{2},\\quad y=\\pm\\frac{b}{a}x",
   "note": "渐近线是解题的「骨架」",
   "featured": false
  },
  {
   "id": "gz-paowuxian",
   "stage": "高中",
   "module": "解析几何",
   "name": "抛物线",
   "latex": "y^{2}=2px,\\quad F\\left(\\frac{p}{2},0\\right),\\quad x=-\\frac{p}{2}",
   "note": "焦点在 $x$ 轴正半轴",
   "featured": false
  },
  {
   "id": "gz-xielv",
   "stage": "高中",
   "module": "解析几何",
   "name": "斜率与点斜式",
   "latex": "k=\\frac{y_{2}-y_{1}}{x_{2}-x_{1}},\\quad y-y_{0}=k(x-x_{0})",
   "note": "斜率不存在时单独讨论",
   "featured": false
  },
  {
   "id": "gz-daoshu-jiben",
   "stage": "高中",
   "module": "导数",
   "name": "基本初等函数的导数",
   "latex": "(x^{n})'=nx^{n-1},\\quad (e^{x})'=e^{x},\\quad (\\ln x)'=\\frac{1}{x}",
   "note": "还有 $(\\sin x)'=\\cos x$，$(\\cos x)'=-\\sin x$",
   "featured": true
  },
  {
   "id": "gz-daoshu-size",
   "stage": "高中",
   "module": "导数",
   "name": "导数的四则运算",
   "latex": "(uv)'=u'v+uv',\\quad \\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^{2}}",
   "note": "分母平方，分子「上导下不导减上不导下导」",
   "featured": false
  },
  {
   "id": "gz-fuhe-daoshu",
   "stage": "高中",
   "module": "导数",
   "name": "复合函数求导",
   "latex": "y=f(g(x))\\ \\Longrightarrow\\ y'=f'(g(x))\\cdot g'(x)",
   "note": "由外向内，逐层求导再相乘",
   "featured": false
  },
  {
   "id": "gz-pailie-zuhe",
   "stage": "高中",
   "module": "计数与概率",
   "name": "排列数与组合数",
   "latex": "A_{n}^{m}=\\frac{n!}{(n-m)!},\\quad C_{n}^{m}=\\frac{n!}{m!(n-m)!}",
   "note": "$C_{n}^{m}=C_{n}^{n-m}$",
   "featured": false
  },
  {
   "id": "gz-erxiangshi",
   "stage": "高中",
   "module": "计数与概率",
   "name": "二项式定理",
   "latex": "\\begin{aligned}(a+b)^{n}=&\\;C_{n}^{0}a^{n}+C_{n}^{1}a^{n-1}b\\\\&+\\cdots+C_{n}^{n}b^{n}\\end{aligned}",
   "note": "通项 $T_{k+1}=C_{n}^{k}a^{n-k}b^{k}$",
   "featured": false
  },
  {
   "id": "gz-tiaojian-gailv",
   "stage": "高中",
   "module": "计数与概率",
   "name": "条件概率",
   "latex": "P(B\\mid A)=\\frac{P(AB)}{P(A)}\\quad(P(A)>0)",
   "note": "「在 $A$ 发生的条件下 $B$ 发生」",
   "featured": false
  },
  {
   "id": "gz-quangailv",
   "stage": "高中",
   "module": "计数与概率",
   "name": "全概率公式",
   "latex": "P(B)=\\sum_{i=1}^{n}P(A_{i})P(B\\mid A_{i})",
   "note": "$A_{1},\\dots,A_{n}$ 构成完备事件组",
   "featured": false
  },
  {
   "id": "gz-erxiang-fenbu",
   "stage": "高中",
   "module": "计数与概率",
   "name": "二项分布",
   "latex": "\\begin{aligned}X&\\sim B(n,p)\\\\ E(X)&=np,\\quad D(X)=np(1-p)\\end{aligned}",
   "note": "期望与方差都要会算",
   "featured": false
  },
  {
   "id": "gz-qiwang-xingzhi",
   "stage": "高中",
   "module": "计数与概率",
   "name": "期望与方差的性质",
   "latex": "\\begin{aligned}E(aX+b)&=aE(X)+b\\\\ D(aX+b)&=a^{2}D(X)\\end{aligned}",
   "note": "方差前面要平方",
   "featured": false
  }
 ]
};
