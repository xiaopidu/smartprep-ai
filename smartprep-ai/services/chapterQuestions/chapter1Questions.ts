import { Question, QuestionType } from '../../types';

// 第1章人工智能概览题库 - 严格按照md文件内容生成
export const chapter1Questions: Question[] = [
  // 单选题（20题）
  {
    id: 'static_1_001',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '人工智能作为一门学科正式诞生的标志是？',
    options: [
      '图灵测试提出',
      '达特茅斯会议召开',
      '第一个专家系统诞生',
      '深度学习兴起'
    ],
    correctAnswer: 'B',
    explanation: '人工智能作为一门学科正式诞生的标志是达特茅斯会议召开。'
  },
  {
    id: 'static_1_002',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '约翰·麦卡锡在1956年提出的人工智能定义侧重于？',
    options: [
      '机器内部的神经结构',
      '机器的智能行为表现',
      '机器的自我意识',
      '机器的进化能力'
    ],
    correctAnswer: 'B',
    explanation: '约翰·麦卡锡在1956年提出的人工智能定义侧重于机器的智能行为表现。'
  },
  {
    id: 'static_1_003',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '哪位学者提出了"计算机器与智能"并讨论"机器能思考吗"？',
    options: [
      '约翰·麦卡锡',
      '艾伦·图灵',
      '马文·闵斯基',
      '霍华德·加德纳'
    ],
    correctAnswer: 'B',
    explanation: '艾伦·图灵提出了"计算机器与智能"并讨论"机器能思考吗"。'
  },
  {
    id: 'static_1_004',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '霍华德·加德纳的多元智能理论包含多少种智能类型？',
    options: [
      '6种',
      '7种',
      '8种',
      '9种'
    ],
    correctAnswer: 'C',
    explanation: '霍华德·加德纳的多元智能理论包含8种智能类型。'
  },
  {
    id: 'static_1_005',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '以下哪种智能不属于加德纳的多元智能理论？',
    options: [
      '语言智能',
      '逻辑数学智能',
      '计算机智能',
      '空间智能'
    ],
    correctAnswer: 'C',
    explanation: '计算机智能不属于加德纳的多元智能理论。'
  },
  {
    id: 'static_1_006',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '符号主义学派认为人工智能源于什么？',
    options: [
      '仿生学',
      '控制论',
      '数理逻辑',
      '进化论'
    ],
    correctAnswer: 'C',
    explanation: '符号主义学派认为人工智能源于数理逻辑。'
  },
  {
    id: 'static_1_007',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '连接主义学派主要受到什么学科的启发？',
    options: [
      '数学逻辑',
      '心理学',
      '仿生学',
      '控制论'
    ],
    correctAnswer: 'C',
    explanation: '连接主义学派主要受到仿生学的启发。'
  },
  {
    id: 'static_1_008',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '行为主义学派认为智能的核心是什么？',
    options: [
      '符号推理',
      '神经网络',
      '感知与行动',
      '知识表示'
    ],
    correctAnswer: 'C',
    explanation: '行为主义学派认为智能的核心是感知与行动。'
  },
  {
    id: 'static_1_009',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '人工智能三要素中被称为"发动机"的是？',
    options: [
      '数据',
      '算法',
      '算力',
      '模型'
    ],
    correctAnswer: 'C',
    explanation: '人工智能三要素中被称为"发动机"的是算力。'
  },
  {
    id: 'static_1_010',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '人工智能三要素中被称为"大脑"的是？',
    options: [
      '数据',
      '算法',
      '算力',
      '框架'
    ],
    correctAnswer: 'B',
    explanation: '人工智能三要素中被称为"大脑"的是算法。'
  },
  {
    id: 'static_1_011',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '以下哪项不属于算力基础设施？',
    options: [
      '云计算',
      '边缘计算',
      '数据挖掘',
      '高性能计算'
    ],
    correctAnswer: 'C',
    explanation: '数据挖掘不属于算力基础设施。'
  },
  {
    id: 'static_1_012',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '强人工智能的主要特征是什么？',
    options: [
      '仅限于特定领域',
      '具备全方位类人能力',
      '只能完成简单任务',
      '需要大量人工干预'
    ],
    correctAnswer: 'B',
    explanation: '强人工智能的主要特征是具备全方位类人能力。'
  },
  {
    id: 'static_1_013',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '当前我们处于人工智能发展的哪个阶段？',
    options: [
      '强人工智能阶段',
      '超人工智能阶段',
      '弱人工智能阶段',
      '通用人工智能阶段'
    ],
    correctAnswer: 'C',
    explanation: '当前我们处于人工智能发展的弱人工智能阶段。'
  },
  {
    id: 'static_1_014',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '符号主义眼中的"苹果"是如何表示的？',
    options: [
      '神经网络权重',
      '感知动作映射',
      '符号属性集合',
      '环境交互结果'
    ],
    correctAnswer: 'C',
    explanation: '符号主义眼中的"苹果"是通过符号属性集合表示的。'
  },
  {
    id: 'static_1_015',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '连接主义眼中的"苹果"是如何表示的？',
    options: [
      '逻辑命题',
      '神经元激活模式',
      '行为反应',
      '符号推理'
    ],
    correctAnswer: 'B',
    explanation: '连接主义眼中的"苹果"是通过神经元激活模式表示的。'
  },
  {
    id: 'static_1_016',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '专家系统主要基于哪个学派的理论？',
    options: [
      '符号主义',
      '连接主义',
      '行为主义',
      '进化主义'
    ],
    correctAnswer: 'A',
    explanation: '专家系统主要基于符号主义学派的理论。'
  },
  {
    id: 'static_1_017',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '布鲁克斯的六足行走机器人体现了哪个学派的思想？',
    options: [
      '符号主义',
      '连接主义',
      '行为主义',
      '逻辑主义'
    ],
    correctAnswer: 'C',
    explanation: '布鲁克斯的六足行走机器人体现了行为主义学派的思想。'
  },
  {
    id: 'static_1_018',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '以下哪项不是人工智能的主要应用领域？',
    options: [
      '智能制造',
      '智慧医疗',
      '金融服务',
      '传统农业'
    ],
    correctAnswer: 'D',
    explanation: '传统农业不是人工智能的主要应用领域。'
  },
  {
    id: 'static_1_019',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '人工智能产业生态的基础层不包括？',
    options: [
      '芯片',
      '服务器',
      'AI应用',
      '云计算'
    ],
    correctAnswer: 'C',
    explanation: '人工智能产业生态的基础层不包括AI应用。'
  },
  {
    id: 'static_1_020',
    chapterId: 1,
    type: QuestionType.SINGLE,
    content: '马文·闵斯基对人工智能的定义强调？',
    options: [
      '机器模仿人类智能行为',
      '机器具备自我意识',
      '机器超越人类智能',
      '机器情感理解'
    ],
    correctAnswer: 'A',
    explanation: '马文·闵斯基对人工智能的定义强调机器模仿人类智能行为。'
  },

  // 多选题（10题）
  {
    id: 'static_1_021',
    chapterId: 1,
    type: QuestionType.MULTIPLE,
    content: '人工智能的主要学派包括：',
    options: [
      '符号主义',
      '连接主义',
      '行为主义',
      '进化主义'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '人工智能的主要学派包括符号主义、连接主义、行为主义。'
  },
  {
    id: 'static_1_022',
    chapterId: 1,
    type: QuestionType.MULTIPLE,
    content: '人工智能的三要素包括：',
    options: [
      '数据',
      '算法',
      '算力',
      '人才'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '人工智能的三要素包括数据、算法、算力。'
  },
  {
    id: 'static_1_023',
    chapterId: 1,
    type: QuestionType.MULTIPLE,
    content: '强人工智能的特征包括：',
    options: [
      '能真正推理和解决问题',
      '有知觉和自我意识',
      '仅限于特定领域',
      '有自主价值观和世界观'
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: '强人工智能的特征包括能真正推理和解决问题、有知觉和自我意识、有自主价值观和世界观。'
  },
  {
    id: 'static_1_024',
    chapterId: 1,
    type: QuestionType.MULTIPLE,
    content: '霍华德·加德纳的多元智能理论包括：',
    options: [
      '语言智能',
      '逻辑数学智能',
      '空间智能',
      '人际智能'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '霍华德·加德纳的多元智能理论包括语言智能、逻辑数学智能、空间智能、人际智能。'
  },
  {
    id: 'static_1_025',
    chapterId: 1,
    type: QuestionType.MULTIPLE,
    content: '算力基础设施包括：',
    options: [
      '云计算',
      '边缘计算',
      '高性能计算',
      '数据可视化'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '算力基础设施包括云计算、边缘计算、高性能计算。'
  },
  {
    id: 'static_1_026',
    chapterId: 1,
    type: QuestionType.MULTIPLE,
    content: '符号主义的主要观点包括：',
    options: [
      '源于数理逻辑',
      '认知基元是符号',
      '源于仿生学',
      '智能基于感知行动'
    ],
    correctAnswer: ['A', 'B'],
    explanation: '符号主义的主要观点包括源于数理逻辑、认知基元是符号。'
  },
  {
    id: 'static_1_027',
    chapterId: 1,
    type: QuestionType.MULTIPLE,
    content: '弱人工智能的特点包括：',
    options: [
      '不能真正推理',
      '没有自主意识',
      '全方位类人能力',
      '看起来像是智能的'
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: '弱人工智能的特点包括不能真正推理、没有自主意识、看起来像是智能的。'
  },
  {
    id: 'static_1_028',
    chapterId: 1,
    type: QuestionType.MULTIPLE,
    content: '人工智能的争议问题包括：',
    options: [
      '伦理问题',
      '失业问题',
      '隐私安全',
      '技术可控性'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '人工智能的争议问题包括伦理问题、失业问题、隐私安全、技术可控性。'
  },
  {
    id: 'static_1_029',
    chapterId: 1,
    type: QuestionType.MULTIPLE,
    content: '连接主义的主要观点包括：',
    options: [
      '源于仿生学',
      '思维基元是神经元',
      '基于符号处理',
      '研究神经网络模型'
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: '连接主义的主要观点包括源于仿生学、思维基元是神经元、研究神经网络模型。'
  },
  {
    id: 'static_1_030',
    chapterId: 1,
    type: QuestionType.MULTIPLE,
    content: '行为主义的主要观点包括：',
    options: [
      '源于控制论',
      '智能取决于感知和行动',
      '需要知识表示',
      '智能逐步进化'
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: '行为主义的主要观点包括源于控制论、智能取决于感知和行动、智能逐步进化。'
  },

  // 判断题（10题）
  {
    id: 'static_1_031',
    chapterId: 1,
    type: QuestionType.TRUE_FALSE,
    content: '弱人工智能是指具备人类全面智能的机器。',
    correctAnswer: 'false',
    explanation: '弱人工智能不是指具备人类全面智能的机器。'
  },
  {
    id: 'static_1_032',
    chapterId: 1,
    type: QuestionType.TRUE_FALSE,
    content: '约翰·麦卡锡在1956年提出了"人工智能"这一术语。',
    correctAnswer: 'true',
    explanation: '约翰·麦卡锡在1956年提出了"人工智能"这一术语。'
  },
  {
    id: 'static_1_033',
    chapterId: 1,
    type: QuestionType.TRUE_FALSE,
    content: '连接主义认为可以用计算机来模拟人的智能行为。',
    correctAnswer: 'false',
    explanation: '连接主义不认为可以用计算机来模拟人的智能行为（这是符号主义的观点）。'
  },
  {
    id: 'static_1_034',
    chapterId: 1,
    type: QuestionType.TRUE_FALSE,
    content: '行为主义认为智能不需要知识、表示和推理。',
    correctAnswer: 'true',
    explanation: '行为主义认为智能不需要知识、表示和推理。'
  },
  {
    id: 'static_1_035',
    chapterId: 1,
    type: QuestionType.TRUE_FALSE,
    content: '强人工智能目前已经实现并广泛应用。',
    correctAnswer: 'false',
    explanation: '强人工智能目前还没有实现并广泛应用。'
  },
  {
    id: 'static_1_036',
    chapterId: 1,
    type: QuestionType.TRUE_FALSE,
    content: '符号主义在1980年代因专家系统取得成功而重要发展。',
    correctAnswer: 'true',
    explanation: '符号主义在1980年代因专家系统取得成功而重要发展。'
  },
  {
    id: 'static_1_037',
    chapterId: 1,
    type: QuestionType.TRUE_FALSE,
    content: '人工智能三要素中，数据是模型的"燃料"。',
    correctAnswer: 'true',
    explanation: '人工智能三要素中，数据是模型的"燃料"。'
  },
  {
    id: 'static_1_038',
    chapterId: 1,
    type: QuestionType.TRUE_FALSE,
    content: '霍华德·加德纳是计算机科学家。',
    correctAnswer: 'false',
    explanation: '霍华德·加德纳不是计算机科学家（他是教育学家和心理学家）。'
  },
  {
    id: 'static_1_039',
    chapterId: 1,
    type: QuestionType.TRUE_FALSE,
    content: '艾伦·图灵提出了图灵测试来判定机器是否具有智能。',
    correctAnswer: 'true',
    explanation: '艾伦·图灵提出了图灵测试来判定机器是否具有智能。'
  },
  {
    id: 'static_1_040',
    chapterId: 1,
    type: QuestionType.TRUE_FALSE,
    content: '行为主义的代表作是布鲁克斯的六足行走机器人。',
    correctAnswer: 'true',
    explanation: '行为主义的代表作是布鲁克斯的六足行走机器人。'
  },

  // 填空题（10题）
  {
    id: 'static_1_041',
    chapterId: 1,
    type: QuestionType.FILL_BLANK,
    content: '人工智能的奠基性会议——达特茅斯会议在 __________ 年召开。',
    correctAnswer: '1956',
    explanation: '人工智能的奠基性会议——达特茅斯会议在1956年召开。'
  },
  {
    id: 'static_1_042',
    chapterId: 1,
    type: QuestionType.FILL_BLANK,
    content: '艾伦·图灵在1950年提出的著名问题是"__________？"',
    correctAnswer: '机器能思考吗',
    explanation: '艾伦·图灵在1950年提出的著名问题是"机器能思考吗？"'
  },
  {
    id: 'static_1_043',
    chapterId: 1,
    type: QuestionType.FILL_BLANK,
    content: '人工智能的三要素是数据、算法和 __________。',
    correctAnswer: '算力',
    explanation: '人工智能的三要素是数据、算法和算力。'
  },
  {
    id: 'static_1_044',
    chapterId: 1,
    type: QuestionType.FILL_BLANK,
    content: '符号主义认为人类的认知基元是 __________。',
    correctAnswer: '符号',
    explanation: '符号主义认为人类的认知基元是符号。'
  },
  {
    id: 'static_1_045',
    chapterId: 1,
    type: QuestionType.FILL_BLANK,
    content: '连接主义认为人类的思维基元是 __________。',
    correctAnswer: '神经元',
    explanation: '连接主义认为人类的思维基元是神经元。'
  },
  {
    id: 'static_1_046',
    chapterId: 1,
    type: QuestionType.FILL_BLANK,
    content: '行为主义认为智能是基于 __________ 和 __________。',
    correctAnswer: '感知和行动',
    explanation: '行为主义认为智能是基于感知和行动。'
  },
  {
    id: 'static_1_047',
    chapterId: 1,
    type: QuestionType.FILL_BLANK,
    content: '强人工智能的特征包括 __________、__________、__________ 和 __________。',
    correctAnswer: '能真正推理和解决问题、有知觉和自我意识、仅限于特定领域、有自主价值观和世界观',
    explanation: '强人工智能的特征包括能真正推理和解决问题、有知觉和自我意识、仅限于特定领域、有自主价值观和世界观。'
  },
  {
    id: 'static_1_048',
    chapterId: 1,
    type: QuestionType.FILL_BLANK,
    content: 'Howard Gardner 是一个 __________ 和 __________。',
    correctAnswer: '教育学家、心理学家',
    explanation: 'Howard Gardner 是一个教育学家和心理学家。'
  },
  {
    id: 'static_1_049',
    chapterId: 1,
    type: QuestionType.FILL_BLANK,
    content: '图灵测试是用来判断机器是否具有 __________ 智能的测试。',
    correctAnswer: '模仿',
    explanation: '图灵测试是用来判断机器是否具有模仿智能的测试。'
  },
  {
    id: 'static_1_050',
    chapterId: 1,
    type: QuestionType.FILL_BLANK,
    content: '行为主义的代表作是布鲁克斯的六足行走机器人。',
    correctAnswer: '是',
    explanation: '行为主义的代表作是布鲁克斯的六足行走机器人。'
  }
];

export default chapter1Questions;