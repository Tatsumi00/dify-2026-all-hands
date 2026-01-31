import React from 'react';
import { SlideData, SlideType } from '../../engine/types';
import {
  TrendingDown, TrendingUp, AlertTriangle, CheckCircle,
  Users, Target, Code, Cloud, Palette,
  UserCheck, Shield, GitBranch, MessageSquare,
  Zap, Award, Lightbulb, Layers, Rocket,
  ArrowRight, Sparkles
} from 'lucide-react';

export const SLIDES: SlideData[] = [
  // ========== COVER ==========
  {
    id: 1,
    type: SlideType.TITLE,
    title: "Dify 2026 全员会",
    subtitle: "产品战略 · 组织创新",
    footer: "2026 年 1 月"
  },

  // ========== PART 1: 开场 ==========
  {
    id: 2,
    type: SlideType.SECTION,
    title: "站在 2026 年审视 Dify",
    subtitle: "回顾过去，审视现在，展望未来",
    footer: "第一部分"
  },

  // ===== 外部环境：行业发生了什么 =====
  {
    id: 3,
    type: SlideType.MACRO_FOCUS,
    title: "AI 行业剧变",
    content: [
      "2025 年发生的变化 > 过去五年总和",
      "Dify 的下一步，取决于我们今天的选择"
    ]
  },

  {
    id: 4,
    type: SlideType.CARDS,
    title: "2025 关键节点",
    subtitle: "四个改变行业的时刻",
    items: [
      {
        title: "开源重塑",
        description: "Q1，DeepSeek 以极致推理效率 + 开源生态\n打破闭源垄断，重构 AI Infra 性价比基准",
        icon: <Rocket className="text-dify-blue"/>,
        tags: ["Q1"]
      },
      {
        title: "形态进化",
        description: "Q2，Claude Code / Manus 落地\nAgent 从概念到生产力工具，定义 GA 交互形态",
        icon: <Code className="text-dify-blue"/>,
        tags: ["Q2"]
      },
      {
        title: "全能力对齐",
        description: "Q3，多模态 × 逻辑推理达成共识\n模型能力进入全方位、低延迟感知统一时代",
        icon: <Layers className="text-dify-blue"/>,
        tags: ["Q3"]
      },
      {
        title: "开发范式转移",
        description: "Q4，软件工程进入 AI 原生阶段\nCoding Agent 从辅助工具质变为独立开发者",
        icon: <Sparkles className="text-dify-blue"/>,
        tags: ["Q4"]
      }
    ]
  },

  {
    id: 5,
    type: SlideType.DIAGRAM,
    title: "Google Trends 印证趋势变化",
    subtitle: "搜索热度（美国，2025 全年）— 柱高 = 基本盘，箭头 = 趋势",
    visualContent: (
      <div className="flex flex-col items-center justify-center h-full w-full px-8">
        <div className="w-full max-w-5xl">
          <div className="flex items-end justify-center gap-16">
            <div className="flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <div className="absolute -top-8 text-amber-500 font-bold text-lg">→</div>
                <div className="text-amber-600 font-black text-2xl mb-2">70</div>
                <div className="w-32 bg-gradient-to-t from-amber-400 to-amber-200 rounded-t-lg shadow-lg flex items-end justify-center" style={{height: '220px'}}>
                  <span className="text-white font-bold text-sm mb-4 opacity-80">平稳</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xl font-bold text-slate-800">RAG</p>
                <p className="text-sm text-slate-500">基本盘最大</p>
                <p className="text-xs text-amber-600 mt-1">趋势平稳</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <div className="absolute -top-8 text-dify-blue font-bold text-lg">↗</div>
                <div className="text-dify-blue font-black text-2xl mb-2">34</div>
                <div className="w-32 bg-gradient-to-t from-dify-blue to-blue-300 rounded-t-lg shadow-lg flex items-end justify-center relative" style={{height: '107px'}}>
                  <div className="absolute -top-3 -right-2 bg-dify-blue text-white text-xs font-bold px-2 py-1 rounded-full">HOT</div>
                  <span className="text-white font-bold text-sm mb-4 opacity-80">上升</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xl font-bold text-slate-800">AI Agent</p>
                <p className="text-sm text-slate-500">增速最快</p>
                <p className="text-xs text-dify-blue mt-1">↑ 上升趋势</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <div className="absolute -top-8 text-rose-500 font-bold text-lg">↗</div>
                <div className="text-rose-500 font-black text-2xl mb-2">9</div>
                <div className="w-32 bg-gradient-to-t from-rose-400 to-rose-200 rounded-t-lg shadow-lg flex items-end justify-center" style={{height: '28px'}}>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xl font-bold text-slate-800">AI Workflow</p>
                <p className="text-sm text-slate-500">基本盘较小</p>
                <p className="text-xs text-rose-500 mt-1">↑ 缓慢上升</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-slate-400 mt-8">数据来源：Google Trends · Average Interest 2025</p>
        </div>
      </div>
    )
  },

  // ===== 内部审视：我们怎么样 =====
  {
    id: 6,
    type: SlideType.DIAGRAM,
    title: "2025 年回顾",
    subtitle: "成绩与挑战并存",
    visualContent: (
      <div className="grid grid-cols-2 gap-20 w-full max-w-6xl mx-auto">
        <div className="flex flex-col">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-8">做得好的</h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4 text-xl text-gray-700">
              <span className="text-dify-blue mt-1">✓</span>
              <span><strong>融资顺利</strong>，资金储备充足</span>
            </li>
            <li className="flex items-start gap-4 text-xl text-gray-700">
              <span className="text-dify-blue mt-1">✓</span>
              <span><strong>基建完善</strong>，技术底座稳固</span>
            </li>
            <li className="flex items-start gap-4 text-xl text-gray-700">
              <span className="text-dify-blue mt-1">✓</span>
              <span><strong>团队扩张</strong>，人才梯队搭建完成</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-8">需要改进的</h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4 text-xl text-gray-700">
              <span className="text-gray-400 mt-1">×</span>
              <span><strong>产品工程太慢</strong> — 迭代速度跟不上市场</span>
            </li>
            <li className="flex items-start gap-4 text-xl text-gray-700">
              <span className="text-gray-400 mt-1">×</span>
              <span><strong>市场洞察力不够</strong> — 对用户需求理解不深</span>
            </li>
            <li className="flex items-start gap-4 text-xl text-gray-700">
              <span className="text-gray-400 mt-1">×</span>
              <span><strong>决策速度慢</strong> — 情报消化、小项目制运转不够</span>
            </li>
            <li className="flex items-start gap-4 text-xl text-gray-700">
              <span className="text-gray-400 mt-1">×</span>
              <span><strong>组织效率低</strong> — 仍停留在古典大规模分工阶段</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },

  {
    id: 7,
    type: SlideType.SPLIT,
    title: "现有业务模式的利弊",
    subtitle: "企业版 + GM（Gross Margin，毛利驱动）",
    content: [
      "**优势**",
      "稳定的现金流",
      "",
      "**劣势**",
      "需求收集速度不够快",
      "不能加杠杆",
      "线性增长",
      "会错过机遇"
    ],
    visualContent: (
      <div className="flex items-center justify-center h-full">
        <div className="bg-gray-50 border-2 border-gray-100 rounded-xl p-8 text-center max-w-md">
          <AlertTriangle size={48} className="mx-auto text-dify-blue mb-4"/>
          <p className="text-lg font-medium text-slate-700">
            这是一个<span className="text-gray-900 font-bold">合格的业务</span>
          </p>
          <p className="text-lg font-medium text-slate-700 mt-2">
            但不是一个与当前机会体量匹配的<span className="text-dify-blue font-bold">兴奋的业务</span>
          </p>
        </div>
      </div>
    )
  },

  // ===== 结论 =====
  {
    id: 8,
    type: SlideType.MATRIX,
    title: "Dify 必须变",
    subtitle: "三个核心模块的变革路径",
    tableData: {
      headers: ["模块", "变化趋势", "应对策略"],
      rows: [
        ["插件体系", "与 Skills 产生替代关系", "重新定义生态边界"],
        ["RAG / 知识库", "范式转移，传统 RAG 不再主流", "拥抱 Context 工程"],
        ["Workflow", "需要更柔性、更易用", "引入拉动式概念"]
      ]
    },
    bottomBanner: {
      text: "核心判断：所有模块都要改，只是改的路径不一样",
      type: "warning"
    }
  },

  // ========== PART 2: 三条产品线 ==========
  {
    id: 9,
    type: SlideType.SECTION,
    title: "2026 战略：三条产品线",
    subtitle: "明确分工，各司其职",
    footer: "第二部分"
  },

  // 产品矩阵概览 - 用 PILLARS 展示三条产品线
  {
    id: 10,
    type: SlideType.PILLARS,
    title: "Dify 产品矩阵",
    subtitle: "三条产品线，三个战场",
    items: [
      {
        title: "CE & EE 线",
        description: "70% 投入",
        icon: <Code className="text-dify-blue" size={48}/>,
        features: ["CE：周宇 + 海明", "EE：Kiji", "技术底座 + 企业服务", "中美两套 IP"]
      },
      {
        title: "SaaS 线",
        description: "20% 投入",
        icon: <Cloud className="text-dify-blue" size={48}/>,
        features: ["王征 + 梓浩", "从主仓独立", "海外 SMB 市场", "北美垂直 PMF"]
      },
      {
        title: "新世代产品",
        description: "10% 早期投入",
        icon: <Palette className="text-dify-blue" size={48}/>,
        features: ["CEO 亲自带队", "TPS 理念新画布", "北美 R&D 团队", "Innovation Labs"]
      }
    ]
  },

  // P0-2: 为什么是三条线
  {
    id: 11,
    type: SlideType.CONTENT,
    title: "为什么是三条线？",
    subtitle: "三条线协同，各有定位，缺一不可",
    content: [
      "**第一条线：稳住基本盘，保持技术领先**",
      "维护开源社区和企业客户，确保技术底座稳固",
      "",
      "**第二条线：从主仓解耦，独立变现**",
      "SaaS 化产品独立迭代，不受主仓节奏限制",
      "",
      "**第三条线：抓住窗口期，实现战略突破**",
      "画布业务代表未来方向，需要全力投入"
    ],
    bottomBanner: {
      text: "结论：三条线各有使命，形成完整的产品战略布局",
      type: "info"
    }
  },

  // 第一条线详情
  {
    id: 12,
    type: SlideType.MATRIX,
    title: "第一条线：CE & EE（70%）",
    subtitle: "组织重构，明确分工",
    tableData: {
      headers: ["业务模块", "负责人", "汇报线", "核心目标"],
      rows: [
        ["CE 产品", "周宇 + 海明", "→ CEO", "维护开源社区，保持技术领先"],
        ["EE 产品线", "Kiji", "→ CEO", "结合 DE 团队，年内实现中美两套 IP"],
        ["Digital Marketing", "田磊", "→ CEO", "转守为攻，服务 PMF 优势市场，品牌统筹"],
        ["运营体系", "赵雅雯", "→ CEO/海明", "文档/DevRel/社区/技术支持/生态运营"],
        ["质量组（新）", "戴志强", "→ Boyan", "建立质量保障体系"],
        ["BizOps & CRM", "—", "→ 潘潘", "移交财务线统一管理"]
      ]
    },
    bottomBanner: {
      text: "北美：文斯、子轩移交 Andy (北美 GM) 管理，文斯不再承担管理职能",
      type: "info"
    }
  },

  // 第二条线详情
  {
    id: 13,
    type: SlideType.SPLIT,
    title: "第二条线：SaaS（20%）",
    subtitle: "王征 + 梓浩 Coleader | 定位：海外 SMB",
    content: [
      "**核心变化**",
      "SaaS 从 CE 主仓彻底拆分",
      "独立代码库、独立迭代节奏",
      "",
      "**团队重组**",
      "现有 SaaS 团队 + 王征团队合并",
      "Ben 专注北美垂直 PMF 策略支持",
      "",
      "**目标市场**",
      "中国以外地区的 SMB 业务",
      "承担 ARR 目标，独立验证商业模式"
    ],
    visualContent: (
      <div className="flex items-center justify-center h-full">
        <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-dify-blue/20 rounded-xl p-8 text-center max-w-md">
          <Cloud size={48} className="mx-auto text-dify-blue mb-4"/>
          <p className="text-xl font-bold text-slate-800 mb-2">
            从主仓解耦 = 独立迭代
          </p>
          <p className="text-slate-600">
            不再受主仓节奏限制<br/>
            快速响应海外市场需求
          </p>
        </div>
      </div>
    )
  },

  // 第三条线详情
  {
    id: 14,
    type: SlideType.SPLIT,
    title: "第三条线：新世代产品（10%）",
    subtitle: "CEO 亲自带队 | TPS 理念新画布",
    content: [
      "**团队构成**",
      "CEO (张路宇) Leader",
      "Gu 等北美 R&D 人员",
      "",
      "**核心目标**",
      "打造基于 TPS 理念的新画布产品",
      "找到 Product-Market Fit",
      "",
      "**Innovation Labs（新设）**",
      "由 Kiji 管理",
      "承载技术研究和实验",
      "成果纳入三条产品线实现产品化"
    ],
    visualContent: (
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-6 text-center max-w-sm">
          <Palette size={40} className="mx-auto text-dify-blue mb-3"/>
          <p className="text-lg font-bold text-slate-800 mb-2">新世代产品</p>
          <p className="text-sm text-slate-600">TPS 理念 × 画布交互</p>
          <p className="text-xs text-dify-blue mt-2">→ 寻找 PMF</p>
        </div>
        <div className="bg-gradient-to-br from-indigo-50 to-white border-2 border-indigo-200 rounded-xl p-6 text-center max-w-sm">
          <Lightbulb size={40} className="mx-auto text-indigo-500 mb-3"/>
          <p className="text-lg font-bold text-slate-800 mb-2">Innovation Labs</p>
          <p className="text-sm text-slate-600">Kiji 管理 · 技术研究 · 实验孵化</p>
          <p className="text-xs text-indigo-500 mt-2">→ 成果输出到三条产品线</p>
        </div>
      </div>
    )
  },

  // ========== PART 3: DRI 制度 ==========
  {
    id: 15,
    type: SlideType.SECTION,
    title: "组织创新：DRI 制度",
    subtitle: "有权力才有责任，广泛听取、独立决策",
    footer: "第三部分"
  },

  {
    id: 16,
    type: SlideType.CARDS,
    title: "为什么引入 DRI？",
    subtitle: "团队扩大到 100 人，大企业病早期症状出现",
    items: [
      {
        title: "议而不决",
        description: "一群人讨论一下午，没人拍板",
        icon: <MessageSquare className="text-dify-blue" />
      },
      {
        title: "执行推诿",
        description: "产品怪研发，研发怪测试，测试怪需求不明确",
        icon: <GitBranch className="text-dify-blue" />
      },
      {
        title: "无成本干扰",
        description: "旁观者随意指手画脚，方案被迫平庸化",
        icon: <AlertTriangle className="text-dify-blue" />
      }
    ]
  },

  {
    id: 17,
    type: SlideType.SPLIT,
    title: "什么是 DRI？",
    subtitle: "Directly Responsible Individual",
    content: [
      "对于任何一个项目、任务或会议议题",
      "**必须有且仅有一个人**",
      "对最终结果的成败负责",
      "",
      "**来源：** Apple（Steve Jobs 发明）→ GitLab（2000+ 人远程公司核心机制）→ Dify",
      "",
      "**在 Dify，DRI 不是为了分派任务，而是为了：**",
      "锁定责任",
      "授权决策"
    ],
    visualContent: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative">
          <div className="absolute inset-0 bg-dify-blue/20 rounded-2xl blur-xl transform scale-110"></div>
          <div className="relative bg-gradient-to-br from-dify-blue to-blue-700 text-white rounded-2xl p-10 text-center shadow-2xl">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-dify-blue font-black text-lg">1</span>
            </div>
            <UserCheck size={72} className="mx-auto mb-6"/>
            <p className="text-3xl font-black tracking-tight">有且仅有一人</p>
            <div className="w-16 h-1 bg-white/40 mx-auto my-4 rounded-full"></div>
            <p className="text-xl opacity-90">对最终结果负责</p>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-600">Apple</div>
          <ArrowRight className="text-gray-400" />
          <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-600">GitLab</div>
          <ArrowRight className="text-gray-400" />
          <div className="bg-dify-blue px-4 py-2 rounded-lg text-sm font-bold text-white">Dify</div>
        </div>
      </div>
    )
  },

  // P1-7: DRI 场景示例
  {
    id: 18,
    type: SlideType.MATRIX,
    title: "DRI 的四大职责",
    subtitle: "DRI 不是干活最多的人，而是扫除障碍、整合资源的人",
    tableData: {
      headers: ["职责", "说明"],
      rows: [
        ["定义范围", "抵制 Scope Creep，守住边界"],
        ["主动推动", "不能说「我在等设计」，要主动拉齐"],
        ["信息枢纽", "汇聚和分发信息，确保透明"],
        ["风险预警", "第一时间举手，不藏问题"]
      ]
    },
    bottomBanner: {
      text: "关键区分：Task Owner 对代码质量负责，Project DRI 对项目按时上线负责",
      type: "warning"
    }
  },

  {
    id: 19,
    type: SlideType.CARDS,
    title: "负责的定义",
    subtitle: "DRI 机制下，负责不是背锅",
    items: [
      {
        title: "Ownership",
        description: "你可以决定怎么做",
        icon: <Target className="text-dify-blue"/>
      },
      {
        title: "Accountability",
        description: "出问题时你来主持解决",
        icon: <Shield className="text-dify-blue"/>
      },
      {
        title: "Improvement",
        description: "失败后你组织复盘",
        icon: <GitBranch className="text-dify-blue"/>
      }
    ],
    bottomBanner: {
      text: "我们实行 Blameless Culture：只要不是恶意疏忽，一次尝试的失败不会受罚",
      type: "info"
    }
  },

  {
    id: 20,
    type: SlideType.ACCORDION,
    title: "DRI 三大核心原则",
    items: [
      {
        title: "原则一：有权力才有责任",
        description: "DRI 要为最终结果负责，必须拥有最终决策权。如果你不承担失败的后果，你就没资格在决策书上签字。",
        icon: <Zap className="text-dify-blue"/>
      },
      {
        title: "原则二：广泛听取，独立决策",
        description: "过程是民主的（收集信息和建议），决策是独裁的（DRI 一人拍板）。",
        icon: <MessageSquare className="text-dify-blue"/>
      },
      {
        title: "原则三：Disagree and Commit",
        description: "一旦 DRI 做出决定，即使持保留意见，也必须全力支持执行。严禁消极怠工和事后诸葛亮。",
        icon: <CheckCircle className="text-dify-blue"/>
      }
    ]
  },

  // Leader 与 DRI 的边界
  {
    id: 21,
    type: SlideType.MATRIX,
    title: "Leader 与 DRI 的边界",
    subtitle: "这是 DRI 制度能否落地的关键",
    tableData: {
      headers: ["红线", "说明"],
      rows: [
        ["Context not Control", "Leader 定目标，不控细节。指点欢迎，指指点点禁止"],
        ["否决权的代价", "Leader 推翻 DRI 方案 = 责任转移到 Leader"],
        ["方向盘原则", "无法忍受就正式撤换 DRI，不要挂名 DRI + 隐形控制者"]
      ]
    }
  },

  {
    id: 22,
    type: SlideType.SPLIT,
    title: "对员工和主管的要求",
    content: [
      "**员工：**",
      "承担责任，成为决策者",
      "被衡量的标准：为多少事情的最终结果负责",
      "",
      "**主管：**",
      "必须学会放权",
      "只能决定三件事：",
      "  1. 这事投不投？",
      "  2. 谁来干？",
      "  3. 给多少资源？"
    ],
    visualContent: (
      <div className="flex flex-col gap-6 h-full justify-center px-4">
        <div className="relative">
          <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-dify-blue to-blue-300 rounded-full"></div>
          <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-dify-blue rounded-xl flex items-center justify-center shadow-lg">
                <Users size={24} className="text-white"/>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-xl">员工</p>
                <p className="text-sm text-dify-blue font-medium">承担责任 → 获得权力</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm pl-16">衡量标准：为多少事情的最终结果负责</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="flex items-center gap-2 text-slate-400">
            <div className="w-8 h-px bg-slate-300"></div>
            <ArrowRight className="rotate-90" size={20}/>
            <div className="w-8 h-px bg-slate-300"></div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-300 rounded-full"></div>
          <div className="bg-gradient-to-r from-indigo-50 to-white border border-indigo-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <Award size={24} className="text-white"/>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-xl">主管</p>
                <p className="text-sm text-indigo-600 font-medium">放权 → 给 Context 不给 Control</p>
              </div>
            </div>
            <div className="pl-16 space-y-1">
              <p className="text-slate-600 text-sm">只决定三件事：</p>
              <p className="text-slate-500 text-xs">投不投？谁来干？给多少资源？</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // DRI 效果
  {
    id: 23,
    type: SlideType.KEY_TAKEAWAYS,
    title: "DRI 制度的预期效果",
    content: [
      "团队拆得更小",
      "一线人权力更大",
      "能和不能的人会被快速识别出来"
    ]
  },

  // ========== PART 4: 总结 ==========
  {
    id: 24,
    type: SlideType.SECTION,
    title: "总结",
    subtitle: "核心信息与行动指南",
    footer: "第四部分"
  },

  {
    id: 25,
    type: SlideType.CARDS,
    title: "核心信息",
    subtitle: "2026 年的三个关键变化",
    items: [
      {
        title: "外部环境变",
        description: "模型军备竞赛\n范式转移",
        icon: <TrendingUp className="text-dify-blue"/>
      },
      {
        title: "产品战略变",
        description: "三条产品线\n各有定位",
        icon: <Layers className="text-dify-blue"/>
      },
      {
        title: "组织架构变",
        description: "DRI 制度\n权责清晰",
        icon: <Users className="text-dify-blue"/>
      }
    ]
  },

  // 行动号召 - 用 CARDS 更醒目
  {
    id: 26,
    type: SlideType.CARDS,
    title: "从今天开始，你需要做三件事",
    subtitle: "行动号召",
    items: [
      {
        title: "找到你的位置",
        description: "确认你在哪条产品线\nCE&EE / SaaS / 新世代产品",
        icon: <Target className="text-dify-blue"/>
      },
      {
        title: "明确你的身份",
        description: "你是 DRI，还是支持某个 DRI？\n权责清晰是执行力的基础",
        icon: <UserCheck className="text-dify-blue"/>
      },
      {
        title: "All in 全力执行",
        description: "能和不能会被快速识别\n没有旁观者",
        icon: <Rocket className="text-dify-blue"/>
      }
    ],
    bottomBanner: {
      text: "机会与压力并存：DRI 制度让每个人都有机会成为决策者",
      type: "info"
    }
  },

  // END
  {
    id: 27,
    type: SlideType.END,
    title: "Q&A",
    subtitle: "谢谢大家",
    footer: "Email: luyu@dify.ai | GitHub: langgenius"
  }
];
