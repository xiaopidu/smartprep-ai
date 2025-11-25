import { Question, QuestionType } from '../../types';

// 第6章Transformer与大模型题库 - 严格按照md文件内容生成
export const chapter6Questions: Question[] = [
  // 单选题（25题）
  {
    id: 'static_6_001',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Transformer模型首次提出是在哪篇论文中？',
    options: [
      '"Attention is All You Need"',
      '"BERT: Pre-training of Deep Bidirectional Transformers"',
      '"Language Models are Few-Shot Learners"',
      '"Improving Language Understanding by Generative Pre-Training"'
    ],
    correctAnswer: 'A',
    explanation: 'Transformer模型首次提出是在"Attention is All You Need"论文中。'
  },
  {
    id: 'static_6_002',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Transformer模型完全基于什么机制？',
    options: [
      '卷积机制',
      '循环机制',
      '注意力机制',
      '池化机制'
    ],
    correctAnswer: 'C',
    explanation: 'Transformer模型完全基于注意力机制。'
  },
  {
    id: 'static_6_003',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Transformer相比RNN的主要优势是什么？',
    options: [
      '参数更少',
      '可以并行计算',
      '结构更简单',
      '训练更稳定'
    ],
    correctAnswer: 'B',
    explanation: 'Transformer相比RNN的主要优势是可以并行计算。'
  },
  {
    id: 'static_6_004',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Self-Attention机制的核心计算不包括：',
    options: [
      'Query-Key相似度计算',
      'Softmax归一化',
      '加权求和',
      '卷积操作'
    ],
    correctAnswer: 'D',
    explanation: 'Self-Attention机制的核心计算不包括卷积操作。'
  },
  {
    id: 'static_6_005',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Transformer中的位置编码主要用于：',
    options: [
      '引入序列位置信息',
      '增加模型参数',
      '提高计算效率',
      '减少过拟合'
    ],
    correctAnswer: 'A',
    explanation: 'Transformer中的位置编码主要用于引入序列位置信息。'
  },
  {
    id: 'static_6_006',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Multi-Head Attention的主要作用是：',
    options: [
      '从不同角度学习信息',
      '减少参数数量',
      '加速训练过程',
      '增加网络深度'
    ],
    correctAnswer: 'A',
    explanation: 'Multi-Head Attention的主要作用是从不同角度学习信息。'
  },
  {
    id: 'static_6_007',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Transformer Encoder中包含：',
    options: [
      '自注意力层和前馈网络',
      '编码器和解码器',
      '卷积层和池化层',
      'LSTM和GRU'
    ],
    correctAnswer: 'A',
    explanation: 'Transformer Encoder中包含自注意力层和前馈网络。'
  },
  {
    id: 'static_6_008',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'BERT模型的预训练任务不包括：',
    options: [
      '掩码语言模型',
      '下一句预测',
      '自回归语言模型',
      '文本分类'
    ],
    correctAnswer: 'C',
    explanation: 'BERT模型的预训练任务不包括自回归语言模型。'
  },
  {
    id: 'static_6_009',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'GPT系列模型采用什么架构？',
    options: [
      'Encoder-only',
      'Decoder-only',
      'Encoder-Decoder',
      '混合架构'
    ],
    correctAnswer: 'B',
    explanation: 'GPT系列模型采用Decoder-only架构。'
  },
  {
    id: 'static_6_010',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: '大模型通常指参数量在什么级别？',
    options: [
      '万级别',
      '百万级别',
      '亿级别',
      '千亿级别'
    ],
    correctAnswer: 'C',
    explanation: '大模型通常指参数量在亿级别。'
  },
  {
    id: 'static_6_011',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: '大模型训练中的思维链（Chain-of-Thought）是指：',
    options: [
      '提供逐步推理过程',
      '增加训练数据',
      '使用更大模型',
      '多任务学习'
    ],
    correctAnswer: 'A',
    explanation: '大模型训练中的思维链（Chain-of-Thought）是指提供逐步推理过程。'
  },
  {
    id: 'static_6_012',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: '上下文学习（In-Context Learning）属于大模型的什么能力？',
    options: [
      '涌现能力',
      '记忆能力',
      '推理能力',
      '生成能力'
    ],
    correctAnswer: 'A',
    explanation: '上下文学习（In-Context Learning）属于大模型的涌现能力。'
  },
  {
    id: 'static_6_013',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'MoE（Mixture of Experts）架构的主要优势是：',
    options: [
      '提高模型容量和效率',
      '减少参数数量',
      '加速推理速度',
      '提高可解释性'
    ],
    correctAnswer: 'A',
    explanation: 'MoE（Mixture of Experts）架构的主要优势是提高模型容量和效率。'
  },
  {
    id: 'static_6_014',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Transformer中的Layer Normalization作用在：',
    options: [
      '每个子层的输出',
      '整个网络的输出',
      '注意力权重',
      '位置编码'
    ],
    correctAnswer: 'A',
    explanation: 'Transformer中的Layer Normalization作用在每个子层的输出。'
  },
  {
    id: 'static_6_015',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: '大模型微调（Fine-tuning）通常使用什么方法？',
    options: [
      '从零开始训练',
      '在预训练模型基础上调整',
      '只训练最后一层',
      '冻结所有参数'
    ],
    correctAnswer: 'B',
    explanation: '大模型微调（Fine-tuning）通常使用在预训练模型基础上调整的方法。'
  },
  {
    id: 'static_6_016',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Transformer中的残差连接主要解决什么问题？',
    options: [
      '梯度消失',
      '过拟合',
      '计算效率',
      '内存不足'
    ],
    correctAnswer: 'A',
    explanation: 'Transformer中的残差连接主要解决梯度消失问题。'
  },
  {
    id: 'static_6_017',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'GPT-3的参数量大约是：',
    options: [
      '1.75亿',
      '1.75千亿',
      '1.75万亿',
      '175亿'
    ],
    correctAnswer: 'B',
    explanation: 'GPT-3的参数量大约是1.75千亿。'
  },
  {
    id: 'static_6_018',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: '大模型训练通常使用什么类型的并行策略？',
    options: [
      '数据并行',
      '模型并行',
      '流水线并行',
      '所有以上'
    ],
    correctAnswer: 'D',
    explanation: '大模型训练通常使用数据并行、模型并行、流水线并行等所有以上策略。'
  },
  {
    id: 'static_6_019',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Transformer中前馈网络的激活函数通常是：',
    options: [
      'ReLU',
      'Sigmoid',
      'Tanh',
      'Leaky ReLU'
    ],
    correctAnswer: 'A',
    explanation: 'Transformer中前馈网络的激活函数通常是ReLU。'
  },
  {
    id: 'static_6_020',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: '大模型的"涌现能力"指：',
    options: [
      '模型规模达到阈值后出现的新能力',
      '训练过程中逐渐提高的能力',
      '通过微调获得的能力',
      '模型设计时预设的能力'
    ],
    correctAnswer: 'A',
    explanation: '大模型的"涌现能力"指模型规模达到阈值后出现的新能力。'
  },
  {
    id: 'static_6_021',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: '位置编码使用正弦余弦函数的主要原因是：',
    options: [
      '能够 extrapolate 到更长的序列',
      '计算简单',
      '参数更少',
      '训练稳定'
    ],
    correctAnswer: 'A',
    explanation: '位置编码使用正弦余弦函数的主要原因是能够 extrapolate 到更长的序列。'
  },
  {
    id: 'static_6_022',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Transformer中注意力权重的计算使用什么函数归一化？',
    options: [
      'Softmax',
      'Sigmoid',
      'Tanh',
      'ReLU'
    ],
    correctAnswer: 'A',
    explanation: 'Transformer中注意力权重的计算使用Softmax函数归一化。'
  },
  {
    id: 'static_6_023',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: '大模型训练中的"缩放定律"描述了什么关系？',
    options: [
      '模型规模与性能的关系',
      '学习率与收敛速度的关系',
      '数据量与过拟合的关系',
      '批量大小与训练速度的关系'
    ],
    correctAnswer: 'A',
    explanation: '大模型训练中的"缩放定律"描述了模型规模与性能的关系。'
  },
  {
    id: 'static_6_024',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: 'Transformer Decoder中的掩码自注意力用于：',
    options: [
      '防止看到未来信息',
      '提高计算效率',
      '减少参数数量',
      '增强模型容量'
    ],
    correctAnswer: 'A',
    explanation: 'Transformer Decoder中的掩码自注意力用于防止看到未来信息。'
  },
  {
    id: 'static_6_025',
    chapterId: 6,
    type: QuestionType.SINGLE,
    content: '大模型应用中的"提示工程"是指：',
    options: [
      '设计有效的输入提示',
      '调整模型参数',
      '增加训练数据',
      '优化模型架构'
    ],
    correctAnswer: 'A',
    explanation: '大模型应用中的"提示工程"是指设计有效的输入提示。'
  },

  // 多选题（15题）
  {
    id: 'static_6_026',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: 'Transformer的主要组成部分包括：',
    options: [
      '编码器',
      '解码器',
      '注意力机制',
      '前馈网络'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'Transformer的主要组成部分包括编码器、解码器、注意力机制、前馈网络。'
  },
  {
    id: 'static_6_027',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: 'Self-Attention中的三个核心向量是：',
    options: [
      'Query',
      'Key',
      'Value',
      'Weight'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Self-Attention中的三个核心向量是Query、Key、Value。'
  },
  {
    id: 'static_6_028',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: 'Transformer相比RNN的优势包括：',
    options: [
      '并行计算能力',
      '长距离依赖建模',
      '训练稳定性',
      '参数效率'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Transformer相比RNN的优势包括并行计算能力、长距离依赖建模、训练稳定性。'
  },
  {
    id: 'static_6_029',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: '大模型的典型特征包括：',
    options: [
      '海量参数',
      '大规模训练数据',
      '高算力需求',
      '强大泛化能力'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '大模型的典型特征包括海量参数、大规模训练数据、高算力需求、强大泛化能力。'
  },
  {
    id: 'static_6_030',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: 'BERT的预训练任务包括：',
    options: [
      '掩码语言模型',
      '下一句预测',
      '文本分类',
      '机器翻译'
    ],
    correctAnswer: ['A', 'B'],
    explanation: 'BERT的预训练任务包括掩码语言模型、下一句预测。'
  },
  {
    id: 'static_6_031',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: 'GPT系列模型的特点包括：',
    options: [
      '自回归生成',
      'Decoder-only架构',
      '大规模预训练',
      '双向上下文理解'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'GPT系列模型的特点包括自回归生成、Decoder-only架构、大规模预训练。'
  },
  {
    id: 'static_6_032',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: '大模型的训练挑战包括：',
    options: [
      '算力需求巨大',
      '数据收集困难',
      '训练不稳定',
      '内存限制'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '大模型的训练挑战包括算力需求巨大、数据收集困难、训练不稳定、内存限制。'
  },
  {
    id: 'static_6_033',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: 'Transformer中的注意力机制类型包括：',
    options: [
      '自注意力',
      '交叉注意力',
      '多头注意力',
      '单头注意力'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Transformer中的注意力机制类型包括自注意力、交叉注意力、多头注意力。'
  },
  {
    id: 'static_6_034',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: '大模型的应用领域包括：',
    options: [
      '自然语言处理',
      '代码生成',
      '多模态理解',
      '科学计算'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '大模型的应用领域包括自然语言处理、代码生成、多模态理解、科学计算。'
  },
  {
    id: 'static_6_035',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: '大模型微调方法包括：',
    options: [
      '全参数微调',
      '适配器微调',
      '提示微调',
      '前缀微调'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '大模型微调方法包括全参数微调、适配器微调、提示微调、前缀微调。'
  },
  {
    id: 'static_6_036',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: 'Transformer的优化技术包括：',
    options: [
      '残差连接',
      '层归一化',
      '注意力掩码',
      '位置编码'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'Transformer的优化技术包括残差连接、层归一化、注意力掩码、位置编码。'
  },
  {
    id: 'static_6_037',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: '大模型的风险和挑战包括：',
    options: [
      '偏见和公平性',
      '事实准确性',
      '安全性',
      '环境影响'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '大模型的风险和挑战包括偏见和公平性、事实准确性、安全性、环境影响。'
  },
  {
    id: 'static_6_038',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: '注意力机制的计算步骤包括：',
    options: [
      'Query-Key相似度计算',
      'Softmax归一化',
      '加权求和',
      '卷积操作'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '注意力机制的计算步骤包括Query-Key相似度计算、Softmax归一化、加权求和。'
  },
  {
    id: 'static_6_039',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: '大模型涌现的典型能力包括：',
    options: [
      '上下文学习',
      '思维链推理',
      '指令跟随',
      '代码生成'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '大模型涌现的典型能力包括上下文学习、思维链推理、指令跟随、代码生成。'
  },
  {
    id: 'static_6_040',
    chapterId: 6,
    type: QuestionType.MULTIPLE,
    content: 'Transformer在计算注意力时的缩放因子作用是：',
    options: [
      '稳定梯度',
      '防止softmax饱和',
      '加速收敛',
      '减少过拟合'
    ],
    correctAnswer: ['A', 'B'],
    explanation: 'Transformer在计算注意力时的缩放因子作用是稳定梯度、防止softmax饱和。'
  },

  // 判断题（15题）
  {
    id: 'static_6_041',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: 'Transformer完全基于注意力机制，没有使用任何循环或卷积操作。',
    correctAnswer: 'true',
    explanation: 'Transformer完全基于注意力机制，没有使用任何循环或卷积操作。'
  },
  {
    id: 'static_6_042',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: 'Self-Attention机制可以让每个位置直接关注序列中的所有位置。',
    correctAnswer: 'true',
    explanation: 'Self-Attention机制可以让每个位置直接关注序列中的所有位置。'
  },
  {
    id: 'static_6_043',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: 'Transformer中的位置编码是可学习的参数。',
    correctAnswer: 'false',
    explanation: 'Transformer中的位置编码通常是固定的正弦余弦函数，而不是可学习的参数。虽然有些变体使用可学习的位置编码，但原始Transformer论文使用的是固定的正弦余弦位置编码。'
  },
  {
    id: 'static_6_044',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: 'BERT是自回归模型，适合文本生成任务。',
    correctAnswer: 'false',
    explanation: 'BERT不是自回归模型，而是自编码模型。BERT通过掩码语言模型进行预训练，更适合理解任务而非生成任务，文本生成通常使用GPT等自回归模型。'
  },
  {
    id: 'static_6_045',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: 'GPT系列模型是自回归模型，适合文本生成任务。',
    correctAnswer: 'true',
    explanation: 'GPT系列模型是自回归模型，适合文本生成任务。'
  },
  {
    id: 'static_6_046',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: '大模型越大越好，参数量增加总是能提高性能。',
    correctAnswer: 'false',
    explanation: '大模型并非越大越好，参数量增加并不总是能提高性能。存在收益递减现象，且大模型面临计算成本、推理延迟、部署难度等挑战，需要权衡模型规模与实际需求。'
  },
  {
    id: 'static_6_047',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: '思维链提示通过提供推理步骤来提升大模型的推理能力。',
    correctAnswer: 'true',
    explanation: '思维链提示通过提供推理步骤来提升大模型的推理能力。'
  },
  {
    id: 'static_6_048',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: 'Transformer的训练可以完全并行化，没有序列依赖。',
    correctAnswer: 'true',
    explanation: 'Transformer的训练可以完全并行化，没有序列依赖。'
  },
  {
    id: 'static_6_049',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: '多头注意力通过将注意力分配到多个子空间来捕捉不同类型的信息。',
    correctAnswer: 'true',
    explanation: '多头注意力通过将注意力分配到多个子空间来捕捉不同类型的信息。'
  },
  {
    id: 'static_6_050',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: '大模型的预训练通常需要数千个GPU/TPU和数月时间。',
    correctAnswer: 'true',
    explanation: '大模型的预训练通常需要数千个GPU/TPU和数月时间。'
  },
  {
    id: 'static_6_051',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: '位置编码使得Transformer能够处理不同长度的序列。',
    correctAnswer: 'true',
    explanation: '位置编码使得Transformer能够处理不同长度的序列。'
  },
  {
    id: 'static_6_052',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: 'BERT的掩码语言模型任务会随机掩盖输入中的一些token。',
    correctAnswer: 'true',
    explanation: 'BERT的掩码语言模型任务会随机掩盖输入中的一些token。'
  },
  {
    id: 'static_6_053',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: '大模型的"涌现能力"是模型设计时预设的功能。',
    correctAnswer: 'false',
    explanation: '大模型的"涌现能力"不是模型设计时预设的功能，而是当模型规模达到一定阈值时自然出现的能力。这些能力（如推理、代码生成等）并非通过特定设计实现，而是规模效应的结果。'
  },
  {
    id: 'static_6_054',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: 'Transformer中的前馈网络在每个位置独立作用。',
    correctAnswer: 'true',
    explanation: 'Transformer中的前馈网络在每个位置独立作用。'
  },
  {
    id: 'static_6_055',
    chapterId: 6,
    type: QuestionType.TRUE_FALSE,
    content: '大模型可以通过提示工程而不需要微调来适应新任务。',
    correctAnswer: 'true',
    explanation: '大模型可以通过提示工程而不需要微调来适应新任务。'
  },

  // 填空题（15题）
  {
    id: 'static_6_056',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: 'Transformer模型完全基于 __________ 机制，摒弃了循环和卷积结构。',
    correctAnswer: '注意力',
    explanation: 'Transformer模型完全基于注意力机制，摒弃了循环和卷积结构。'
  },
  {
    id: 'static_6_057',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: 'Self-Attention通过计算 __________、Key和Value向量的相似度来获取注意力权重。',
    correctAnswer: 'Query',
    explanation: 'Self-Attention通过计算Query、Key和Value向量的相似度来获取注意力权重。'
  },
  {
    id: 'static_6_058',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: 'Transformer使用 __________ 编码来为模型提供序列位置信息。',
    correctAnswer: '位置',
    explanation: 'Transformer使用位置编码来为模型提供序列位置信息。'
  },
  {
    id: 'static_6_059',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: 'BERT采用 __________ 训练方式，同时利用左右上下文信息。',
    correctAnswer: '双向',
    explanation: 'BERT采用双向训练方式，同时利用左右上下文信息。'
  },
  {
    id: 'static_6_060',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: 'GPT系列采用 __________ 架构，逐词生成文本。',
    correctAnswer: '自回归',
    explanation: 'GPT系列采用自回归架构，逐词生成文本。'
  },
  {
    id: 'static_6_061',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: '大模型的 __________ 能力指模型规模达到临界值后出现的新能力。',
    correctAnswer: '涌现',
    explanation: '大模型的涌现能力指模型规模达到临界值后出现的新能力。'
  },
  {
    id: 'static_6_062',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: 'Transformer中的 __________ 注意力用于防止解码器看到未来信息。',
    correctAnswer: '掩码',
    explanation: 'Transformer中的掩码注意力用于防止解码器看到未来信息。'
  },
  {
    id: 'static_6_063',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: 'MoE架构通过组合多个 __________ 来提高模型容量。',
    correctAnswer: '专家',
    explanation: 'MoE架构通过组合多个专家来提高模型容量。'
  },
  {
    id: 'static_6_064',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: '思维链提示通过提供 __________ 推理步骤来提升模型表现。',
    correctAnswer: '逐步',
    explanation: '思维链提示通过提供逐步推理步骤来提升模型表现。'
  },
  {
    id: 'static_6_065',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: 'Transformer通过 __________ 连接来缓解梯度消失问题。',
    correctAnswer: '残差',
    explanation: 'Transformer通过残差连接来缓解梯度消失问题。'
  },
  {
    id: 'static_6_066',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: '多头注意力将输入映射到多个 __________ 空间来捕捉不同特征。',
    correctAnswer: '子',
    explanation: '多头注意力将输入映射到多个子空间来捕捉不同特征。'
  },
  {
    id: 'static_6_067',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: 'BERT的预训练任务包括掩码语言模型和 __________ 预测。',
    correctAnswer: '下一句',
    explanation: 'BERT的预训练任务包括掩码语言模型和下一句预测。'
  },
  {
    id: 'static_6_068',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: '大模型训练通常采用数据并行、模型并行和 __________ 并行。',
    correctAnswer: '流水线',
    explanation: '大模型训练通常采用数据并行、模型并行和流水线并行。'
  },
  {
    id: 'static_6_069',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: 'Transformer中的前馈网络包含两个 __________ 变换和一个激活函数。',
    correctAnswer: '线性',
    explanation: 'Transformer中的前馈网络包含两个线性变换和一个激活函数。'
  },
  {
    id: 'static_6_070',
    chapterId: 6,
    type: QuestionType.FILL_BLANK,
    content: '位置编码使用不同频率的 __________ 函数来编码位置信息。',
    correctAnswer: '正弦余弦',
    explanation: '位置编码使用不同频率的正弦余弦函数来编码位置信息。'
  }
];

export default chapter6Questions;