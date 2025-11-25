import { Question, QuestionType } from '../../types';

// 第3章深度学习基础题库 - 严格按照md文件内容生成
export const chapter3Questions: Question[] = [
  // 单选题（25题）
  {
    id: 'static_3_001',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '感知机是由谁在1957年发明的？',
    options: [
      '艾伦·图灵',
      '约翰·麦卡锡',
      '弗兰克·罗森布拉特',
      '马文·闵斯基'
    ],
    correctAnswer: 'C',
    explanation: '感知机是由弗兰克·罗森布拉特在1957年发明的。'
  },
  {
    id: 'static_3_002',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '单层感知机无法解决下列哪个问题？',
    options: [
      '与门（AND）',
      '或门（OR）',
      '异或门（XOR）',
      '与非门（NAND）'
    ],
    correctAnswer: 'C',
    explanation: '单层感知机无法解决异或门（XOR）问题。'
  },
  {
    id: 'static_3_003',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '使用多少个逻辑门可以组合实现异或门？',
    options: [
      '1个',
      '2个',
      '3个',
      '4个'
    ],
    correctAnswer: 'C',
    explanation: '使用3个逻辑门可以组合实现异或门。'
  },
  {
    id: 'static_3_004',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '多层感知机至少需要多少层才能解决异或问题？',
    options: [
      '1层',
      '2层',
      '3层',
      '4层'
    ],
    correctAnswer: 'B',
    explanation: '多层感知机至少需要2层才能解决异或问题。'
  },
  {
    id: 'static_3_005',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '深度神经网络非线性能力的主要来源是？',
    options: [
      '增加层数',
      '使用非线性激活函数',
      '增加神经元数量',
      '使用更大的学习率'
    ],
    correctAnswer: 'B',
    explanation: '深度神经网络非线性能力的主要来源是使用非线性激活函数。'
  },
  {
    id: 'static_3_006',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '下列哪个不是非线性激活函数？',
    options: [
      'Sigmoid',
      'ReLU',
      'Tanh',
      'Linear'
    ],
    correctAnswer: 'D',
    explanation: 'Linear不是非线性激活函数。'
  },
  {
    id: 'static_3_007',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: 'Sigmoid函数将输入映射到哪个区间？',
    options: [
      '(0,1)',
      '(-1,1)',
      '(0,+∞)',
      '(-∞,+∞)'
    ],
    correctAnswer: 'A',
    explanation: 'Sigmoid函数将输入映射到(0,1)区间。'
  },
  {
    id: 'static_3_008',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: 'Tanh函数将输入映射到哪个区间？',
    options: [
      '(0,1)',
      '(-1,1)',
      '(0,+∞)',
      '(-∞,+∞)'
    ],
    correctAnswer: 'B',
    explanation: 'Tanh函数将输入映射到(-1,1)区间。'
  },
  {
    id: 'static_3_009',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: 'ReLU函数的数学表达式是？',
    options: [
      'max(0,x)',
      '1/(1+e^(-x))',
      '(e^x - e^(-x))/(e^x + e^(-x))',
      'log(1 + e^x)'
    ],
    correctAnswer: 'A',
    explanation: 'ReLU函数的数学表达式是max(0,x)。'
  },
  {
    id: 'static_3_010',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: 'Leaky ReLU相比ReLU的主要改进是？',
    options: [
      '计算更快',
      '给所有负值一个非零斜率',
      '输出范围更大',
      '更容易求导'
    ],
    correctAnswer: 'B',
    explanation: 'Leaky ReLU相比ReLU的主要改进是给所有负值一个非零斜率。'
  },
  {
    id: 'static_3_011',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: 'Softmax函数主要用于什么类型的任务？',
    options: [
      '二分类',
      '多分类',
      '回归',
      '聚类'
    ],
    correctAnswer: 'B',
    explanation: 'Softmax函数主要用于多分类任务。'
  },
  {
    id: 'static_3_012',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '神经网络中，每个神经元接收前一层所有神经元加权和的函数称为？',
    options: [
      '损失函数',
      '激活函数',
      '优化函数',
      '目标函数'
    ],
    correctAnswer: 'B',
    explanation: '神经网络中，每个神经元接收前一层所有神经元加权和的函数称为激活函数。'
  },
  {
    id: 'static_3_013',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '均方误差损失函数主要用于什么任务？',
    options: [
      '分类任务',
      '回归任务',
      '聚类任务',
      '降维任务'
    ],
    correctAnswer: 'B',
    explanation: '均方误差损失函数主要用于回归任务。'
  },
  {
    id: 'static_3_014',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '交叉熵损失函数主要用于什么任务？',
    options: [
      '分类任务',
      '回归任务',
      '聚类任务',
      '降维任务'
    ],
    correctAnswer: 'A',
    explanation: '交叉熵损失函数主要用于分类任务。'
  },
  {
    id: 'static_3_015',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '梯度下降法中，梯度的方向表示什么？',
    options: [
      '函数值下降最快的方向',
      '函数值上升最快的方向',
      '函数值不变的方向',
      '随机方向'
    ],
    correctAnswer: 'A',
    explanation: '梯度下降法中，梯度的方向表示函数值下降最快的方向。'
  },
  {
    id: 'static_3_016',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '批量梯度下降法（BGD）的主要缺点是什么？',
    options: [
      '收敛速度慢',
      '容易陷入局部最优',
      '需要手动设置学习率',
      '对噪声敏感'
    ],
    correctAnswer: 'A',
    explanation: '批量梯度下降法（BGD）的主要缺点是收敛速度慢。'
  },
  {
    id: 'static_3_017',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '随机梯度下降法（SGD）的主要缺点是什么？',
    options: [
      '收敛过程不稳定',
      '收敛速度慢',
      '内存消耗大',
      '不能并行计算'
    ],
    correctAnswer: 'A',
    explanation: '随机梯度下降法（SGD）的主要缺点是收敛过程不稳定。'
  },
  {
    id: 'static_3_018',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '小批量梯度下降法（MBGD）的批量大小通常取多少？',
    options: [
      '1',
      '32',
      '1000',
      '整个训练集'
    ],
    correctAnswer: 'B',
    explanation: '小批量梯度下降法（MBGD）的批量大小通常取32。'
  },
  {
    id: 'static_3_019',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '动量优化器中的动量系数通常取值范围是？',
    options: [
      '[0,1)',
      '[1,2)',
      '[0,2)',
      '[-1,1]'
    ],
    correctAnswer: 'A',
    explanation: '动量优化器中的动量系数通常取值范围是[0,1)。'
  },
  {
    id: 'static_3_020',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: 'Adam优化器结合了哪两种优化器的优点？',
    options: [
      'SGD和Momentum',
      'Adagrad和RMSprop',
      'SGD和Adagrad',
      'Momentum和RMSprop'
    ],
    correctAnswer: 'B',
    explanation: 'Adam优化器结合了Adagrad和RMSprop优化器的优点。'
  },
  {
    id: 'static_3_021',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: 'Adagrad优化器的主要缺点是什么？',
    options: [
      '学习率会变得非常小',
      '收敛速度太快',
      '需要手动设置学习率',
      '对噪声敏感'
    ],
    correctAnswer: 'A',
    explanation: 'Adagrad优化器的主要缺点是学习率会变得非常小。'
  },
  {
    id: 'static_3_022',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: 'L1正则化的主要作用是？',
    options: [
      '使权重更加平滑',
      '使部分权重为0',
      '防止梯度爆炸',
      '加速收敛'
    ],
    correctAnswer: 'B',
    explanation: 'L1正则化的主要作用是使部分权重为0。'
  },
  {
    id: 'static_3_023',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: 'L2正则化的主要作用是？',
    options: [
      '使权重更加接近0',
      '使部分权重为0',
      '防止梯度消失',
      '增加模型复杂度'
    ],
    correctAnswer: 'A',
    explanation: 'L2正则化的主要作用是使权重更加接近0。'
  },
  {
    id: 'static_3_024',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: 'Dropout在训练过程中随机丢弃什么？',
    options: [
      '训练样本',
      '输入特征',
      '神经元',
      '权重参数'
    ],
    correctAnswer: 'C',
    explanation: 'Dropout在训练过程中随机丢弃神经元。'
  },
  {
    id: 'static_3_025',
    chapterId: 3,
    type: QuestionType.SINGLE,
    content: '早停法（Early Stopping）根据什么来决定停止训练？',
    options: [
      '训练损失不再下降',
      '验证集损失开始上升',
      '训练时间达到限制',
      '学习率变得很小'
    ],
    correctAnswer: 'B',
    explanation: '早停法（Early Stopping）根据验证集损失开始上升来决定停止训练。'
  },

  // 多选题（15题）
  {
    id: 'static_3_026',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '深度学习相比传统机器学习的优势包括：',
    options: [
      '自动学习特征表示',
      '处理复杂模式能力更强',
      '对数据预处理要求更低',
      '可解释性更好'
    ],
    correctAnswer: ['A', 'B'],
    explanation: '深度学习相比传统机器学习的优势包括自动学习特征表示、处理复杂模式能力更强。'
  },
  {
    id: 'static_3_027',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '感知机的基本组成部分包括：',
    options: [
      '输入信号',
      '权重',
      '求和单元',
      '激活函数'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '感知机的基本组成部分包括输入信号、权重、求和单元、激活函数。'
  },
  {
    id: 'static_3_028',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '多层感知机可以解决单层感知机无法解决的问题，因为：',
    options: [
      '增加了层数',
      '使用了非线性激活函数',
      '增加了神经元数量',
      '使用了更大的数据集'
    ],
    correctAnswer: ['A', 'B'],
    explanation: '多层感知机可以解决单层感知机无法解决的问题，因为增加了层数、使用了非线性激活函数。'
  },
  {
    id: 'static_3_029',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '常见的激活函数包括：',
    options: [
      'Sigmoid',
      'Tanh',
      'ReLU',
      'Softmax'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '常见的激活函数包括Sigmoid、Tanh、ReLU、Softmax。'
  },
  {
    id: 'static_3_030',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: 'ReLU函数的优点包括：',
    options: [
      '计算简单',
      '缓解梯度消失',
      '输出范围在(0,1)',
      '处处可导'
    ],
    correctAnswer: ['A', 'B'],
    explanation: 'ReLU函数的优点包括计算简单、缓解梯度消失。'
  },
  {
    id: 'static_3_031',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: 'Sigmoid函数的缺点包括：',
    options: [
      '容易导致梯度消失',
      '输出不是零中心的',
      '计算指数较复杂',
      '收敛速度慢'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Sigmoid函数的缺点包括容易导致梯度消失、输出不是零中心的、计算指数较复杂。'
  },
  {
    id: 'static_3_032',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '深度学习中常用的损失函数包括：',
    options: [
      '均方误差',
      '交叉熵',
      '绝对值误差',
      '铰链损失'
    ],
    correctAnswer: ['A', 'B'],
    explanation: '深度学习中常用的损失函数包括均方误差、交叉熵。'
  },
  {
    id: 'static_3_033',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '梯度下降法的类型包括：',
    options: [
      '批量梯度下降',
      '随机梯度下降',
      '小批量梯度下降',
      '动量梯度下降'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '梯度下降法的类型包括批量梯度下降、随机梯度下降、小批量梯度下降。'
  },
  {
    id: 'static_3_034',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '优化器的主要目标包括：',
    options: [
      '加快收敛速度',
      '避开局部极值',
      '减少手工参数设置',
      '增加模型复杂度'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '优化器的主要目标包括加快收敛速度、避开局部极值、减少手工参数设置。'
  },
  {
    id: 'static_3_035',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '常见的优化器包括：',
    options: [
      'SGD',
      'Momentum',
      'Adam',
      'RMSprop'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '常见的优化器包括SGD、Momentum、Adam、RMSprop。'
  },
  {
    id: 'static_3_036',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '防止过拟合的方法包括：',
    options: [
      'L1/L2正则化',
      'Dropout',
      '早停法',
      '数据增强'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '防止过拟合的方法包括L1/L2正则化、Dropout、早停法、数据增强。'
  },
  {
    id: 'static_3_037',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '正则化的主要作用包括：',
    options: [
      '防止过拟合',
      '提高模型泛化能力',
      '减少模型复杂度',
      '加速训练过程'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '正则化的主要作用包括防止过拟合、提高模型泛化能力、减少模型复杂度。'
  },
  {
    id: 'static_3_038',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: 'Dropout的主要作用包括：',
    options: [
      '防止过拟合',
      '提高模型泛化能力',
      '减少神经元间的协同适应性',
      '加速训练过程'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Dropout的主要作用包括防止过拟合、提高模型泛化能力、减少神经元间的协同适应性。'
  },
  {
    id: 'static_3_039',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '神经网络训练中可能出现的问题包括：',
    options: [
      '梯度消失',
      '梯度爆炸',
      '过拟合',
      '欠拟合'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '神经网络训练中可能出现的问题包括梯度消失、梯度爆炸、过拟合、欠拟合。'
  },
  {
    id: 'static_3_040',
    chapterId: 3,
    type: QuestionType.MULTIPLE,
    content: '解决梯度消失问题的方法包括：',
    options: [
      '使用ReLU激活函数',
      '使用LSTM网络',
      '使用梯度裁剪',
      '使用合适的权重初始化'
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: '解决梯度消失问题的方法包括使用ReLU激活函数、使用LSTM网络、使用合适的权重初始化。'
  },

  // 判断题（15题）
  {
    id: 'static_3_041',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: '单层感知机可以解决任何线性可分问题。',
    correctAnswer: 'true',
    explanation: '单层感知机可以解决任何线性可分问题。'
  },
  {
    id: 'static_3_042',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: '不使用非线性激活函数的深度神经网络仍然是线性模型。',
    correctAnswer: 'true',
    explanation: '不使用非线性激活函数的深度神经网络仍然是线性模型。'
  },
  {
    id: 'static_3_043',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: 'Sigmoid函数在输入值的绝对值很大时，梯度接近于0。',
    correctAnswer: 'true',
    explanation: 'Sigmoid函数在输入值的绝对值很大时，梯度接近于0。'
  },
  {
    id: 'static_3_044',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: 'ReLU函数在负值区域的梯度为0。',
    correctAnswer: 'true',
    explanation: 'ReLU函数在负值区域的梯度为0。'
  },
  {
    id: 'static_3_045',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: 'Softmax函数将所有输出值的和约束为1。',
    correctAnswer: 'true',
    explanation: 'Softmax函数将所有输出值的和约束为1。'
  },
  {
    id: 'static_3_046',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: '损失函数衡量的是模型预测值与真实值之间的差异。',
    correctAnswer: 'true',
    explanation: '损失函数衡量的是模型预测值与真实值之间的差异。'
  },
  {
    id: 'static_3_047',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: '梯度下降法一定能找到全局最优解。',
    correctAnswer: 'false',
    explanation: '梯度下降法不一定能找到全局最优解。'
  },
  {
    id: 'static_3_048',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: '学习率越大，模型收敛速度一定越快。',
    correctAnswer: 'false',
    explanation: '学习率越大，模型收敛速度不一定越快。'
  },
  {
    id: 'static_3_049',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: '动量优化器可以加速收敛并减少震荡。',
    correctAnswer: 'true',
    explanation: '动量优化器可以加速收敛并减少震荡。'
  },
  {
    id: 'static_3_050',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: 'Adam优化器需要手动调整学习率。',
    correctAnswer: 'false',
    explanation: 'Adam优化器不需要手动调整学习率。'
  },
  {
    id: 'static_3_051',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: 'L1正则化会使部分权重参数恰好为0。',
    correctAnswer: 'true',
    explanation: 'L1正则化会使部分权重参数恰好为0。'
  },
  {
    id: 'static_3_052',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: 'Dropout在测试阶段也需要随机丢弃神经元。',
    correctAnswer: 'false',
    explanation: 'Dropout在测试阶段不需要随机丢弃神经元。'
  },
  {
    id: 'static_3_053',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: '早停法可以防止模型在训练集上过拟合。',
    correctAnswer: 'true',
    explanation: '早停法可以防止模型在训练集上过拟合。'
  },
  {
    id: 'static_3_054',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: '批量归一化可以加速训练并提高模型稳定性。',
    correctAnswer: 'true',
    explanation: '批量归一化可以加速训练并提高模型稳定性。'
  },
  {
    id: 'static_3_055',
    chapterId: 3,
    type: QuestionType.TRUE_FALSE,
    content: '梯度裁剪主要用于解决梯度爆炸问题。',
    correctAnswer: 'true',
    explanation: '梯度裁剪主要用于解决梯度爆炸问题。'
  },

  // 填空题（15题）
  {
    id: 'static_3_056',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: '感知机的输出公式为 y = sign(w₁x₁ + w₂x₂ - θ)，其中 θ 称为 __________。',
    correctAnswer: '阈值',
    explanation: '感知机的输出公式为 y = sign(w₁x₁ + w₂x₂ - θ)，其中 θ 称为阈值。'
  },
  {
    id: 'static_3_057',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: '使用与门、与非门和 __________ 门可以组合实现异或门。',
    correctAnswer: '或',
    explanation: '使用与门、与非门和或门可以组合实现异或门。'
  },
  {
    id: 'static_3_058',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: '深度神经网络中，信号从输入层向输出层单向传播的网络称为 __________ 神经网络。',
    correctAnswer: '前馈',
    explanation: '深度神经网络中，信号从输入层向输出层单向传播的网络称为前馈神经网络。'
  },
  {
    id: 'static_3_059',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: '激活函数为每个神经元引入了 __________ 性。',
    correctAnswer: '非线',
    explanation: '激活函数为每个神经元引入了非线性。'
  },
  {
    id: 'static_3_060',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: 'Sigmoid函数的导数最大值为 __________。',
    correctAnswer: '0.25',
    explanation: 'Sigmoid函数的导数最大值为0.25。'
  },
  {
    id: 'static_3_061',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: 'ReLU函数在输入大于0时的导数为 __________。',
    correctAnswer: 'B',
    explanation: 'ReLU函数在输入大于0时的导数为1。'
  },
  {
    id: 'static_3_062',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: 'Softmax函数将K维向量转换为 __________ 分布。',
    correctAnswer: '概率',
    explanation: 'Softmax函数将K维向量转换为概率分布。'
  },
  {
    id: 'static_3_063',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: '均方误差损失函数的公式为 MSE = (1/m)∑(yᵢ - ŷᵢ)²，其中m表示 __________。',
    correctAnswer: '样本数量',
    explanation: '均方误差损失函数的公式为 MSE = (1/m)∑(yᵢ - ŷᵢ)²，其中m表示样本数量。'
  },
  {
    id: 'static_3_064',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: '在梯度下降法中，参数沿着 __________ 梯度的方向更新。',
    correctAnswer: '负',
    explanation: '在梯度下降法中，参数沿着负梯度的方向更新。'
  },
  {
    id: 'static_3_065',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: '动量优化器为权值更新增加了 __________ 项。',
    correctAnswer: '动量',
    explanation: '动量优化器为权值更新增加了动量项。'
  },
  {
    id: 'static_3_066',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: 'Adam优化器同时计算梯度的一阶矩和 __________ 矩估计。',
    correctAnswer: '二阶',
    explanation: 'Adam优化器同时计算梯度的一阶矩和二阶矩估计。'
  },
  {
    id: 'static_3_067',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: 'L2正则化在损失函数中增加了权重的 __________ 和项。',
    correctAnswer: '平方',
    explanation: 'L2正则化在损失函数中增加了权重的平方和项。'
  },
  {
    id: 'static_3_068',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: 'Dropout在训练时随机丢弃一部分 __________。',
    correctAnswer: '神经元',
    explanation: 'Dropout在训练时随机丢弃一部分神经元。'
  },
  {
    id: 'static_3_069',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: '当验证集损失开始 __________ 时，早停法会停止训练。',
    correctAnswer: '上升',
    explanation: '当验证集损失开始上升时，早停法会停止训练。'
  },
  {
    id: 'static_3_070',
    chapterId: 3,
    type: QuestionType.FILL_BLANK,
    content: '链式法则用于计算 __________ 函数的导数。',
    correctAnswer: '复合',
    explanation: '链式法则用于计算复合函数的导数。'
  }
];

export default chapter3Questions;