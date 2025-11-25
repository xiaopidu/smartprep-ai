import { Question, QuestionType } from '../../types';

// 第4章卷积神经网络CNN题库 - 严格按照md文件内容生成
export const chapter4Questions: Question[] = [
  // 单选题（25题）
  {
    id: 'static_4_001',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '卷积神经网络主要受到什么研究的启发？',
    options: [
      '图灵测试',
      '猫脑皮层研究',
      '行为心理学',
      '符号逻辑'
    ],
    correctAnswer: 'B',
    explanation: '卷积神经网络主要受到猫脑皮层研究的启发。'
  },
  {
    id: 'static_4_002',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: 'CNN的核心思想"局部感知"是指什么？',
    options: [
      '每个神经元感知全局图像',
      '每个神经元只感知局部区域',
      '所有神经元共享权重',
      '使用池化操作'
    ],
    correctAnswer: 'B',
    explanation: 'CNN的核心思想"局部感知"是指每个神经元只感知局部区域。'
  },
  {
    id: 'static_4_003',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: 'CNN中的"参数共享"主要作用是什么？',
    options: [
      '增加模型复杂度',
      '大幅减少参数数量',
      '提高特征多样性',
      '增强模型解释性'
    ],
    correctAnswer: 'B',
    explanation: 'CNN中的"参数共享"主要作用是大幅减少参数数量。'
  },
  {
    id: 'static_4_004',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '卷积层的主要作用是什么？',
    options: [
      '降低特征图尺寸',
      '提取图像特征',
      '进行分类决策',
      '增加通道数量'
    ],
    correctAnswer: 'B',
    explanation: '卷积层的主要作用是提取图像特征。'
  },
  {
    id: 'static_4_005',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '一个3×3卷积核在5×5输入特征图上进行卷积，步长为1，无填充，输出特征图尺寸为？',
    options: [
      '3×3',
      '5×5',
      '7×7',
      '1×1'
    ],
    correctAnswer: 'A',
    explanation: '输出特征图尺寸为3×3。'
  },
  {
    id: 'static_4_006',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '卷积操作的本质是什么？',
    options: [
      '矩阵加法',
      '矩阵乘法',
      '内积运算',
      '外积运算'
    ],
    correctAnswer: 'C',
    explanation: '卷积操作的本质是内积运算。'
  },
  {
    id: 'static_4_007',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: 'ReLU激活函数在CNN中的主要作用是？',
    options: [
      '引入非线性',
      '降低维度',
      '增加参数',
      '加速收敛'
    ],
    correctAnswer: 'A',
    explanation: 'ReLU激活函数在CNN中的主要作用是引入非线性。'
  },
  {
    id: 'static_4_008',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '最大池化层的主要作用是？',
    options: [
      '特征提取',
      '降维和保持特征不变性',
      '增加模型深度',
      '提高计算精度'
    ],
    correctAnswer: 'B',
    explanation: '最大池化层的主要作用是降维和保持特征不变性。'
  },
  {
    id: 'static_4_009',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '平均池化与最大池化的主要区别在于？',
    options: [
      '计算区域内的平均值而非最大值',
      '使用更大的池化窗口',
      '只能用于特定层',
      '需要更多参数'
    ],
    correctAnswer: 'A',
    explanation: '平均池化与最大池化的主要区别在于计算区域内的平均值而非最大值。'
  },
  {
    id: 'static_4_010',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '全连接层在CNN中的作用是？',
    options: [
      '特征提取',
      '空间降维',
      '分类决策',
      '通道调整'
    ],
    correctAnswer: 'C',
    explanation: '全连接层在CNN中的作用是分类决策。'
  },
  {
    id: 'static_4_011',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: 'CNN中，特征图的通道数对应什么？',
    options: [
      '图像宽度',
      '图像高度',
      '卷积核数量',
      '池化窗口大小'
    ],
    correctAnswer: 'C',
    explanation: 'CNN中，特征图的通道数对应卷积核数量。'
  },
  {
    id: 'static_4_012',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '步长（Stride）为2的卷积操作会使输出特征图尺寸如何变化？',
    options: [
      '减半',
      '加倍',
      '不变',
      '减少1/4'
    ],
    correctAnswer: 'A',
    explanation: '步长（Stride）为2的卷积操作会使输出特征图尺寸减半。'
  },
  {
    id: 'static_4_013',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '填充（Padding）的主要作用是什么？',
    options: [
      '加速计算',
      '保持特征图尺寸',
      '增加参数',
      '提高准确率'
    ],
    correctAnswer: 'B',
    explanation: '填充（Padding）的主要作用是保持特征图尺寸。'
  },
  {
    id: 'static_4_014',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '多通道卷积中，输入通道数为3，使用16个卷积核，输出通道数为？',
    options: [
      '3',
      '16',
      '48',
      '19'
    ],
    correctAnswer: 'B',
    explanation: '输出通道数为16。'
  },
  {
    id: 'static_4_015',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '深度可分离卷积相比标准卷积的主要优势是？',
    options: [
      '准确率更高',
      '参数数量更少',
      '训练速度更慢',
      '模型更深'
    ],
    correctAnswer: 'B',
    explanation: '深度可分离卷积相比标准卷积的主要优势是参数数量更少。'
  },
  {
    id: 'static_4_016',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '1×1卷积的主要作用是？',
    options: [
      '特征降维和升维',
      '空间特征提取',
      '替代池化层',
      '增加感受野'
    ],
    correctAnswer: 'A',
    explanation: '1×1卷积的主要作用是特征降维和升维。'
  },
  {
    id: 'static_4_017',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '感受野（Receptive Field）表示什么？',
    options: [
      '卷积核大小',
      '输入图像对应区域大小',
      '输出特征图尺寸',
      '池化窗口大小'
    ],
    correctAnswer: 'B',
    explanation: '感受野（Receptive Field）表示输入图像对应区域大小。'
  },
  {
    id: 'static_4_018',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: 'CNN中，随着网络深度增加，感受野会如何变化？',
    options: [
      '变小',
      '变大',
      '不变',
      '随机变化'
    ],
    correctAnswer: 'B',
    explanation: 'CNN中，随着网络深度增加，感受野会变大。'
  },
  {
    id: 'static_4_019',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '转置卷积（Transposed Convolution）主要用于什么任务？',
    options: [
      '图像分类',
      '目标检测',
      '图像分割和生成',
      '特征提取'
    ],
    correctAnswer: 'C',
    explanation: '转置卷积（Transposed Convolution）主要用于图像分割和生成任务。'
  },
  {
    id: 'static_4_020',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '空洞卷积（Dilated Convolution）的主要作用是？',
    options: [
      '减少计算量',
      '增大感受野而不增加参数',
      '提高准确率',
      '加速收敛'
    ],
    correctAnswer: 'B',
    explanation: '空洞卷积（Dilated Convolution）的主要作用是增大感受野而不增加参数。'
  },
  {
    id: 'static_4_021',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: 'CNN在训练时通常使用什么优化器？',
    options: [
      '仅SGD',
      '仅Adam',
      'SGD或Adam',
      '仅Adagrad'
    ],
    correctAnswer: 'C',
    explanation: 'CNN在训练时通常使用SGD或Adam优化器。'
  },
  {
    id: 'static_4_022',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '批归一化（Batch Normalization）在CNN中的主要作用是？',
    options: [
      '加速训练和提高稳定性',
      '增加模型深度',
      '替代激活函数',
      '减少内存使用'
    ],
    correctAnswer: 'A',
    explanation: '批归一化（Batch Normalization）在CNN中的主要作用是加速训练和提高稳定性。'
  },
  {
    id: 'static_4_023',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: '残差网络（ResNet）解决的主要问题是？',
    options: [
      '梯度消失',
      '过拟合',
      '计算复杂',
      '内存不足'
    ],
    correctAnswer: 'A',
    explanation: '残差网络（ResNet）解决的主要问题是梯度消失。'
  },
  {
    id: 'static_4_024',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: 'LeNet-5是早期成功的CNN架构，主要用于什么任务？',
    options: [
      '图像分类',
      '目标检测',
      '语义分割',
      '图像生成'
    ],
    correctAnswer: 'A',
    explanation: 'LeNet-5是早期成功的CNN架构，主要用于图像分类任务。'
  },
  {
    id: 'static_4_025',
    chapterId: 4,
    type: QuestionType.SINGLE,
    content: 'CNN在计算机视觉中的优势不包括？',
    options: [
      '平移不变性',
      '参数共享',
      '端到端学习',
      '对旋转非常鲁棒'
    ],
    correctAnswer: 'D',
    explanation: 'CNN在计算机视觉中的优势不包括对旋转非常鲁棒。'
  },

  // 多选题（15题）
  {
    id: 'static_4_026',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: 'CNN的基本组件包括：',
    options: [
      '卷积层',
      '池化层',
      '全连接层',
      '循环层'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'CNN的基本组件包括卷积层、池化层、全连接层。'
  },
  {
    id: 'static_4_027',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: '卷积层的主要参数包括：',
    options: [
      '卷积核大小',
      '步长',
      '填充',
      '学习率'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '卷积层的主要参数包括卷积核大小、步长、填充。'
  },
  {
    id: 'static_4_028',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: '池化层的主要作用包括：',
    options: [
      '降维',
      '保持平移不变性',
      '减少参数',
      '引入非线性'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '池化层的主要作用包括降维、保持平移不变性、减少参数。'
  },
  {
    id: 'static_4_029',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: 'CNN中常用的激活函数包括：',
    options: [
      'ReLU',
      'Leaky ReLU',
      'Sigmoid',
      'Tanh'
    ],
    correctAnswer: ['A', 'B'],
    explanation: 'CNN中常用的激活函数包括ReLU、Leaky ReLU。'
  },
  {
    id: 'static_4_030',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: 'CNN的优势包括：',
    options: [
      '参数共享',
      '局部连接',
      '平移不变性',
      '对输入尺寸不敏感'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'CNN的优势包括参数共享、局部连接、平移不变性。'
  },
  {
    id: 'static_4_031',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: 'CNN的应用领域包括：',
    options: [
      '图像分类',
      '目标检测',
      '语义分割',
      '机器翻译'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'CNN的应用领域包括图像分类、目标检测、语义分割。'
  },
  {
    id: 'static_4_032',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: '经典的CNN架构包括：',
    options: [
      'LeNet',
      'AlexNet',
      'ResNet',
      'LSTM'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '经典的CNN架构包括LeNet、AlexNet、ResNet。'
  },
  {
    id: 'static_4_033',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: '提高CNN性能的技术包括：',
    options: [
      '数据增强',
      '批归一化',
      '残差连接',
      '注意力机制'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '提高CNN性能的技术包括数据增强、批归一化、残差连接、注意力机制。'
  },
  {
    id: 'static_4_034',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: 'CNN中的正则化方法包括：',
    options: [
      'Dropout',
      'L2正则化',
      '早停法',
      '数据增强'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'CNN中的正则化方法包括Dropout、L2正则化、早停法、数据增强。'
  },
  {
    id: 'static_4_035',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: '池化操作的超参数包括：',
    options: [
      '池化窗口大小',
      '步长',
      '填充',
      '学习率'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '池化操作的超参数包括池化窗口大小、步长、填充。'
  },
  {
    id: 'static_4_036',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: 'CNN训练中可能遇到的问题包括：',
    options: [
      '过拟合',
      '梯度消失',
      '计算资源不足',
      '数据不平衡'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'CNN训练中可能遇到的问题包括过拟合、梯度消失、计算资源不足、数据不平衡。'
  },
  {
    id: 'static_4_037',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: 'CNN在自然语言处理中的应用包括：',
    options: [
      '文本分类',
      '情感分析',
      '机器翻译',
      '语音识别'
    ],
    correctAnswer: ['A', 'B'],
    explanation: 'CNN在自然语言处理中的应用包括文本分类、情感分析。'
  },
  {
    id: 'static_4_038',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: '目标检测中常用的基于CNN的算法包括：',
    options: [
      'YOLO',
      'SSD',
      'Faster R-CNN',
      'K-Means'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '目标检测中常用的基于CNN的算法包括YOLO、SSD、Faster R-CNN。'
  },
  {
    id: 'static_4_039',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: '语义分割中常用的基于CNN的架构包括：',
    options: [
      'U-Net',
      'FCN',
      'SegNet',
      'Transformer'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '语义分割中常用的基于CNN的架构包括U-Net、FCN、SegNet。'
  },
  {
    id: 'static_4_040',
    chapterId: 4,
    type: QuestionType.MULTIPLE,
    content: 'CNN的发展趋势包括：',
    options: [
      '更深的网络',
      '自动化架构搜索',
      '轻量化设计',
      '多模态融合'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'CNN的发展趋势包括更深的网络、自动化架构搜索、轻量化设计、多模态融合。'
  },

  // 判断题（15题）
  {
    id: 'static_4_041',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: 'CNN只能处理图像数据，不能处理其他类型的数据。',
    correctAnswer: 'false',
    explanation: 'CNN虽然最初是为图像处理设计的，但也可以处理其他类型的数据，如文本、语音和时间序列数据。'
  },
  {
    id: 'static_4_042',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '卷积核的权重在训练过程中是固定不变的。',
    correctAnswer: 'false',
    explanation: '卷积核的权重在训练过程中是通过反向传播算法进行学习和更新的，不是固定不变的。'
  },
  {
    id: 'static_4_043',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '池化层有需要学习的参数。',
    correctAnswer: 'false',
    explanation: '池化层没有需要学习的参数，它只是对输入特征图进行固定的下采样操作（如最大池化或平均池化）。'
  },
  {
    id: 'static_4_044',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '使用更大的卷积核总是能获得更好的性能。',
    correctAnswer: 'false',
    explanation: '使用更大的卷积核并不总是能获得更好的性能，过大的卷积核可能增加计算量、导致过拟合，现代CNN通常使用小卷积核（如3×3）的堆叠来获得更好的效果。'
  },
  {
    id: 'static_4_045',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '1×1卷积可以用于特征降维和升维。',
    correctAnswer: 'true',
    explanation: '1×1卷积可以用于特征降维和升维。'
  },
  {
    id: 'static_4_046',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '全局平均池化可以替代全连接层。',
    correctAnswer: 'true',
    explanation: '全局平均池化可以替代全连接层。'
  },
  {
    id: 'static_4_047',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: 'CNN对输入图像的旋转具有天然不变性。',
    correctAnswer: 'false',
    explanation: 'CNN对输入图像的旋转不具有天然不变性。标准的CNN对平移具有不变性，但对旋转和尺度变化需要通过学习获得，或者通过数据增强来增强鲁棒性。'
  },
  {
    id: 'static_4_048',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '深度可分离卷积在移动端设备上很有优势。',
    correctAnswer: 'true',
    explanation: '深度可分离卷积在移动端设备上很有优势。'
  },
  {
    id: 'static_4_049',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '转置卷积可以精确地恢复输入特征图的尺寸。',
    correctAnswer: 'true',
    explanation: '转置卷积可以精确地恢复输入特征图的尺寸。'
  },
  {
    id: 'static_4_050',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '空洞卷积会引入额外的参数。',
    correctAnswer: 'false',
    explanation: '空洞卷积不会引入额外的参数。它通过扩大卷积核的感受野而不增加参数数量，通过在标准卷积核中插入零值来扩大感受野。'
  },
  {
    id: 'static_4_051',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '批归一化应该在激活函数之前进行。',
    correctAnswer: 'true',
    explanation: '批归一化应该在激活函数之前进行。'
  },
  {
    id: 'static_4_052',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '残差连接可以缓解深度网络的梯度消失问题。',
    correctAnswer: 'true',
    explanation: '残差连接可以缓解深度网络的梯度消失问题。'
  },
  {
    id: 'static_4_053',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: 'CNN在训练时需要大量的标注数据。',
    correctAnswer: 'true',
    explanation: 'CNN在训练时需要大量的标注数据。'
  },
  {
    id: 'static_4_054',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: '预训练的CNN模型可以通过迁移学习应用到新任务。',
    correctAnswer: 'true',
    explanation: '预训练的CNN模型可以通过迁移学习应用到新任务。'
  },
  {
    id: 'static_4_055',
    chapterId: 4,
    type: QuestionType.TRUE_FALSE,
    content: 'CNN的可解释性比传统机器学习算法更好。',
    correctAnswer: 'false',
    explanation: 'CNN的可解释性通常比传统机器学习算法更差。CNN作为深度神经网络，其决策过程相对复杂和黑盒，而传统算法如决策树、线性模型等通常具有更好的可解释性。'
  },

  // 填空题（15题）
  {
    id: 'static_4_056',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: 'CNN通过 __________ 和参数共享来大幅减少参数数量。',
    correctAnswer: '局部感知',
    explanation: 'CNN通过局部感知和参数共享来大幅减少参数数量。'
  },
  {
    id: 'static_4_057',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '卷积操作实际上是输入特征图与卷积核之间的 __________ 运算。',
    correctAnswer: '内积',
    explanation: '卷积操作实际上是输入特征图与卷积核之间的内积运算。'
  },
  {
    id: 'static_4_058',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '池化层通过 __________ 或平均操作来降低特征图尺寸。',
    correctAnswer: '最大',
    explanation: '池化层通过最大或平均操作来降低特征图尺寸。'
  },
  {
    id: 'static_4_059',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '在PyTorch中，二维卷积层通过 __________ 类实现。',
    correctAnswer: 'nn.Conv2d',
    explanation: '在PyTorch中，二维卷积层通过nn.Conv2d类实现。'
  },
  {
    id: 'static_4_060',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '特征图的通道数等于该层使用的 __________ 数量。',
    correctAnswer: '卷积核',
    explanation: '特征图的通道数等于该层使用的卷积核数量。'
  },
  {
    id: 'static_4_061',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '步长（Stride）表示卷积核在输入特征图上移动的 __________。',
    correctAnswer: '步长',
    explanation: '步长（Stride）表示卷积核在输入特征图上移动的步长。'
  },
  {
    id: 'static_4_062',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '填充（Padding）通过在输入特征图周围添加 __________ 来保持尺寸。',
    correctAnswer: '零值',
    explanation: '填充（Padding）通过在输入特征图周围添加零值来保持尺寸。'
  },
  {
    id: 'static_4_063',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '感受野表示输出特征图上的一个像素点对应输入图像上的 __________。',
    correctAnswer: '区域大小',
    explanation: '感受野表示输出特征图上的一个像素点对应输入图像上的区域大小。'
  },
  {
    id: 'static_4_064',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '残差网络通过 __________ 连接来训练更深的网络。',
    correctAnswer: '跳跃',
    explanation: '残差网络通过跳跃连接来训练更深的网络。'
  },
  {
    id: 'static_4_065',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '批归一化通过规范化每层的 __________ 分布来加速训练。',
    correctAnswer: '输入',
    explanation: '批归一化通过规范化每层的输入分布来加速训练。'
  },
  {
    id: 'static_4_066',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '全局平均池化将每个特征图 __________ 为一个值。',
    correctAnswer: '平均',
    explanation: '全局平均池化将每个特征图平均为一个值。'
  },
  {
    id: 'static_4_067',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '深度可分离卷积将标准卷积分解为 __________ 卷积和逐点卷积。',
    correctAnswer: '深度',
    explanation: '深度可分离卷积将标准卷积分解为深度卷积和逐点卷积。'
  },
  {
    id: 'static_4_068',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '转置卷积常用于 __________ 任务中恢复空间分辨率。',
    correctAnswer: '图像分割',
    explanation: '转置卷积常用于图像分割任务中恢复空间分辨率。'
  },
  {
    id: 'static_4_069',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '空洞卷积通过引入 __________ 来增大感受野。',
    correctAnswer: '膨胀率',
    explanation: '空洞卷积通过引入膨胀率来增大感受野。'
  },
  {
    id: 'static_4_070',
    chapterId: 4,
    type: QuestionType.FILL_BLANK,
    content: '在ImageNet数据集上预训练的CNN模型可以通过 __________ 学习迁移到新任务。',
    correctAnswer: '迁移',
    explanation: '在ImageNet数据集上预训练的CNN模型可以通过迁移学习迁移到新任务。'
  }
];

export default chapter4Questions;