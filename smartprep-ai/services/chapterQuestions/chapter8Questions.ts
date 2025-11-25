import { Question, QuestionType } from '../../types';

// 第8章华为AI解决方案题库 - 严格按照md文件内容生成
export const chapter8Questions: Question[] = [
  // 单选题（25题）
  {
    id: 'static_8_001',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为昇腾（Ascend）系列产品是？',
    options: [
      'AI处理器',
      '深度学习框架',
      '开发平台',
      '云服务'
    ],
    correctAnswer: 'A',
    explanation: '华为昇腾（Ascend）系列产品是AI处理器。'
  },
  {
    id: 'static_8_002',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为全栈全场景AI解决方案的基石是？',
    options: [
      'Atlas系列硬件',
      'ModelArts平台',
      'MindSpore框架',
      'HiAI服务'
    ],
    correctAnswer: 'A',
    explanation: '华为全栈全场景AI解决方案的基石是Atlas系列硬件。'
  },
  {
    id: 'static_8_003',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为面向开发者的一站式AI开发平台是？',
    options: [
      'ModelArts',
      'MindSpore',
      'CANN',
      'Atlas'
    ],
    correctAnswer: 'A',
    explanation: '华为面向开发者的一站式AI开发平台是ModelArts。'
  },
  {
    id: 'static_8_004',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为自研的深度学习框架是？',
    options: [
      'TensorFlow',
      'PyTorch',
      'MindSpore',
      'PaddlePaddle'
    ],
    correctAnswer: 'C',
    explanation: '华为自研的深度学习框架是MindSpore。'
  },
  {
    id: 'static_8_005',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'Atlas 900 AI集群主要用于什么场景？',
    options: [
      '端侧推理',
      '大规模训练',
      '边缘计算',
      '移动设备'
    ],
    correctAnswer: 'B',
    explanation: 'Atlas 900 AI集群主要用于大规模训练。'
  },
  {
    id: 'static_8_006',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为昇腾AI处理器的基础软件是？',
    options: [
      'CANN',
      'MindSpore',
      'ModelArts',
      'HiAI'
    ],
    correctAnswer: 'A',
    explanation: '华为昇腾AI处理器的基础软件是CANN。'
  },
  {
    id: 'static_8_007',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'MindSpore的三大特点不包括？',
    options: [
      '易开发',
      '高效执行',
      '全场景覆盖',
      '仅支持云侧'
    ],
    correctAnswer: 'D',
    explanation: 'MindSpore的三大特点不包括仅支持云侧。'
  },
  {
    id: 'static_8_008',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为AI解决方案中的"全场景"不包括？',
    options: [
      '公有云',
      '私有云',
      '边缘计算',
      '量子计算'
    ],
    correctAnswer: 'D',
    explanation: '华为AI解决方案中的"全场景"不包括量子计算。'
  },
  {
    id: 'static_8_009',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'Atlas 800推理服务器主要用于什么任务？',
    options: [
      '模型训练',
      '模型推理',
      '数据预处理',
      '模型部署'
    ],
    correctAnswer: 'B',
    explanation: 'Atlas 800推理服务器主要用于模型推理。'
  },
  {
    id: 'static_8_010',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'ModelArts平台不具备的功能是？',
    options: [
      '数据标注',
      '模型训练',
      '模型部署',
      '芯片制造'
    ],
    correctAnswer: 'D',
    explanation: 'ModelArts平台不具备的功能是芯片制造。'
  },
  {
    id: 'static_8_011',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为昇腾芯片的架构是？',
    options: [
      '达芬奇架构',
      '图灵架构',
      '安培架构',
      '伏特架构'
    ],
    correctAnswer: 'A',
    explanation: '华为昇腾芯片的架构是达芬奇架构。'
  },
  {
    id: 'static_8_012',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'MindSpore支持自动并行的优势是？',
    options: [
      '自动寻找最优并行策略',
      '自动调整学习率',
      '自动选择优化器',
      '自动数据增强'
    ],
    correctAnswer: 'A',
    explanation: 'MindSpore支持自动并行的优势是自动寻找最优并行策略。'
  },
  {
    id: 'static_8_013',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为AI全栈解决方案不包括？',
    options: [
      '芯片',
      '芯片使能',
      '训练推理框架',
      '量子计算机'
    ],
    correctAnswer: 'D',
    explanation: '华为AI全栈解决方案不包括量子计算机。'
  },
  {
    id: 'static_8_014',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'Atlas 300T Pro是？',
    options: [
      '训练卡',
      '推理卡',
      '加速模块',
      '边缘服务器'
    ],
    correctAnswer: 'A',
    explanation: 'Atlas 300T Pro是训练卡。'
  },
  {
    id: 'static_8_015',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'CANN的全称是？',
    options: [
      'Compute Architecture for Neural Networks',
      'CAN Network Node',
      'Compute Architecture for Neural Networks',
      'Computer AI Neural Network'
    ],
    correctAnswer: 'A',
    explanation: 'CANN的全称是Compute Architecture for Neural Networks。'
  },
  {
    id: 'static_8_016',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为AI解决方案在智慧矿山的应用不包括？',
    options: [
      '自动巡检',
      '违规行为检测',
      '设备健康监测',
      '矿脉勘探'
    ],
    correctAnswer: 'D',
    explanation: '华为AI解决方案在智慧矿山的应用不包括矿脉勘探。'
  },
  {
    id: 'static_8_017',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'MindSpore的图算融合技术主要作用是？',
    options: [
      '提升计算效率',
      '增加模型精度',
      '减少内存使用',
      '加速数据加载'
    ],
    correctAnswer: 'A',
    explanation: 'MindSpore的图算融合技术主要作用是提升计算效率。'
  },
  {
    id: 'static_8_018',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为云盘古大模型主要面向？',
    options: [
      '通用语言理解',
      '行业应用',
      '图像生成',
      '语音识别'
    ],
    correctAnswer: 'B',
    explanation: '华为云盘古大模型主要面向行业应用。'
  },
  {
    id: 'static_8_019',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'Atlas 500智能小站主要用于？',
    options: [
      '云端训练',
      '边缘推理',
      '数据存储',
      '网络传输'
    ],
    correctAnswer: 'B',
    explanation: 'Atlas 500智能小站主要用于边缘推理。'
  },
  {
    id: 'static_8_020',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为AI解决方案中的"全栈"指？',
    options: [
      '芯片到应用的全堆栈',
      '所有编程语言支持',
      '全部开源代码',
      '全球部署'
    ],
    correctAnswer: 'A',
    explanation: '华为AI解决方案中的"全栈"指芯片到应用的全堆栈。'
  },
  {
    id: 'static_8_021',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'MindSpore支持的科学计算套件是？',
    options: [
      'MindScience',
      'MindMath',
      'MindCompute',
      'MindCalc'
    ],
    correctAnswer: 'A',
    explanation: 'MindSpore支持的科学计算套件是MindScience。'
  },
  {
    id: 'static_8_022',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为AI在智慧政务中的应用不包括？',
    options: [
      '公文撰写',
      '政务问答',
      '城市感知',
      '股票交易'
    ],
    correctAnswer: 'D',
    explanation: '华为AI在智慧政务中的应用不包括股票交易。'
  },
  {
    id: 'static_8_023',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'Atlas 200加速模块主要用于？',
    options: [
      '端侧设备',
      '数据中心',
      '边缘服务器',
      '网络设备'
    ],
    correctAnswer: 'A',
    explanation: 'Atlas 200加速模块主要用于端侧设备。'
  },
  {
    id: 'static_8_024',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: 'ModelArts中的自动学习功能适合？',
    options: [
      'AI初学者',
      '算法专家',
      '硬件工程师',
      '数据科学家'
    ],
    correctAnswer: 'A',
    explanation: 'ModelArts中的自动学习功能适合AI初学者。'
  },
  {
    id: 'static_8_025',
    chapterId: 8,
    type: QuestionType.SINGLE,
    content: '华为AI解决方案的生态建设不包括？',
    options: [
      '开发者社区',
      '合作伙伴计划',
      '人才培养',
      '垄断市场'
    ],
    correctAnswer: 'D',
    explanation: '华为AI解决方案的生态建设不包括垄断市场。'
  },

  // 多选题（15题）
  {
    id: 'static_8_026',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: '华为全栈AI解决方案包括：',
    options: [
      'Ascend芯片',
      'CANN芯片使能',
      'MindSpore框架',
      'ModelArts平台'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '华为全栈AI解决方案包括Ascend芯片、CANN芯片使能、MindSpore框架、ModelArts平台。'
  },
  {
    id: 'static_8_027',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: 'Atlas系列产品包括：',
    options: [
      'Atlas 200加速模块',
      'Atlas 300推理卡',
      'Atlas 500智能小站',
      'Atlas 900 AI集群'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'Atlas系列产品包括Atlas 200加速模块、Atlas 300推理卡、Atlas 500智能小站、Atlas 900 AI集群。'
  },
  {
    id: 'static_8_028',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: 'MindSpore的特性包括：',
    options: [
      '自动并行',
      '动静统一',
      '端边云协同',
      '安全可信'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'MindSpore的特性包括自动并行、动静统一、端边云协同、安全可信。'
  },
  {
    id: 'static_8_029',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: 'ModelArts平台提供的能力包括：',
    options: [
      '数据标注',
      '模型训练',
      '模型部署',
      '自动化学习'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'ModelArts平台提供的能力包括数据标注、模型训练、模型部署、自动化学习。'
  },
  {
    id: 'static_8_030',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: '华为AI的应用场景包括：',
    options: [
      '智慧城市',
      '智能制造',
      '智慧医疗',
      '智慧金融'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '华为AI的应用场景包括智慧城市、智能制造、智慧医疗、智慧金融。'
  },
  {
    id: 'static_8_031',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: '昇腾AI处理器的产品系列包括：',
    options: [
      '训练系列',
      '推理系列',
      '边缘系列',
      '端侧系列'
    ],
    correctAnswer: ['A', 'B'],
    explanation: '昇腾AI处理器的产品系列包括训练系列、推理系列。'
  },
  {
    id: 'static_8_032',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: '华为AI在环境保护中的应用包括：',
    options: [
      '生物多样性监测',
      '非法伐木检测',
      '动物行为研究',
      '气候变化预测'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '华为AI在环境保护中的应用包括生物多样性监测、非法伐木检测、动物行为研究。'
  },
  {
    id: 'static_8_033',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: 'MindSpore支持的硬件包括：',
    options: [
      '昇腾系列',
      'GPU',
      'CPU',
      '移动芯片'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'MindSpore支持的硬件包括昇腾系列、GPU、CPU、移动芯片。'
  },
  {
    id: 'static_8_034',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: '华为AI解决方案的技术优势包括：',
    options: [
      '全栈优化',
      '软硬件协同',
      '端边云协同',
      '生态开放'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '华为AI解决方案的技术优势包括全栈优化、软硬件协同、端边云协同、生态开放。'
  },
  {
    id: 'static_8_035',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: 'Atlas 900 AI集群的特点包括：',
    options: [
      '超大规模计算',
      '高速互联',
      '能效优化',
      '移动便携'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Atlas 900 AI集群的特点包括超大规模计算、高速互联、能效优化。'
  },
  {
    id: 'static_8_036',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: 'ModelArts的开发模式包括：',
    options: [
      '自动学习',
      '可视化开发',
      '代码开发',
      '硬件设计'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'ModelArts的开发模式包括自动学习、可视化开发、代码开发。'
  },
  {
    id: 'static_8_037',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: '华为AI在智慧交通中的应用包括：',
    options: [
      '全息路口',
      '智能停车',
      '交通流量预测',
      '车辆调度'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '华为AI在智慧交通中的应用包括全息路口、智能停车、交通流量预测、车辆调度。'
  },
  {
    id: 'static_8_038',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: 'MindSpore的安全特性包括：',
    options: [
      '隐私保护',
      '模型加密',
      '可信执行',
      '安全审计'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'MindSpore的安全特性包括隐私保护、模型加密、可信执行、安全审计。'
  },
  {
    id: 'static_8_039',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: '华为AI人才培养体系包括：',
    options: [
      'HCIA认证',
      '高校合作',
      '开发者社区',
      '培训课程'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '华为AI人才培养体系包括HCIA认证、高校合作、开发者社区、培训课程。'
  },
  {
    id: 'static_8_040',
    chapterId: 8,
    type: QuestionType.MULTIPLE,
    content: '华为AI的行业解决方案包括：',
    options: [
      '金融风控',
      '医疗影像',
      '工业质检',
      '网络优化'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '华为AI的行业解决方案包括金融风控、医疗影像、工业质检、网络优化。'
  },

  // 判断题（15题）
  {
    id: 'static_8_041',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: '华为昇腾AI处理器采用达芬奇架构。',
    correctAnswer: 'true',
    explanation: '华为昇腾AI处理器采用达芬奇架构。'
  },
  {
    id: 'static_8_042',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: 'MindSpore仅支持华为自研的昇腾芯片。',
    correctAnswer: 'false',
    explanation: 'MindSpore不仅支持华为自研的昇腾芯片，还支持GPU、CPU等多种硬件平台。MindSpore具有跨平台特性，可以在昇腾、GPU、CPU等不同硬件上运行，支持多种计算设备。'
  },
  {
    id: 'static_8_043',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: 'Atlas 900是目前全球最快的AI训练集群。',
    correctAnswer: 'true',
    explanation: 'Atlas 900是目前全球最快的AI训练集群。'
  },
  {
    id: 'static_8_044',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: 'ModelArts仅用于模型训练，不支持模型部署。',
    correctAnswer: 'false',
    explanation: 'ModelArts不仅用于模型训练，还支持模型部署。ModelArts提供完整的AI开发流程，包括数据准备、模型训练、模型部署和推理服务，支持端到端的AI应用开发。'
  },
  {
    id: 'static_8_045',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: '华为AI解决方案覆盖端、边、云全场景。',
    correctAnswer: 'true',
    explanation: '华为AI解决方案覆盖端、边、云全场景。'
  },
  {
    id: 'static_8_046',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: 'CANN是华为的深度学习框架。',
    correctAnswer: 'false',
    explanation: 'CANN不是华为的深度学习框架，而是昇腾计算架构的神经网络算子库和工具链。CANN为昇腾芯片提供底层计算能力，而MindSpore才是华为的深度学习框架。'
  },
  {
    id: 'static_8_047',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: 'MindSpore支持自动微分和动态图优先。',
    correctAnswer: 'true',
    explanation: 'MindSpore支持自动微分和动态图优先。'
  },
  {
    id: 'static_8_048',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: '盘古大模型是面向通用自然语言处理的大模型。',
    correctAnswer: 'false',
    explanation: '盘古大模型不是面向通用自然语言处理的大模型，而是面向行业应用的大模型。盘古大模型包括盘古NLP、盘古CV、盘古科学计算等多个行业专用模型，专注于解决特定行业的AI应用问题。'
  },
  {
    id: 'static_8_049',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: 'Atlas 500主要用于云端大规模训练。',
    correctAnswer: 'false',
    explanation: 'Atlas 500智能小站主要用于边缘侧AI推理，而不是云端模型训练。Atlas 500是面向边缘计算的智能设备，适用于智能制造、智能交通等边缘场景的实时推理需求。'
  },
  {
    id: 'static_8_050',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: '华为AI在智慧矿山中可以实现无人值守。',
    correctAnswer: 'true',
    explanation: '华为AI在智慧矿山中可以实现无人值守。'
  },
  {
    id: 'static_8_051',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: 'ModelArts提供数据预处理和特征工程功能。',
    correctAnswer: 'true',
    explanation: 'ModelArts提供数据预处理和特征工程功能。'
  },
  {
    id: 'static_8_052',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: '昇腾AI处理器只能用于推理任务。',
    correctAnswer: 'false',
    explanation: '昇腾AI处理器不仅能用于推理任务，还能用于训练任务。昇腾系列处理器包括训练卡和推理卡，支持完整的AI训练和推理流程，如Atlas 300训练卡专门用于模型训练。'
  },
  {
    id: 'static_8_053',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: 'MindSpore的图算融合可以提升计算性能。',
    correctAnswer: 'true',
    explanation: 'MindSpore的图算融合可以提升计算性能。'
  },
  {
    id: 'static_8_054',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: '华为AI解决方案是封闭的，不开放给第三方。',
    correctAnswer: 'false',
    explanation: '华为AI解决方案是开放的，积极与第三方合作。华为AI生态包括开源框架MindSpore、开放平台ModelArts，以及丰富的合作伙伴计划，支持第三方开发者和企业使用华为AI技术。'
  },
  {
    id: 'static_8_055',
    chapterId: 8,
    type: QuestionType.TRUE_FALSE,
    content: 'Atlas 200可以在端侧设备上进行AI推理。',
    correctAnswer: 'true',
    explanation: 'Atlas 200可以在端侧设备上进行AI推理。'
  },

  // 填空题（15题）
  {
    id: 'static_8_056',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: '华为全栈全场景AI解决方案的基石是 __________ 系列硬件。',
    correctAnswer: 'Atlas',
    explanation: '华为全栈全场景AI解决方案的基石是Atlas系列硬件。'
  },
  {
    id: 'static_8_057',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: '华为自研的AI处理器采用 __________ 架构。',
    correctAnswer: '达芬奇',
    explanation: '华为自研的AI处理器采用达芬奇架构。'
  },
  {
    id: 'static_8_058',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: '华为的深度学习框架名为 __________。',
    correctAnswer: 'MindSpore',
    explanation: '华为的深度学习框架名为MindSpore。'
  },
  {
    id: 'static_8_059',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: '面向开发者的一站式AI开发平台是 __________。',
    correctAnswer: 'ModelArts',
    explanation: '面向开发者的一站式AI开发平台是ModelArts。'
  },
  {
    id: 'static_8_060',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: 'Atlas 900是面向 __________ 的AI训练集群。',
    correctAnswer: '大规模训练',
    explanation: 'Atlas 900是面向大规模训练的AI训练集群。'
  },
  {
    id: 'static_8_061',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: 'CANN是昇腾AI处理器的 __________ 软件。',
    correctAnswer: '基础',
    explanation: 'CANN是昇腾AI处理器的基础软件。'
  },
  {
    id: 'static_8_062',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: 'MindSpore支持 __________ 并行，自动寻找最优策略。',
    correctAnswer: '自动',
    explanation: 'MindSpore支持自动并行，自动寻找最优策略。'
  },
  {
    id: 'static_8_063',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: '华为AI解决方案覆盖公有云、私有云和 __________ 计算。',
    correctAnswer: '边缘',
    explanation: '华为AI解决方案覆盖公有云、私有云和边缘计算。'
  },
  {
    id: 'static_8_064',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: 'Atlas 500是面向 __________ 的智能小站。',
    correctAnswer: '边缘推理',
    explanation: 'Atlas 500是面向边缘推理的智能小站。'
  },
  {
    id: 'static_8_065',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: 'ModelArts提供 __________ 学习功能，降低AI开发门槛。',
    correctAnswer: '自动',
    explanation: 'ModelArts提供自动学习功能，降低AI开发门槛。'
  },
  {
    id: 'static_8_066',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: '华为盘古大模型主要面向 __________ 应用。',
    correctAnswer: '行业',
    explanation: '华为盘古大模型主要面向行业应用。'
  },
  {
    id: 'static_8_067',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: 'Atlas 300系列包括推理卡和 __________ 卡。',
    correctAnswer: '训练',
    explanation: 'Atlas 300系列包括推理卡和训练卡。'
  },
  {
    id: 'static_8_068',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: 'MindSpore通过 __________ 融合技术提升计算效率。',
    correctAnswer: '图算',
    explanation: 'MindSpore通过图算融合技术提升计算效率。'
  },
  {
    id: 'static_8_069',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: '华为AI在智慧城市中可以实现城市事件 __________。',
    correctAnswer: '发现',
    explanation: '华为AI在智慧城市中可以实现城市事件发现。'
  },
  {
    id: 'static_8_070',
    chapterId: 8,
    type: QuestionType.FILL_BLANK,
    content: '华为AI人才培养的认证体系包括 __________ 认证。',
    correctAnswer: 'HCIA',
    explanation: '华为AI人才培养的认证体系包括HCIA认证。'
  }
];

export default chapter8Questions;