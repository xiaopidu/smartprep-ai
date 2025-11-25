import { Question, QuestionType } from '../../types';

// 第2章机器学习详解题库 - 严格按照md文件内容生成
export const chapter2Questions: Question[] = [
  // 单选题（25题）
  {
    id: 'static_2_001',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: 'Tom Mitchell对机器学习的定义中，性能随着什么而自我完善？',
    options: [
      '时间T',
      '任务T',
      '经验E',
      '性能P'
    ],
    correctAnswer: 'C',
    explanation: 'Tom Mitchell对机器学习的定义中，性能随着经验E而自我完善。'
  },
  {
    id: 'static_2_002',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '"对于某类任务T和性能度量P，计算机程序在T上以P衡量的性能随着经验E而自我完善"描述的是？',
    options: [
      '人工智能',
      '机器学习',
      '深度学习',
      '强化学习'
    ],
    correctAnswer: 'B',
    explanation: '该描述定义的是机器学习。'
  },
  {
    id: 'static_2_003',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '哪种学习类型使用已知类别标签的样本训练模型？',
    options: [
      '无监督学习',
      '监督学习',
      '强化学习',
      '自监督学习'
    ],
    correctAnswer: 'B',
    explanation: '监督学习使用已知类别标签的样本训练模型。'
  },
  {
    id: 'static_2_004',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '哪种学习类型直接对没有标记的数据集进行建模？',
    options: [
      '无监督学习',
      '监督学习',
      '强化学习',
      '半监督学习'
    ],
    correctAnswer: 'A',
    explanation: '无监督学习直接对没有标记的数据集进行建模。'
  },
  {
    id: 'static_2_005',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '强化学习中的学习系统通过什么信号进行学习？',
    options: [
      '类别标签',
      '聚类中心',
      '奖励信号',
      '特征向量'
    ],
    correctAnswer: 'C',
    explanation: '强化学习中的学习系统通过奖励信号进行学习。'
  },
  {
    id: 'static_2_006',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '预测下周股票价格的任务属于什么类型？',
    options: [
      '分类',
      '回归',
      '聚类',
      '降维'
    ],
    correctAnswer: 'B',
    explanation: '预测下周股票价格的任务属于回归类型。'
  },
  {
    id: 'static_2_007',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '判断邮件是否为垃圾邮件的任务属于什么类型？',
    options: [
      '分类',
      '回归',
      '聚类',
      '关联规则'
    ],
    correctAnswer: 'A',
    explanation: '判断邮件是否为垃圾邮件的任务属于分类类型。'
  },
  {
    id: 'static_2_008',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: 'KNN算法中，K值过小容易导致什么现象？',
    options: [
      '欠拟合',
      '过拟合',
      '梯度消失',
      '维度灾难'
    ],
    correctAnswer: 'B',
    explanation: 'KNN算法中，K值过小容易导致过拟合现象。'
  },
  {
    id: 'static_2_009',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '随机森林是基于什么集成学习方法？',
    options: [
      'Bagging',
      'Boosting',
      'Stacking',
      'Blending'
    ],
    correctAnswer: 'A',
    explanation: '随机森林是基于Bagging集成学习方法。'
  },
  {
    id: 'static_2_010',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: 'GBDT是基于什么集成学习方法？',
    options: [
      'Bagging',
      'Boosting',
      'Stacking',
      'Blending'
    ],
    correctAnswer: 'B',
    explanation: 'GBDT是基于Boosting集成学习方法。'
  },
  {
    id: 'static_2_011',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '支持向量机（SVM）通过什么来最大化分类间隔？',
    options: [
      '支持向量',
      '决策树',
      '神经网络',
      '贝叶斯定理'
    ],
    correctAnswer: 'A',
    explanation: '支持向量机（SVM）通过支持向量来最大化分类间隔。'
  },
  {
    id: 'static_2_012',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '朴素贝叶斯算法的"朴素"体现在哪里？',
    options: [
      '算法简单',
      '特征条件独立',
      '计算速度快',
      '准确率低'
    ],
    correctAnswer: 'B',
    explanation: '朴素贝叶斯算法的"朴素"体现在特征条件独立。'
  },
  {
    id: 'static_2_013',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '逻辑回归主要用于解决什么类型的问题？',
    options: [
      '回归问题',
      '二分类问题',
      '聚类问题',
      '降维问题'
    ],
    correctAnswer: 'B',
    explanation: '逻辑回归主要用于解决二分类问题。'
  },
  {
    id: 'static_2_014',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '决策树构建过程中，选择分裂属性的依据是什么？',
    options: [
      '信息增益或基尼系数',
      '欧氏距离',
      '余弦相似度',
      '相关系数'
    ],
    correctAnswer: 'A',
    explanation: '决策树构建过程中，选择分裂属性的依据是信息增益或基尼系数。'
  },
  {
    id: 'static_2_015',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: 'K-means聚类算法中，K表示什么？',
    options: [
      '迭代次数',
      '学习率',
      '聚类数量',
      '特征维度'
    ],
    correctAnswer: 'C',
    explanation: 'K-means聚类算法中，K表示聚类数量。'
  },
  {
    id: 'static_2_016',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '主成分分析（PCA）主要用于什么？',
    options: [
      '分类',
      '回归',
      '聚类',
      '降维'
    ],
    correctAnswer: 'D',
    explanation: '主成分分析（PCA）主要用于降维。'
  },
  {
    id: 'static_2_017',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '线性回归中，正则化项主要用于防止什么？',
    options: [
      '欠拟合',
      '过拟合',
      '梯度消失',
      '计算复杂'
    ],
    correctAnswer: 'B',
    explanation: '线性回归中，正则化项主要用于防止过拟合。'
  },
  {
    id: 'static_2_018',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '在梯度下降法中，学习率过大可能导致什么？',
    options: [
      '收敛过慢',
      '无法收敛',
      '过拟合',
      '欠拟合'
    ],
    correctAnswer: 'B',
    explanation: '在梯度下降法中，学习率过大可能导致无法收敛。'
  },
  {
    id: 'static_2_019',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '交叉验证的主要目的是什么？',
    options: [
      '增加数据量',
      '提高模型复杂度',
      '评估模型泛化能力',
      '加速训练过程'
    ],
    correctAnswer: 'C',
    explanation: '交叉验证的主要目的是评估模型泛化能力。'
  },
  {
    id: 'static_2_020',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '混淆矩阵中，TP表示什么？',
    options: [
      '真负例',
      '假正例',
      '真正例',
      '假负例'
    ],
    correctAnswer: 'C',
    explanation: '混淆矩阵中，TP表示真正例。'
  },
  {
    id: 'static_2_021',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '精确率（Precision）的计算公式是？',
    options: [
      'TP / (TP + FN)',
      'TP / (TP + FP)',
      '(TP + TN) / (P + N)',
      'TP / P'
    ],
    correctAnswer: 'B',
    explanation: '精确率（Precision）的计算公式是TP / (TP + FP)。'
  },
  {
    id: 'static_2_022',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '召回率（Recall）的计算公式是？',
    options: [
      'TP / (TP + FN)',
      'TP / (TP + FP)',
      '(TP + TN) / (P + N)',
      'TP / P'
    ],
    correctAnswer: 'A',
    explanation: '召回率（Recall）的计算公式是TP / (TP + FN)。'
  },
  {
    id: 'static_2_023',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: 'F1值是哪个指标的调和平均数？',
    options: [
      '准确率和召回率',
      '精确率和召回率',
      '准确率和精确率',
      '召回率和特异度'
    ],
    correctAnswer: 'B',
    explanation: 'F1值是精确率和召回率的调和平均数。'
  },
  {
    id: 'static_2_024',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: '在特征选择中，Filter方法的特点是什么？',
    options: [
      '与模型无关',
      '依赖具体模型',
      '计算复杂度高',
      '效果最好'
    ],
    correctAnswer: 'A',
    explanation: '在特征选择中，Filter方法的特点是与模型无关。'
  },
  {
    id: 'static_2_025',
    chapterId: 2,
    type: QuestionType.SINGLE,
    content: 'Wrapper方法的主要缺点是什么？',
    options: [
      '效果差',
      '计算量大',
      '不能处理高维数据',
      '需要标签信息'
    ],
    correctAnswer: 'B',
    explanation: 'Wrapper方法的主要缺点是计算量大。'
  },

  // 多选题（15题）
  {
    id: 'static_2_026',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '机器学习的类型包括：',
    options: [
      '监督学习',
      '无监督学习',
      '强化学习',
      '半监督学习'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '机器学习的类型包括监督学习、无监督学习、强化学习、半监督学习。'
  },
  {
    id: 'static_2_027',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '监督学习可以解决的任务类型包括：',
    options: [
      '分类',
      '回归',
      '聚类',
      '降维'
    ],
    correctAnswer: ['A', 'B'],
    explanation: '监督学习可以解决的任务类型包括分类、回归。'
  },
  {
    id: 'static_2_028',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '无监督学习可以解决的任务类型包括：',
    options: [
      '分类',
      '回归',
      '聚类',
      '降维'
    ],
    correctAnswer: ['C', 'D'],
    explanation: '无监督学习可以解决的任务类型包括聚类、降维。'
  },
  {
    id: 'static_2_029',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '常见的分类算法包括：',
    options: [
      '逻辑回归',
      '决策树',
      '支持向量机',
      'K-means'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '常见的分类算法包括逻辑回归、决策树、支持向量机。'
  },
  {
    id: 'static_2_030',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '常见的回归算法包括：',
    options: [
      '线性回归',
      '多项式回归',
      '决策树回归',
      'KNN分类'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '常见的回归算法包括线性回归、多项式回归、决策树回归。'
  },
  {
    id: 'static_2_031',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '集成学习的主要方法包括：',
    options: [
      'Bagging',
      'Boosting',
      'Stacking',
      'Clustering'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '集成学习的主要方法包括Bagging、Boosting、Stacking。'
  },
  {
    id: 'static_2_032',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '防止过拟合的方法包括：',
    options: [
      '获取更多数据',
      '使用正则化',
      'Dropout',
      '早停法'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '防止过拟合的方法包括获取更多数据、使用正则化、Dropout、早停法。'
  },
  {
    id: 'static_2_033',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '模型评估中常用的指标包括：',
    options: [
      '准确率',
      '精确率',
      '召回率',
      'F1值'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '模型评估中常用的指标包括准确率、精确率、召回率、F1值。'
  },
  {
    id: 'static_2_034',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '特征选择的方法包括：',
    options: [
      'Filter方法',
      'Wrapper方法',
      'Embedded方法',
      'Random方法'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '特征选择的方法包括Filter方法、Wrapper方法、Embedded方法。'
  },
  {
    id: 'static_2_035',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '数据预处理包括：',
    options: [
      '数据清洗',
      '数据转换',
      '特征选择',
      '模型训练'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '数据预处理包括数据清洗、数据转换、特征选择。'
  },
  {
    id: 'static_2_036',
    chapterId: 2,
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
    id: 'static_2_037',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '线性回归的损失函数可以是：',
    options: [
      '均方误差',
      '平均绝对误差',
      '交叉熵损失',
      '铰链损失'
    ],
    correctAnswer: ['A', 'B'],
    explanation: '线性回归的损失函数可以是均方误差、平均绝对误差。'
  },
  {
    id: 'static_2_038',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '逻辑回归的特点包括：',
    options: [
      '输出概率值',
      '使用sigmoid函数',
      '用于回归问题',
      '是线性模型'
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: '逻辑回归的特点包括输出概率值、使用sigmoid函数、是线性模型。'
  },
  {
    id: 'static_2_039',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: '决策树的优点包括：',
    options: [
      '可解释性强',
      '能处理数值和类别特征',
      '对缺失值不敏感',
      '不需要特征缩放'
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: '决策树的优点包括可解释性强、能处理数值和类别特征、不需要特征缩放。'
  },
  {
    id: 'static_2_040',
    chapterId: 2,
    type: QuestionType.MULTIPLE,
    content: 'KNN算法的缺点包括：',
    options: [
      '计算量大',
      '对高维数据效果差',
      '需要确定K值',
      '可解释性差'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'KNN算法的缺点包括计算量大、对高维数据效果差、需要确定K值。'
  },

  // 判断题（15题）
  {
    id: 'static_2_041',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '机器学习中，参数由人工手动设定，超参数由模型自动学习。',
    correctAnswer: 'false',
    explanation: '机器学习中，参数由模型自动学习，超参数由人工手动设定。'
  },
  {
    id: 'static_2_042',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '监督学习需要带有标签的训练数据。',
    correctAnswer: 'true',
    explanation: '监督学习需要带有标签的训练数据。'
  },
  {
    id: 'static_2_043',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '无监督学习可以发现数据中隐藏的模式。',
    correctAnswer: 'true',
    explanation: '无监督学习可以发现数据中隐藏的模式。'
  },
  {
    id: 'static_2_044',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '强化学习通过奖励信号来指导学习过程。',
    correctAnswer: 'true',
    explanation: '强化学习通过奖励信号来指导学习过程。'
  },
  {
    id: 'static_2_045',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '分类问题的输出是连续值，回归问题的输出是离散值。',
    correctAnswer: 'false',
    explanation: '分类问题的输出是离散值，回归问题的输出是连续值。'
  },
  {
    id: 'static_2_046',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: 'K-means聚类需要预先知道数据的类别标签。',
    correctAnswer: 'false',
    explanation: 'K-means聚类不需要预先知道数据的类别标签。'
  },
  {
    id: 'static_2_047',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '过拟合是指模型在训练集上表现差，在测试集上表现好。',
    correctAnswer: 'false',
    explanation: '过拟合是指模型在训练集上表现好，在测试集上表现差。'
  },
  {
    id: 'static_2_048',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '正则化可以减少模型的复杂度，防止过拟合。',
    correctAnswer: 'true',
    explanation: '正则化可以减少模型的复杂度，防止过拟合。'
  },
  {
    id: 'static_2_049',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '交叉验证可以提高模型的最终性能。',
    correctAnswer: 'false',
    explanation: '交叉验证用于评估性能，不直接提高性能。'
  },
  {
    id: 'static_2_050',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '特征工程可以显著影响机器学习模型的性能。',
    correctAnswer: 'true',
    explanation: '特征工程可以显著影响机器学习模型的性能。'
  },
  {
    id: 'static_2_051',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '决策树容易过拟合，需要剪枝来改善泛化能力。',
    correctAnswer: 'true',
    explanation: '决策树容易过拟合，需要剪枝来改善泛化能力。'
  },
  {
    id: 'static_2_052',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '支持向量机只能处理线性可分的数据。',
    correctAnswer: 'false',
    explanation: '支持向量机通过核函数可以处理非线性数据。'
  },
  {
    id: 'static_2_053',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '朴素贝叶斯算法假设特征之间相互独立。',
    correctAnswer: 'true',
    explanation: '朴素贝叶斯算法假设特征之间相互独立。'
  },
  {
    id: 'static_2_054',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '随机森林通过构建多棵决策树并投票来提高性能。',
    correctAnswer: 'true',
    explanation: '随机森林通过构建多棵决策树并投票来提高性能。'
  },
  {
    id: 'static_2_055',
    chapterId: 2,
    type: QuestionType.TRUE_FALSE,
    content: '梯度下降法一定能找到全局最优解。',
    correctAnswer: 'false',
    explanation: '梯度下降法可能找到局部最优解。'
  },

  // 填空题（15题）
  {
    id: 'static_2_056',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '机器学习中，__________ 是模型从历史训练数据中学到的一部分。',
    correctAnswer: '参数',
    explanation: '机器学习中，参数是模型从历史训练数据中学到的一部分。'
  },
  {
    id: 'static_2_057',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '模型外部的配置，需要人工手动设定的称为 __________。',
    correctAnswer: '超参数',
    explanation: '模型外部的配置，需要人工手动设定的称为超参数。'
  },
  {
    id: 'static_2_058',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '在梯度下降法中，参数更新的公式是 w_{k+1} = w_k - η ∇ f_w(x^i)，其中 η 被称为 __________。',
    correctAnswer: '学习率',
    explanation: '在梯度下降法中，参数更新的公式是 w_{k+1} = w_k - η ∇ f_w(x^i)，其中 η 被称为学习率。'
  },
  {
    id: 'static_2_059',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '模型在训练集上表现很好但在测试集上表现很差的现象称为 __________。',
    correctAnswer: '过拟合',
    explanation: '模型在训练集上表现很好但在测试集上表现很差的现象称为过拟合。'
  },
  {
    id: 'static_2_060',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '将数据集分成训练集、验证集和 __________ 集是常见的做法。',
    correctAnswer: '测试',
    explanation: '将数据集分成训练集、验证集和测试集是常见的做法。'
  },
  {
    id: 'static_2_061',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: 'K折交叉验证中，K一般取值不小于 __________。',
    correctAnswer: 'C',
    explanation: 'K折交叉验证中，K一般取值不小于2。'
  },
  {
    id: 'static_2_062',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '混淆矩阵中，被错误地标记为正元组的负元组称为 __________。',
    correctAnswer: '假正例（FP）',
    explanation: '混淆矩阵中，被错误地标记为正元组的负元组称为假正例（FP）。'
  },
  {
    id: 'static_2_063',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '精确率和召回率的调和平均数称为 __________。',
    correctAnswer: 'F1值',
    explanation: '精确率和召回率的调和平均数称为F1值。'
  },
  {
    id: 'static_2_064',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '在特征选择中，__________ 方法使用一个预测模型来对特征子集进行评分。',
    correctAnswer: 'Wrapper',
    explanation: '在特征选择中，Wrapper方法使用一个预测模型来对特征子集进行评分。'
  },
  {
    id: 'static_2_065',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '线性回归中，追加了L1正则化的称为 __________ 回归。',
    correctAnswer: 'Lasso',
    explanation: '线性回归中，追加了L1正则化的称为Lasso回归。'
  },
  {
    id: 'static_2_066',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '逻辑回归使用 __________ 函数将输出映射到(0,1)区间。',
    correctAnswer: 'sigmoid',
    explanation: '逻辑回归使用sigmoid函数将输出映射到(0,1)区间。'
  },
  {
    id: 'static_2_067',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '决策树算法中，用于衡量数据纯度的指标有信息增益和 __________。',
    correctAnswer: '基尼系数',
    explanation: '决策树算法中，用于衡量数据纯度的指标有信息增益和基尼系数。'
  },
  {
    id: 'static_2_068',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '支持向量机中，离分离超平面最近的点称为 __________。',
    correctAnswer: '支持向量',
    explanation: '支持向量机中，离分离超平面最近的点称为支持向量。'
  },
  {
    id: 'static_2_069',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: 'KNN算法在分类时通常采用 __________ 法，在回归时采用平均值法。',
    correctAnswer: '多数表决',
    explanation: 'KNN算法在分类时通常采用多数表决法，在回归时采用平均值法。'
  },
  {
    id: 'static_2_070',
    chapterId: 2,
    type: QuestionType.FILL_BLANK,
    content: '随机森林通过 __________ 抽样来生成不同的训练子集。',
    correctAnswer: 'Bootstrap',
    explanation: '随机森林通过Bootstrap抽样来生成不同的训练子集。'
  }
];

export default chapter2Questions;