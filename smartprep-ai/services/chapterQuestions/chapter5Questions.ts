import { Question, QuestionType } from '../../types';

// 第5章循环神经网络RNN题库 - 严格按照md文件内容生成
export const chapter5Questions: Question[] = [
  // 单选题（25题）
  {
    id: 'static_5_001',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'RNN主要设计用于处理什么类型的数据？',
    options: [
      '图像数据',
      '序列数据',
      '结构化数据',
      '图数据'
    ],
    correctAnswer: 'B',
    explanation: 'RNN主要设计用于处理序列数据。'
  },
  {
    id: 'static_5_002',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'RNN与传统前馈神经网络的主要区别是什么？',
    options: [
      '使用卷积操作',
      '具有循环连接',
      '使用池化层',
      '参数更多'
    ],
    correctAnswer: 'B',
    explanation: 'RNN与传统前馈神经网络的主要区别是具有循环连接。'
  },
  {
    id: 'static_5_003',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'RNN中的隐藏状态（Hidden State）主要作用是什么？',
    options: [
      '存储历史信息',
      '进行特征提取',
      '进行分类决策',
      '降低维度'
    ],
    correctAnswer: 'A',
    explanation: 'RNN中的隐藏状态（Hidden State）主要作用是存储历史信息。'
  },
  {
    id: 'static_5_004',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: '简单RNN在时间步t的隐藏状态计算公式是？',
    options: [
      '$h_t = σ(Ux_t + Wh_{t-1})$',
      '$h_t = σ(Wx_t)$',
      '$h_t = Ux_t + b$',
      '$h_t = tanh(W[h_{t-1}, x_t])$'
    ],
    correctAnswer: 'A',
    explanation: '简单RNN在时间步t的隐藏状态计算公式是$h_t = σ(Ux_t + Wh_{t-1})$。'
  },
  {
    id: 'static_5_005',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'RNN面临的主要问题是什么？',
    options: [
      '计算速度慢',
      '长期依赖问题',
      '参数过少',
      '只能处理短序列'
    ],
    correctAnswer: 'B',
    explanation: 'RNN面临的主要问题是长期依赖问题。'
  },
  {
    id: 'static_5_006',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'LSTM是为了解决什么问题而提出的？',
    options: [
      '计算效率',
      '长期依赖问题',
      '过拟合',
      '梯度爆炸'
    ],
    correctAnswer: 'B',
    explanation: 'LSTM是为了解决长期依赖问题而提出的。'
  },
  {
    id: 'static_5_007',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'LSTM中的遗忘门（Forget Gate）的作用是？',
    options: [
      '决定更新哪些新信息',
      '决定丢弃哪些旧信息',
      '决定输出哪些信息',
      '决定输入哪些信息'
    ],
    correctAnswer: 'B',
    explanation: 'LSTM中的遗忘门（Forget Gate）的作用是决定丢弃哪些旧信息。'
  },
  {
    id: 'static_5_008',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'LSTM中输入门（Input Gate）的作用是？',
    options: [
      '决定丢弃哪些信息',
      '决定更新哪些新信息',
      '决定输出哪些信息',
      '决定保存哪些信息'
    ],
    correctAnswer: 'B',
    explanation: 'LSTM中输入门（Input Gate）的作用是决定更新哪些新信息。'
  },
  {
    id: 'static_5_009',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'LSTM中输出门（Output Gate）的作用是？',
    options: [
      '决定丢弃哪些信息',
      '决定更新哪些信息',
      '决定输出哪些信息',
      '决定输入哪些信息'
    ],
    correctAnswer: 'C',
    explanation: 'LSTM中输出门（Output Gate）的作用是决定输出哪些信息。'
  },
  {
    id: 'static_5_010',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'GRU与LSTM的主要区别是什么？',
    options: [
      'GRU参数更少，结构更简单',
      'GRU参数更多，结构更复杂',
      'GRU没有遗忘门',
      'GRU没有输出门'
    ],
    correctAnswer: 'A',
    explanation: 'GRU与LSTM的主要区别是GRU参数更少，结构更简单。'
  },
  {
    id: 'static_5_011',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: '双向RNN（Bi-directional RNN）的主要优势是？',
    options: [
      '只能看到过去信息',
      '同时利用过去和未来信息',
      '参数更少',
      '训练更快'
    ],
    correctAnswer: 'B',
    explanation: '双向RNN（Bi-directional RNN）的主要优势是同时利用过去和未来信息。'
  },
  {
    id: 'static_5_012',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'RNN在自然语言处理中的典型应用不包括？',
    options: [
      '机器翻译',
      '语言建模',
      '文本分类',
      '图像分类'
    ],
    correctAnswer: 'D',
    explanation: 'RNN在自然语言处理中的典型应用不包括图像分类。'
  },
  {
    id: 'static_5_013',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: '时序反向传播（BPTT）是什么的扩展？',
    options: [
      '前向传播',
      '标准反向传播',
      '卷积操作',
      '注意力机制'
    ],
    correctAnswer: 'B',
    explanation: '时序反向传播（BPTT）是标准反向传播的扩展。'
  },
  {
    id: 'static_5_014',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: '梯度裁剪在RNN中主要用于解决什么问题？',
    options: [
      '梯度消失',
      '梯度爆炸',
      '过拟合',
      '欠拟合'
    ],
    correctAnswer: 'B',
    explanation: '梯度裁剪在RNN中主要用于解决梯度爆炸问题。'
  },
  {
    id: 'static_5_015',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'Seq2Seq模型通常包含什么结构？',
    options: [
      '编码器-解码器',
      '生成器-判别器',
      '编码器-编码器',
      '解码器-解码器'
    ],
    correctAnswer: 'A',
    explanation: 'Seq2Seq模型通常包含编码器-解码器结构。'
  },
  {
    id: 'static_5_016',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: '注意力机制最初是为了改进什么模型而提出的？',
    options: [
      'CNN',
      'Seq2Seq',
      'Transformer',
      'GAN'
    ],
    correctAnswer: 'B',
    explanation: '注意力机制最初是为了改进Seq2Seq模型而提出的。'
  },
  {
    id: 'static_5_017',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: '编码器在Seq2Seq模型中的作用是？',
    options: [
      '生成目标序列',
      '将输入序列编码为固定向量',
      '计算注意力权重',
      '进行词嵌入'
    ],
    correctAnswer: 'B',
    explanation: '编码器在Seq2Seq模型中的作用是将输入序列编码为固定向量。'
  },
  {
    id: 'static_5_018',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: '解码器在Seq2Seq模型中的作用是？',
    options: [
      '编码输入序列',
      '基于编码向量生成目标序列',
      '计算损失函数',
      '进行特征提取'
    ],
    correctAnswer: 'B',
    explanation: '解码器在Seq2Seq模型中的作用是基于编码向量生成目标序列。'
  },
  {
    id: 'static_5_019',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'Teacher Forcing在训练Seq2Seq时的主要作用是？',
    options: [
      '加速收敛',
      '增加模型复杂度',
      '减少参数数量',
      '提高推理速度'
    ],
    correctAnswer: 'A',
    explanation: 'Teacher Forcing在训练Seq2Seq时的主要作用是加速收敛。'
  },
  {
    id: 'static_5_020',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'Beam Search在Seq2Seq推理时的主要作用是？',
    options: [
      '加速训练',
      '找到更优的序列',
      '减少内存使用',
      '增加多样性'
    ],
    correctAnswer: 'B',
    explanation: 'Beam Search在Seq2Seq推理时的主要作用是找到更优的序列。'
  },
  {
    id: 'static_5_021',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'RNN在时间序列预测中的优势是？',
    options: [
      '能捕捉时间依赖性',
      '计算效率最高',
      '不需要预处理',
      '参数最少'
    ],
    correctAnswer: 'A',
    explanation: 'RNN在时间序列预测中的优势是能捕捉时间依赖性。'
  },
  {
    id: 'static_5_022',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'LSTM中的细胞状态（Cell State）相当于什么？',
    options: [
      '短期记忆',
      '长期记忆',
      '输入信息',
      '输出信息'
    ],
    correctAnswer: 'B',
    explanation: 'LSTM中的细胞状态（Cell State）相当于长期记忆。'
  },
  {
    id: 'static_5_023',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'GRU中的更新门（Update Gate）结合了LSTM中的哪两个门？',
    options: [
      '输入门和遗忘门',
      '输入门和输出门',
      '遗忘门和输出门',
      '所有门'
    ],
    correctAnswer: 'A',
    explanation: 'GRU中的更新门（Update Gate）结合了LSTM中的输入门和遗忘门。'
  },
  {
    id: 'static_5_024',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'PyTorch中实现LSTM的类是？',
    options: [
      'nn.LSTM',
      'nn.RNN',
      'nn.GRU',
      'nn.Linear'
    ],
    correctAnswer: 'A',
    explanation: 'PyTorch中实现LSTM的类是nn.LSTM。'
  },
  {
    id: 'static_5_025',
    chapterId: 5,
    type: QuestionType.SINGLE,
    content: 'RNN不适合处理什么类型的任务？',
    options: [
      '时间序列预测',
      '自然语言处理',
      '图像分类',
      '语音识别'
    ],
    correctAnswer: 'C',
    explanation: 'RNN不适合处理图像分类类型的任务。'
  },

  // 多选题（15题）
  {
    id: 'static_5_026',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'RNN的典型应用场景包括：',
    options: [
      '机器翻译',
      '语音识别',
      '时间序列预测',
      '文本生成'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'RNN的典型应用场景包括机器翻译、语音识别、时间序列预测、文本生成。'
  },
  {
    id: 'static_5_027',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'RNN的主要变体包括：',
    options: [
      'LSTM',
      'GRU',
      '双向RNN',
      '深度RNN'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'RNN的主要变体包括LSTM、GRU、双向RNN、深度RNN。'
  },
  {
    id: 'static_5_028',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'LSTM的三个门控机制包括：',
    options: [
      '遗忘门',
      '输入门',
      '输出门',
      '更新门'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'LSTM的三个门控机制包括遗忘门、输入门、输出门。'
  },
  {
    id: 'static_5_029',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'RNN训练中常见的问题包括：',
    options: [
      '梯度消失',
      '梯度爆炸',
      '长期依赖问题',
      '计算效率低'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'RNN训练中常见的问题包括梯度消失、梯度爆炸、长期依赖问题、计算效率低。'
  },
  {
    id: 'static_5_030',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: '解决RNN梯度问题的方法包括：',
    options: [
      '使用LSTM/GRU',
      '梯度裁剪',
      '更好的权重初始化',
      '使用ReLU激活函数'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '解决RNN梯度问题的方法包括使用LSTM/GRU、梯度裁剪、更好的权重初始化。'
  },
  {
    id: 'static_5_031',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'Seq2Seq模型的组成部分包括：',
    options: [
      '编码器',
      '解码器',
      '注意力机制',
      '卷积层'
    ],
    correctAnswer: ['A', 'B'],
    explanation: 'Seq2Seq模型的组成部分包括编码器、解码器。'
  },
  {
    id: 'static_5_032',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: '注意力机制的主要优势包括：',
    options: [
      '解决信息瓶颈问题',
      '提高长序列处理能力',
      '增加可解释性',
      '减少参数数量'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '注意力机制的主要优势包括解决信息瓶颈问题、提高长序列处理能力、增加可解释性。'
  },
  {
    id: 'static_5_033',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'RNN在自然语言处理中的任务包括：',
    options: [
      '情感分析',
      '命名实体识别',
      '机器翻译',
      '文本摘要'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'RNN在自然语言处理中的任务包括情感分析、命名实体识别、机器翻译、文本摘要。'
  },
  {
    id: 'static_5_034',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'LSTM相比简单RNN的改进包括：',
    options: [
      '引入门控机制',
      '解决长期依赖问题',
      '减少梯度消失',
      '参数更少'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'LSTM相比简单RNN的改进包括引入门控机制、解决长期依赖问题、减少梯度消失。'
  },
  {
    id: 'static_5_035',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'GRU的组成部分包括：',
    options: [
      '重置门',
      '更新门',
      '候选隐藏状态',
      '细胞状态'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'GRU的组成部分包括重置门、更新门、候选隐藏状态。'
  },
  {
    id: 'static_5_036',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: '双向RNN适用于哪些任务？',
    options: [
      '语音识别',
      '命名实体识别',
      '情感分析',
      '机器翻译'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '双向RNN适用于语音识别、命名实体识别、情感分析任务。'
  },
  {
    id: 'static_5_037',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'RNN的输入输出模式包括：',
    options: [
      'one to one',
      'one to many',
      'many to one',
      'many to many'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'RNN的输入输出模式包括one to one、one to many、many to one、many to many。'
  },
  {
    id: 'static_5_038',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'Seq2Seq模型的改进包括：',
    options: [
      '注意力机制',
      '拷贝机制',
      '覆盖机制',
      '卷积机制'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Seq2Seq模型的改进包括注意力机制、拷贝机制、覆盖机制。'
  },
  {
    id: 'static_5_039',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'RNN在训练时的技巧包括：',
    options: [
      '梯度裁剪',
      '权重初始化',
      '学习率调整',
      '早停法'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'RNN在训练时的技巧包括梯度裁剪、权重初始化、学习率调整、早停法。'
  },
  {
    id: 'static_5_040',
    chapterId: 5,
    type: QuestionType.MULTIPLE,
    content: 'RNN的局限性包括：',
    options: [
      '并行化困难',
      '长序列处理能力有限',
      '对计算资源要求高',
      '训练不稳定'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'RNN的局限性包括并行化困难、长序列处理能力有限、对计算资源要求高、训练不稳定。'
  },

  // 判断题（15题）
  {
    id: 'static_5_041',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: 'RNN可以处理任意长度的序列数据。',
    correctAnswer: 'true',
    explanation: 'RNN可以处理任意长度的序列数据。'
  },
  {
    id: 'static_5_042',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: '简单RNN能够很好地处理长期依赖问题。',
    correctAnswer: 'false',
    explanation: '简单RNN难以很好地处理长期依赖问题。由于梯度消失和梯度爆炸问题，简单RNN在处理长序列时难以捕捉远距离的依赖关系，这是LSTM和GRU等改进模型要解决的核心问题。'
  },
  {
    id: 'static_5_043',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: 'LSTM通过门控机制选择性地记住和忘记信息。',
    correctAnswer: 'true',
    explanation: 'LSTM通过门控机制选择性地记住和忘记信息。'
  },
  {
    id: 'static_5_044',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: 'GRU比LSTM参数更多，结构更复杂。',
    correctAnswer: 'false',
    explanation: 'GRU比LSTM参数更少，结构更简单。GRU通过合并LSTM中的遗忘门和输入门为更新门，减少了参数数量，简化了结构。'
  },
  {
    id: 'static_5_045',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: '双向RNN可以同时利用过去和未来的信息。',
    correctAnswer: 'true',
    explanation: '双向RNN可以同时利用过去和未来的信息。'
  },
  {
    id: 'static_5_046',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: 'RNN在训练时很容易并行化。',
    correctAnswer: 'false',
    explanation: 'RNN在训练时难以并行化，因为每个时间步的计算都依赖于前一个时间步的隐藏状态，存在序列依赖性。相比之下，Transformer等模型更容易并行化。'
  },
  {
    id: 'static_5_047',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: '梯度裁剪通过限制梯度范围来解决梯度爆炸问题。',
    correctAnswer: 'true',
    explanation: '梯度裁剪通过限制梯度范围来解决梯度爆炸问题。'
  },
  {
    id: 'static_5_048',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: 'Seq2Seq模型只能处理等长的输入输出序列。',
    correctAnswer: 'false',
    explanation: 'Seq2Seq模型可以处理不等长的输入输出序列，这正是它的主要优势。编码器将变长输入编码为固定长度的上下文向量，解码器再从这个向量生成变长的输出序列。'
  },
  {
    id: 'static_5_049',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: '注意力机制可以让模型关注输入序列的不同部分。',
    correctAnswer: 'true',
    explanation: '注意力机制可以让模型关注输入序列的不同部分。'
  },
  {
    id: 'static_5_050',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: 'Teacher Forcing在推理阶段使用真实标签作为输入。',
    correctAnswer: 'false',
    explanation: 'Teacher Forcing只在训练阶段使用真实标签作为解码器输入，以加速收敛。在推理阶段，模型只能使用自己生成的预测结果作为后续输入，因为真实标签不可用。'
  },
  {
    id: 'static_5_051',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: 'LSTM中的细胞状态在整个序列处理过程中保持不变。',
    correctAnswer: 'false',
    explanation: 'LSTM中的细胞状态在整个序列处理过程中会不断更新。细胞状态通过遗忘门、输入门和输出门进行动态更新，而不是保持不变，这是LSTM能够处理长期依赖的关键机制。'
  },
  {
    id: 'static_5_052',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: 'RNN在语音识别中主要用于声学建模。',
    correctAnswer: 'true',
    explanation: 'RNN在语音识别中主要用于声学建模。'
  },
  {
    id: 'static_5_053',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: 'GRU没有独立的细胞状态。',
    correctAnswer: 'true',
    explanation: 'GRU没有独立的细胞状态。'
  },
  {
    id: 'static_5_054',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: '双向RNN不能用于实时预测任务。',
    correctAnswer: 'true',
    explanation: '双向RNN不能用于实时预测任务。'
  },
  {
    id: 'static_5_055',
    chapterId: 5,
    type: QuestionType.TRUE_FALSE,
    content: 'RNN在所有序列任务中都优于Transformer。',
    correctAnswer: 'false',
    explanation: 'RNN并非在所有序列任务中都优于Transformer。Transformer在许多序列任务中表现更优，特别是在需要处理长距离依赖的任务中，但RNN在某些特定场景（如在线学习、资源受限环境）仍有优势。'
  },

  // 填空题（15题）
  {
    id: 'static_5_056',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: 'RNN通过 __________ 连接来捕捉序列中的时间依赖性。',
    correctAnswer: '循环',
    explanation: 'RNN通过循环连接来捕捉序列中的时间依赖性。'
  },
  {
    id: 'static_5_057',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: 'LSTM通过 __________、输入门和输出门来控制信息流。',
    correctAnswer: '遗忘门',
    explanation: 'LSTM通过遗忘门、输入门和输出门来控制信息流。'
  },
  {
    id: 'static_5_058',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: 'GRU通过重置门和 __________ 门来控制信息更新。',
    correctAnswer: '更新',
    explanation: 'GRU通过重置门和更新门来控制信息更新。'
  },
  {
    id: 'static_5_059',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: '双向RNN通过组合前向和 __________ RNN来利用上下文信息。',
    correctAnswer: '后向',
    explanation: '双向RNN通过组合前向和后向RNN来利用上下文信息。'
  },
  {
    id: 'static_5_060',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: 'Seq2Seq模型包含编码器和 __________ 两个主要部分。',
    correctAnswer: '解码器',
    explanation: 'Seq2Seq模型包含编码器和解码器两个主要部分。'
  },
  {
    id: 'static_5_061',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: '注意力机制通过计算 __________ 权重来决定关注输入序列的哪些部分。',
    correctAnswer: '注意力',
    explanation: '注意力机制通过计算注意力权重来决定关注输入序列的哪些部分。'
  },
  {
    id: 'static_5_062',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: 'BPTT是 __________ 在时间序列上的扩展。',
    correctAnswer: '反向传播',
    explanation: 'BPTT是反向传播在时间序列上的扩展。'
  },
  {
    id: 'static_5_063',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: '梯度裁剪通过限制梯度的 __________ 来解决梯度爆炸问题。',
    correctAnswer: '范数',
    explanation: '梯度裁剪通过限制梯度的范数来解决梯度爆炸问题。'
  },
  {
    id: 'static_5_064',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: 'LSTM中的 __________ 状态负责长期记忆的传递。',
    correctAnswer: '细胞',
    explanation: 'LSTM中的细胞状态负责长期记忆的传递。'
  },
  {
    id: 'static_5_065',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: 'Teacher Forcing在训练时使用 __________ 标签作为解码器输入。',
    correctAnswer: '真实',
    explanation: 'Teacher Forcing在训练时使用真实标签作为解码器输入。'
  },
  {
    id: 'static_5_066',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: 'Beam Search通过维护多个 __________ 来找到更优的序列。',
    correctAnswer: '候选',
    explanation: 'Beam Search通过维护多个候选来找到更优的序列。'
  },
  {
    id: 'static_5_067',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: 'RNN在时间步t的隐藏状态依赖于当前输入和 __________ 的隐藏状态。',
    correctAnswer: '前一时间步',
    explanation: 'RNN在时间步t的隐藏状态依赖于当前输入和前一时间步的隐藏状态。'
  },
  {
    id: 'static_5_068',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: '编码器将输入序列编码为一个固定长度的 __________ 向量。',
    correctAnswer: '上下文',
    explanation: '编码器将输入序列编码为一个固定长度的上下文向量。'
  },
  {
    id: 'static_5_069',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: '注意力机制解决了Seq2Seq模型中的 __________ 瓶颈问题。',
    correctAnswer: '信息',
    explanation: '注意力机制解决了Seq2Seq模型中的信息瓶颈问题。'
  },
  {
    id: 'static_5_070',
    chapterId: 5,
    type: QuestionType.FILL_BLANK,
    content: 'GRU的候选隐藏状态使用 __________ 门来控制历史信息的利用。',
    correctAnswer: '重置',
    explanation: 'GRU的候选隐藏状态使用重置门来控制历史信息的利用。'
  }
];

export default chapter5Questions;