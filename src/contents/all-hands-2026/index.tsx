import React from 'react';
import { SlideData, SlideType } from '../../engine/types';
import {
  TrendingDown, TrendingUp, AlertTriangle, CheckCircle,
  Users, Target, Code, Cloud, Palette,
  UserCheck, Shield, GitBranch, MessageSquare,
  Zap, Award, Calendar, Lightbulb, Layers, Rocket,
  Star, Monitor, BarChart3, ArrowRight, Sparkles
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

  // ========== PRESENTER ==========
  {
    id: 2,
    type: SlideType.PRESENTER,
    title: "主讲人",
    subtitle: "CEO",
    content: [
      "**张路宇**",
      "Dify CEO & Co-founder"
    ],
    visualContent: (
      <div className="flex flex-col items-center justify-center h-full">
        {/* Professional Executive Avatar */}
        <div className="relative w-64 h-64 mb-8 group">
          {/* Outer Ring - Animated */}
          <div className="absolute inset-0 rounded-full border-4 border-dify-blue opacity-20 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full border-2 border-dify-blue opacity-40"></div>

          {/* Main Avatar Container */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-dify-blue via-blue-600 to-blue-700 flex items-center justify-center shadow-2xl overflow-hidden">
            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 grid-rows-8">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className={`border border-white/20 ${i % 3 === 0 ? 'bg-white/5' : ''}`}></div>
                ))}
              </div>
            </div>

            {/* Name Display */}
            <div className="relative z-10 text-center">
              <div className="text-7xl text-white font-black tracking-wider mb-2">路宇</div>
              <div className="h-1 w-16 bg-white/60 mx-auto"></div>
            </div>
          </div>

          {/* Decorative Accent Corner Marks */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-t-4 border-l-4 border-dify-blue opacity-60"></div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-4 border-r-4 border-dify-blue opacity-60"></div>
        </div>

        {/* Role Badge */}
        <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-sm border-2 border-gray-200">
          <div className="w-2 h-2 rounded-full bg-dify-blue animate-pulse"></div>
          <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">Chief Executive Officer</span>
        </div>
      </div>
    )
  },

  // ========== PART 1: 开场 ==========
  {
    id: 3,
    type: SlideType.SECTION,
    title: "站在 2026 年审视 Dify",
    subtitle: "回顾过去，审视现在，展望未来",
    footer: "第一部分"
  },

  // 开场 Hook
  {
    id: 4,
    type: SlideType.MACRO_FOCUS,
    title: "2025 年",
    content: [
      "2025 年，AI 行业发生的变化比过去五年加起来还多",
      "Dify 的下一步，取决于我们今天的选择"
    ]
  },

  // 2025 回顾合并
  {
    id: 5,
    type: SlideType.MATRIX,
    title: "2025 年回顾",
    subtitle: "成绩与挑战并存",
    tableData: {
      headers: ["做得好的", "需要改进的"],
      rows: [
        ["融资顺利 — 资金储备充足", "产品工程太慢 — 迭代速度跟不上市场"],
        ["基建完善 — 技术底座稳固", "市场洞察力不够 — 对用户需求理解不深"],
        ["团队扩张 — 人才梯队搭建完成", "决策速度慢 — 情报消化、小项目制运转不够"],
        ["", "组织效率低 — 仍停留在古典大规模分工阶段"]
      ]
    }
  },

  // 模型军备竞赛 - 4个关键节点卡片
  {
    id: 6,
    type: SlideType.CARDS,
    title: "2025 关键节点",
    subtitle: "四个改变行业的时刻",
    items: [
      {
        title: "1月",
        description: "**DeepSeek R1**\n$6M 成本达前沿性能\nSputnik moment",
        icon: <Rocket className="text-blue-600"/>,
        tags: ["模型"]
      },
      {
        title: "2月",
        description: "**Claude Code**\nAI 编程工具爆发元年",
        icon: <Code className="text-purple-600"/>,
        tags: ["工具"]
      },
      {
        title: "8月",
        description: "**GPT-5 发布**\n幻觉率降低 45%\n多模态成熟",
        icon: <Sparkles className="text-green-600"/>,
        tags: ["模型"]
      },
      {
        title: "10月",
        description: "**Nvidia $5T**\n人类历史首个\n$5 万亿市值公司",
        icon: <TrendingUp className="text-orange-600"/>,
        tags: ["市场"]
      }
    ]
  },

  // 范式转移信号
  {
    id: 7,
    type: SlideType.CARDS,
    title: "范式转移信号",
    subtitle: "行业规则正在被重写",
    items: [
      {
        title: "前沿模型民主化",
        description: "DeepSeek 证明小团队也能做前沿模型",
        icon: <Rocket className="text-blue-500"/>
      },
      {
        title: "Vibe Coding 元年",
        description: "AI 辅助编程成为主流工作方式",
        icon: <Code className="text-purple-500"/>
      },
      {
        title: "百万 Token 标配",
        description: "长上下文能力成为基础能力",
        icon: <Layers className="text-green-500"/>
      },
      {
        title: "Agent 成新主流",
        description: "从确定性流程转向自主决策",
        icon: <Lightbulb className="text-orange-500"/>
      }
    ]
  },

  // Dify 必须变
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

  // P0-1: Google Trends 数据 Slide
  {
    id: 9,
    type: SlideType.SPLIT,
    title: "Google Trends 印证趋势变化",
    subtitle: "搜索热度反映市场关注度迁移",
    content: [
      "**RAG 搜索热度下降**",
      "传统检索增强生成方式热度见顶回落",
      "",
      "**AI Agent 搜索热度上升**",
      "自主决策、工具调用成为新焦点",
      "",
      "**AI Workflow 搜索热度上升**",
      "可视化编排、自动化流程持续升温",
      "",
      "数据来源：Google Trends"
    ],
    visualContent: (
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <div className="text-center transform -translate-y-4">
          <div className="flex items-end justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="h-32 w-20 bg-red-100 rounded-t-lg flex items-end justify-center pb-3 border-2 border-red-300 relative">
                <TrendingDown size={48} className="text-red-500 absolute -top-6"/>
                <span className="text-3xl font-bold text-red-600">-40%</span>
              </div>
              <p className="text-sm text-slate-600 mt-3 font-bold">RAG</p>
            </div>
            <div className="text-center">
              <div className="h-48 w-20 bg-green-100 rounded-t-lg flex items-end justify-center pb-3 border-2 border-green-400 relative">
                <TrendingUp size={56} className="text-green-600 absolute -top-7"/>
                <span className="text-4xl font-extrabold text-green-700">+120%</span>
              </div>
              <p className="text-sm text-slate-600 mt-3 font-bold">Agent</p>
            </div>
            <div className="text-center">
              <div className="h-40 w-20 bg-blue-100 rounded-t-lg flex items-end justify-center pb-3 border-2 border-blue-400 relative">
                <TrendingUp size={52} className="text-blue-600 absolute -top-6"/>
                <span className="text-3xl font-bold text-blue-700">+85%</span>
              </div>
              <p className="text-sm text-slate-600 mt-3 font-bold">Workflow</p>
            </div>
          </div>
          <p className="text-xs text-slate-400">数据来源：Google Trends (2024.1 - 2025.12)</p>
        </div>
      </div>
    )
  },

  // 现有业务模式
  {
    id: 10,
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
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 text-center max-w-md">
          <AlertTriangle size={48} className="mx-auto text-amber-500 mb-4"/>
          <p className="text-lg font-medium text-slate-700">
            这是一个<span className="text-green-600">合格的业务</span>
          </p>
          <p className="text-lg font-medium text-slate-700 mt-2">
            但不是一个与当前机会体量匹配的<span className="text-amber-600">兴奋的业务</span>
          </p>
        </div>
      </div>
    )
  },

  // ========== PART 2: 三条产品线 ==========
  {
    id: 11,
    type: SlideType.SECTION,
    title: "2026 战略：三条产品线",
    subtitle: "明确分工，各司其职",
    footer: "第二部分"
  },

  // 产品矩阵概览
  {
    id: 12,
    type: SlideType.CARDS,
    title: "Dify 产品矩阵",
    subtitle: "三条产品线，三个战场",
    items: [
      {
        title: "第一条线：技术底座",
        description: "社区版 + 企业版\n负责人：小明 + 周宇",
        icon: <Code className="text-blue-500"/>
      },
      {
        title: "第二条线：轻量商业",
        description: "SaaS 化产品\n负责人：王征 + 子浩",
        icon: <Cloud className="text-purple-500"/>
      },
      {
        title: "第三条线：战略突破",
        description: "画布业务\n负责人：张路宇",
        icon: <Palette className="text-orange-500"/>
      }
    ]
  },

  // P0-2: 为什么是三条线
  {
    id: 13,
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
    id: 14,
    type: SlideType.CONTENT,
    title: "第一条线：社区版 + 企业版",
    subtitle: "负责人：小明 + 周宇 | 定位：技术底座",
    content: [
      "**目标：**",
      "降低工程负担",
      "保持技术领先",
      "提升企业版客户体验",
      "",
      "**核心工作：**",
      "维护开源社区",
      "服务企业客户"
    ]
  },

  // 第二条线详情
  {
    id: 15,
    type: SlideType.CONTENT,
    title: "第二条线：SaaS 化产品",
    subtitle: "负责人：王征 + 子浩 | 定位：轻量商业",
    content: [
      "**主要任务：**",
      "将现有产品彻底 SaaS 化，从主仓脱钩",
      "",
      "**目标：**",
      "降低工程负担",
      "实现产品闭环",
      "承担 ARR 目标",
      "",
      "**为什么需要这条线？**",
      "主仓耦合导致迭代慢，需要独立验证商业模式，为第三条线腾出精力"
    ]
  },

  // 画布定义
  {
    id: 16,
    type: SlideType.MACRO_FOCUS,
    title: "什么是画布？",
    content: [
      "画布 = 可视化的 AI 协作空间",
      "用户在画布上",
      "与 AI 共同创作、编辑、迭代内容"
    ]
  },

  // P0-3: 画布 vs 传统 Workflow 对比表
  {
    id: 17,
    type: SlideType.MATRIX,
    title: "画布 vs 传统 Workflow",
    subtitle: "交互范式的根本性变化",
    tableData: {
      headers: ["维度", "传统 Workflow", "画布"],
      rows: [
        ["交互方式", "固定流程、节点连线", "自由布局、实时协作"],
        ["适用场景", "确定性任务", "探索性、创意性任务"],
        ["用户心智", "配置工具", "思考空间"],
        ["协作模式", "单人配置", "多人实时协作"]
      ]
    },
    bottomBanner: {
      text: "画布不是 Workflow 的升级版，而是全新的产品形态",
      type: "info"
    }
  },

  // P2-8: 行业竞品信号 (重构为 CARDS)
  {
    id: 18,
    type: SlideType.CARDS,
    title: "行业信号：巨头都在押注画布",
    subtitle: "共同特征：从对话转向协作，从生成转向迭代",
    items: [
      {
        title: "ChatGPT Canvas",
        description: "OpenAI 可视化协作界面\n支持实时编辑与迭代",
        icon: <Monitor className="text-green-500"/>
      },
      {
        title: "Claude Artifacts",
        description: "Anthropic 交互式内容生成\n代码、文档即时呈现",
        icon: <Monitor className="text-purple-500"/>
      },
      {
        title: "Cursor Composer",
        description: "AI 编程工具画布化\n多文件协同编辑",
        icon: <Monitor className="text-blue-500"/>
      }
    ],
    bottomBanner: {
      text: "Dify 需要在这个窗口期抢占先机",
      type: "warning"
    }
  },

  // 第三条线详情
  {
    id: 19,
    type: SlideType.MACRO_FOCUS,
    title: "第三条线：画布业务",
    subtitle: "CEO 亲自带队 | 定位：战略突破",
    content: [
      "未来半年内的重大机会，不亚于 Dify 最早期的那个机会",
      "新的交互形式、新的协作范式",
      "当前所有方向中 ROI 最高，公司未来的重要增长点"
    ]
  },

  // P0-4: 投入级别 Slide
  {
    id: 20,
    type: SlideType.CARDS,
    title: "画布业务的投入级别",
    subtitle: "公司最高战略优先级",
    items: [
      {
        title: "CEO 亲自带队",
        description: "公司最高优先级\n路宇亲自负责产品方向",
        icon: <Star className="text-yellow-500"/>
      },
      {
        title: "独立团队",
        description: "不受主仓迭代节奏影响\n独立招聘、独立决策",
        icon: <Users className="text-blue-500"/>
      },
      {
        title: "快速迭代",
        description: "小步快跑，抢占窗口期\n两周一个版本",
        icon: <Zap className="text-orange-500"/>
      }
    ]
  },

  // ========== PART 3: DRI 制度 ==========
  {
    id: 21,
    type: SlideType.SECTION,
    title: "组织创新：DRI 制度",
    subtitle: "有权力才有责任，广泛听取、独立决策",
    footer: "第三部分"
  },

  // 为什么引入 DRI
  {
    id: 22,
    type: SlideType.CONTENT,
    title: "为什么引入 DRI？",
    subtitle: "团队扩大到 100 人，大企业病早期症状出现",
    content: [
      "**议而不决**",
      "一群人讨论一下午，没人拍板",
      "",
      "**执行推诿**",
      "产品怪研发，研发怪测试，测试怪需求不明确",
      "",
      "**无成本干扰**",
      "旁观者随意指手画脚，方案被迫平庸化"
    ]
  },

  // 什么是 DRI
  {
    id: 23,
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
        <div className="bg-dify-blue text-white rounded-xl p-8 text-center">
          <UserCheck size={64} className="mx-auto mb-4"/>
          <p className="text-2xl font-bold">有且仅有一人</p>
          <p className="text-lg mt-2 opacity-80">对最终结果负责</p>
        </div>
      </div>
    )
  },

  // P1-7: DRI 场景示例
  {
    id: 24,
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

  // 负责的定义
  {
    id: 25,
    type: SlideType.CARDS,
    title: "负责的定义",
    subtitle: "DRI 机制下，负责不是背锅",
    items: [
      {
        title: "Ownership",
        description: "你可以决定怎么做",
        icon: <Target className="text-blue-500"/>
      },
      {
        title: "Accountability",
        description: "出问题时你来主持解决",
        icon: <Shield className="text-green-500"/>
      },
      {
        title: "Improvement",
        description: "失败后你组织复盘",
        icon: <GitBranch className="text-purple-500"/>
      }
    ],
    bottomBanner: {
      text: "我们实行 Blameless Culture：只要不是恶意疏忽，一次尝试的失败不会受罚",
      type: "info"
    }
  },

  // DRI 三大原则
  {
    id: 26,
    type: SlideType.ACCORDION,
    title: "DRI 三大核心原则",
    items: [
      {
        title: "原则一：有权力才有责任",
        description: "DRI 要为最终结果负责，必须拥有最终决策权。如果你不承担失败的后果，你就没资格在决策书上签字。",
        icon: <Zap className="text-yellow-500"/>
      },
      {
        title: "原则二：广泛听取，独立决策",
        description: "过程是民主的（收集信息和建议），决策是独裁的（DRI 一人拍板）。",
        icon: <MessageSquare className="text-blue-500"/>
      },
      {
        title: "原则三：Disagree and Commit",
        description: "一旦 DRI 做出决定，即使持保留意见，也必须全力支持执行。严禁消极怠工和事后诸葛亮。",
        icon: <CheckCircle className="text-green-500"/>
      }
    ]
  },

  // Leader 与 DRI 的边界
  {
    id: 27,
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

  // 对员工和主管的要求
  {
    id: 28,
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
      <div className="flex flex-col gap-4 h-full justify-center">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <Users size={24} className="text-blue-500 mb-2"/>
          <p className="font-medium text-slate-700">员工</p>
          <p className="text-sm text-slate-500">承担责任 → 获得权力</p>
        </div>
        <div className="text-center text-2xl text-slate-400">
          <ArrowRight className="mx-auto rotate-90"/>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <Award size={24} className="text-purple-500 mb-2"/>
          <p className="font-medium text-slate-700">主管</p>
          <p className="text-sm text-slate-500">放权 → 定目标、选人、给资源</p>
        </div>
      </div>
    )
  },

  // DRI 效果
  {
    id: 29,
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
    id: 30,
    type: SlideType.SECTION,
    title: "总结",
    subtitle: "核心信息与行动指南",
    footer: "第四部分"
  },

  // P2-9: 核心信息 (重构为 CARDS)
  {
    id: 31,
    type: SlideType.CARDS,
    title: "核心信息",
    subtitle: "2026 年的三个关键变化",
    items: [
      {
        title: "外部环境变",
        description: "模型军备竞赛\n范式转移",
        icon: <TrendingUp className="text-blue-500"/>
      },
      {
        title: "产品战略变",
        description: "三条产品线\n各有定位",
        icon: <Layers className="text-purple-500"/>
      },
      {
        title: "组织架构变",
        description: "DRI 制度\n权责清晰",
        icon: <Users className="text-orange-500"/>
      }
    ]
  },

  // 行动号召
  {
    id: 32,
    type: SlideType.CONTENT,
    title: "对每个人的行动号召",
    content: [
      "1. 确认你在哪条线 — 找到自己的位置",
      "",
      "2. 明确你的 DRI 身份 — 承担具体责任",
      "",
      "3. All in，全力执行 — 能和不能会被快速识别"
    ]
  },

  // END
  {
    id: 33,
    type: SlideType.END,
    title: "Q&A",
    subtitle: "谢谢大家",
    footer: "Email: luyu@dify.ai | GitHub: langgenius"
  }
];
