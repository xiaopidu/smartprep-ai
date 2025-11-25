import { Question, QuestionType } from '../../types';

// 第7章AI开发框架题库 - 严格按照md文件内容生成
export const chapter7Questions: Question[] = [
  // 单选题（25题）
  {
    id: 'static_7_001',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'PyTorch的核心数据结构是？',
    options: [
      'Array',
      'Tensor',
      'Matrix',
      'Vector'
    ],
    correctAnswer: 'B',
    explanation: 'PyTorch的核心数据结构是Tensor。'
  },
  {
    id: 'static_7_002',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore是哪个公司开发的深度学习框架？',
    options: [
      'Google',
      'Meta',
      'Huawei',
      'Microsoft'
    ],
    correctAnswer: 'C',
    explanation: 'MindSpore是华为公司开发的深度学习框架。'
  },
  {
    id: 'static_7_003',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'PyTorch默认使用的计算图类型是？',
    options: [
      '静态计算图',
      '动态计算图',
      '混合计算图',
      '符号计算图'
    ],
    correctAnswer: 'B',
    explanation: 'PyTorch默认使用的计算图类型是动态计算图。'
  },
  {
    id: 'static_7_004',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: '在PyTorch中，构建神经网络模型的基类是？',
    options: [
      'torch.Model',
      'torch.nn.Module',
      'torch.Network',
      'torch.nn.Net'
    ],
    correctAnswer: 'B',
    explanation: '在PyTorch中，构建神经网络模型的基类是torch.nn.Module。'
  },
  {
    id: 'static_7_005',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore中定义模型前向计算的方法是？',
    options: [
      'forward()',
      'construct()',
      'call()',
      'build()'
    ],
    correctAnswer: 'B',
    explanation: 'MindSpore中定义模型前向计算的方法是construct()。'
  },
  {
    id: 'static_7_006',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'TensorFlow 2.x默认使用的计算图模式是？',
    options: [
      '静态图',
      '动态图',
      '混合图',
      '即时执行'
    ],
    correctAnswer: 'B',
    explanation: 'TensorFlow 2.x默认使用的计算图模式是动态图。'
  },
  {
    id: 'static_7_007',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'PyTorch中用于数据加载和预处理的核心类是？',
    options: [
      'torch.data.Dataset',
      'torch.utils.data.Dataset',
      'torch.DataLoader',
      'torch.utils.DataLoader'
    ],
    correctAnswer: 'B',
    explanation: 'PyTorch中用于数据加载和预处理的核心类是torch.utils.data.Dataset。'
  },
  {
    id: 'static_7_008',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore中设置运行环境的函数是？',
    options: [
      'set_context()',
      'set_config()',
      'set_environment()',
      'setup()'
    ],
    correctAnswer: 'A',
    explanation: 'MindSpore中设置运行环境的函数是set_context()。'
  },
  {
    id: 'static_7_009',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: '在PyTorch中，实现二维卷积的类是？',
    options: [
      'torch.nn.Conv1d',
      'torch.nn.Conv2d',
      'torch.nn.Conv3d',
      'torch.nn.Convolution'
    ],
    correctAnswer: 'B',
    explanation: '在PyTorch中，实现二维卷积的类是torch.nn.Conv2d。'
  },
  {
    id: 'static_7_010',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore的三种API层次不包括？',
    options: [
      'High-Level Python API',
      'Medium-Level Python API',
      'Low-Level Python API',
      'C++ API'
    ],
    correctAnswer: 'D',
    explanation: 'MindSpore的三种API层次不包括C++ API。'
  },
  {
    id: 'static_7_011',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'PyTorch中用于自动微分的模块是？',
    options: [
      'torch.autograd',
      'torch.grad',
      'torch.diff',
      'torch.derivative'
    ],
    correctAnswer: 'A',
    explanation: 'PyTorch中用于自动微分的模块是torch.autograd。'
  },
  {
    id: 'static_7_012',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore支持的全场景部署不包括？',
    options: [
      '端侧',
      '边侧',
      '云侧',
      '量子计算'
    ],
    correctAnswer: 'D',
    explanation: 'MindSpore支持的全场景部署不包括量子计算。'
  },
  {
    id: 'static_7_013',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: '在PyTorch中，用于优化器的模块是？',
    options: [
      'torch.optim',
      'torch.optimizer',
      'torch.train',
      'torch.update'
    ],
    correctAnswer: 'A',
    explanation: '在PyTorch中，用于优化器的模块是torch.optim。'
  },
  {
    id: 'static_7_014',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore的静态图模式又被称为？',
    options: [
      'Graph模式',
      'Static模式',
      'Compile模式',
      'Fixed模式'
    ],
    correctAnswer: 'A',
    explanation: 'MindSpore的静态图模式又被称为Graph模式。'
  },
  {
    id: 'static_7_015',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'PyTorch中用于计算机视觉的扩展库是？',
    options: [
      'torchvision',
      'torchcv',
      'torch.image',
      'torch.vision'
    ],
    correctAnswer: 'A',
    explanation: 'PyTorch中用于计算机视觉的扩展库是torchvision。'
  },
  {
    id: 'static_7_016',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore的动态图模式又被称为？',
    options: [
      'PyNative模式',
      'Dynamic模式',
      'Eager模式',
      'Python模式'
    ],
    correctAnswer: 'A',
    explanation: 'MindSpore的动态图模式又被称为PyNative模式。'
  },
  {
    id: 'static_7_017',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: '在PyTorch中，保存模型参数的文件格式通常是？',
    options: [
      '.pt或.pth',
      '.model',
      '.weights',
      '.ckpt'
    ],
    correctAnswer: 'A',
    explanation: '在PyTorch中，保存模型参数的文件格式通常是.pt或.pth。'
  },
  {
    id: 'static_7_018',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore的模型文件格式是？',
    options: [
      '.mindir',
      '.msmodel',
      '.mind',
      '.ms'
    ],
    correctAnswer: 'A',
    explanation: 'MindSpore的模型文件格式是.mindir。'
  },
  {
    id: 'static_7_019',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'PyTorch中实现循环神经网络的类是？',
    options: [
      'torch.nn.RNN',
      'torch.rnn.RNN',
      'torch.nn.Recurrent',
      'torch.net.RNN'
    ],
    correctAnswer: 'A',
    explanation: 'PyTorch中实现循环神经网络的类是torch.nn.RNN。'
  },
  {
    id: 'static_7_020',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore中用于定义损失函数的模块是？',
    options: [
      'mindspore.nn',
      'mindspore.loss',
      'mindspore.cost',
      'mindspore.error'
    ],
    correctAnswer: 'A',
    explanation: 'MindSpore中用于定义损失函数的模块是mindspore.nn。'
  },
  {
    id: 'static_7_021',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: '在PyTorch中，用于学习率调整的类是？',
    options: [
      'torch.optim.lr_scheduler',
      'torch.scheduler',
      'torch.lr_adjust',
      'torch.optim.adjust_lr'
    ],
    correctAnswer: 'A',
    explanation: '在PyTorch中，用于学习率调整的类是torch.optim.lr_scheduler。'
  },
  {
    id: 'static_7_022',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore支持的可视化工具是？',
    options: [
      'MindInsight',
      'MindView',
      'MindViz',
      'MindWatch'
    ],
    correctAnswer: 'A',
    explanation: 'MindSpore支持的可视化工具是MindInsight。'
  },
  {
    id: 'static_7_023',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'PyTorch中用于分布式训练的模块是？',
    options: [
      'torch.distributed',
      'torch.parallel',
      'torch.distribute',
      'torch.multi_gpu'
    ],
    correctAnswer: 'A',
    explanation: 'PyTorch中用于分布式训练的模块是torch.distributed。'
  },
  {
    id: 'static_7_024',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: 'MindSpore的自动并行能力主要体现在？',
    options: [
      '自动寻找最优并行策略',
      '自动调整学习率',
      '自动选择优化器',
      '自动数据增强'
    ],
    correctAnswer: 'A',
    explanation: 'MindSpore的自动并行能力主要体现在自动寻找最优并行策略。'
  },
  {
    id: 'static_7_025',
    chapterId: 7,
    type: QuestionType.SINGLE,
    content: '在PyTorch中，用于模型部署的工具是？',
    options: [
      'TorchScript',
      'TorchDeploy',
      'PyTorch Mobile',
      'TorchServe'
    ],
    correctAnswer: 'A',
    explanation: '在PyTorch中，用于模型部署的工具是TorchScript。'
  },

  // 多选题（15题）
  {
    id: 'static_7_026',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: '主流AI开发框架包括：',
    options: [
      'PyTorch',
      'TensorFlow',
      'MindSpore',
      'JAX'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '主流AI开发框架包括PyTorch、TensorFlow、MindSpore、JAX。'
  },
  {
    id: 'static_7_027',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: 'PyTorch的主要特点包括：',
    options: [
      '动态计算图',
      'Python优先',
      '易于调试',
      '丰富的生态系统'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'PyTorch的主要特点包括动态计算图、Python优先、易于调试、丰富的生态系统。'
  },
  {
    id: 'static_7_028',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: 'MindSpore的设计目标包括：',
    options: [
      '易开发',
      '高效执行',
      '全场景覆盖',
      '仅支持云侧'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'MindSpore的设计目标包括易开发、高效执行、全场景覆盖。'
  },
  {
    id: 'static_7_029',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: 'AI开发框架的基本功能包括：',
    options: [
      '张量计算',
      '自动微分',
      '神经网络构建',
      '分布式训练'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'AI开发框架的基本功能包括张量计算、自动微分、神经网络构建、分布式训练。'
  },
  {
    id: 'static_7_030',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: 'PyTorch的核心模块包括：',
    options: [
      'torch.nn',
      'torch.optim',
      'torch.utils.data',
      'torch.autograd'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'PyTorch的核心模块包括torch.nn、torch.optim、torch.utils.data、torch.autograd。'
  },
  {
    id: 'static_7_031',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: 'MindSpore的架构层次包括：',
    options: [
      '前端表达层',
      '图编译层',
      '后端运行时层',
      '硬件层'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'MindSpore的架构层次包括前端表达层、图编译层、后端运行时层、硬件层。'
  },
  {
    id: 'static_7_032',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: '计算图的类型包括：',
    options: [
      '静态计算图',
      '动态计算图',
      '混合计算图',
      '符号计算图'
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: '计算图的类型包括静态计算图、动态计算图、混合计算图。'
  },
  {
    id: 'static_7_033',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: 'PyTorch中数据加载的组件包括：',
    options: [
      'Dataset',
      'DataLoader',
      'Sampler',
      'Transform'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'PyTorch中数据加载的组件包括Dataset、DataLoader、Sampler、Transform。'
  },
  {
    id: 'static_7_034',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: 'MindSpore支持的网络类型包括：',
    options: [
      '前馈神经网络',
      '卷积神经网络',
      '循环神经网络',
      '注意力网络'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'MindSpore支持的网络类型包括前馈神经网络、卷积神经网络、循环神经网络、注意力网络。'
  },
  {
    id: 'static_7_035',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: '模型部署的格式包括：',
    options: [
      'ONNX',
      'MindIR',
      'TensorRT',
      'TorchScript'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '模型部署的格式包括ONNX、MindIR、TensorRT、TorchScript。'
  },
  {
    id: 'static_7_036',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: 'PyTorch中的优化器包括：',
    options: [
      'SGD',
      'Adam',
      'RMSprop',
      'Adagrad'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'PyTorch中的优化器包括SGD、Adam、RMSprop、Adagrad。'
  },
  {
    id: 'static_7_037',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: 'MindSpore的应用场景包括：',
    options: [
      '科学研究',
      '工业应用',
      '教育学习',
      '移动端部署'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'MindSpore的应用场景包括科学研究、工业应用、教育学习、移动端部署。'
  },
  {
    id: 'static_7_038',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: 'AI框架中的张量属性包括：',
    options: [
      '形状（shape）',
      '数据类型（dtype）',
      '设备（device）',
      '梯度（grad）'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: 'AI框架中的张量属性包括形状（shape）、数据类型（dtype）、设备（device）、梯度（grad）。'
  },
  {
    id: 'static_7_039',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: '模型训练的关键组件包括：',
    options: [
      '数据加载',
      '前向传播',
      '损失计算',
      '反向传播'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '模型训练的关键组件包括数据加载、前向传播、损失计算、反向传播。'
  },
  {
    id: 'static_7_040',
    chapterId: 7,
    type: QuestionType.MULTIPLE,
    content: '框架性能优化技术包括：',
    options: [
      '计算图优化',
      '算子融合',
      '内存优化',
      '并行计算'
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    explanation: '框架性能优化技术包括计算图优化、算子融合、内存优化、并行计算。'
  },

  // 判断题（15题）
  {
    id: 'static_7_041',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'PyTorch使用动态计算图，便于调试和灵活建模。',
    correctAnswer: 'true',
    explanation: 'PyTorch使用动态计算图，便于调试和灵活建模。'
  },
  {
    id: 'static_7_042',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'MindSpore仅支持静态计算图模式。',
    correctAnswer: 'false',
    explanation: 'MindSpore不仅支持静态计算图模式，还支持动态计算图模式。MindSpore提供了基于源码转换的静态图模式和基于即时执行的动态图模式，满足不同场景的需求。'
  },
  {
    id: 'static_7_043',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'TensorFlow 2.x默认使用动态图模式（Eager Execution）。',
    correctAnswer: 'true',
    explanation: 'TensorFlow 2.x默认使用动态图模式（Eager Execution）。'
  },
  {
    id: 'static_7_044',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'PyTorch张量只能在CPU上计算。',
    correctAnswer: 'false',
    explanation: 'PyTorch张量不仅可以在CPU上计算，还可以在GPU、TPU等加速器上计算。通过.to()方法或cuda()方法，PyTorch张量可以轻松地在不同设备间迁移，充分利用硬件加速。'
  },
  {
    id: 'static_7_045',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'MindSpore支持端边云全场景部署。',
    correctAnswer: 'true',
    explanation: 'MindSpore支持端边云全场景部署。'
  },
  {
    id: 'static_7_046',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: '在PyTorch中，torch.nn.Module是所有神经网络模块的基类。',
    correctAnswer: 'true',
    explanation: '在PyTorch中，torch.nn.Module是所有神经网络模块的基类。'
  },
  {
    id: 'static_7_047',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'MindSpore的construct方法用于定义模型的反向传播。',
    correctAnswer: 'false',
    explanation: 'MindSpore的construct方法用于定义模型的前向传播，而不是反向传播。反向传播在MindSpore中是自动计算的，用户只需要定义前向计算过程。'
  },
  {
    id: 'static_7_048',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'PyTorch的DataLoader支持多进程数据加载。',
    correctAnswer: 'true',
    explanation: 'PyTorch的DataLoader支持多进程数据加载。'
  },
  {
    id: 'static_7_049',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'MindSpore不支持分布式训练。',
    correctAnswer: 'false',
    explanation: 'MindSpore支持分布式训练。MindSpore提供了完整的分布式训练能力，包括数据并行、模型并行、流水线并行等多种并行策略，支持大规模集群训练。'
  },
  {
    id: 'static_7_050',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'ONNX格式可以实现不同框架间的模型转换。',
    correctAnswer: 'true',
    explanation: 'ONNX格式可以实现不同框架间的模型转换。'
  },
  {
    id: 'static_7_051',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'PyTorch的torchvision库专门用于自然语言处理任务。',
    correctAnswer: 'false',
    explanation: 'PyTorch的torchvision库专门用于计算机视觉任务，而不是自然语言处理任务。torchvision提供了图像处理、预训练模型、数据集等计算机视觉相关功能。'
  },
  {
    id: 'static_7_052',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'MindSpore的自动并行可以自动寻找最优的并行策略。',
    correctAnswer: 'true',
    explanation: 'MindSpore的自动并行可以自动寻找最优的并行策略。'
  },
  {
    id: 'static_7_053',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: '在PyTorch中，需要手动调用backward()方法计算梯度。',
    correctAnswer: 'true',
    explanation: '在PyTorch中，需要手动调用backward()方法计算梯度。'
  },
  {
    id: 'static_7_054',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: 'MindSpore仅支持华为自研的昇腾芯片。',
    correctAnswer: 'false',
    explanation: 'MindSpore不仅支持华为自研的昇腾芯片，还支持GPU、CPU等多种硬件平台。MindSpore具有跨平台特性，可以在昇腾、GPU、CPU等不同硬件上运行。'
  },
  {
    id: 'static_7_055',
    chapterId: 7,
    type: QuestionType.TRUE_FALSE,
    content: '静态计算图在训练时性能通常优于动态计算图。',
    correctAnswer: 'true',
    explanation: '静态计算图在训练时性能通常优于动态计算图。'
  },

  // 填空题（15题）
  {
    id: 'static_7_056',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'PyTorch的核心数据结构是 __________，支持GPU加速计算。',
    correctAnswer: 'Tensor',
    explanation: 'PyTorch的核心数据结构是Tensor，支持GPU加速计算。'
  },
  {
    id: 'static_7_057',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'MindSpore中用于设置运行模式的函数是 __________。',
    correctAnswer: 'set_context',
    explanation: 'MindSpore中用于设置运行模式的函数是set_context。'
  },
  {
    id: 'static_7_058',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: '在PyTorch中，用于构建神经网络模型的基类是 __________。',
    correctAnswer: 'torch.nn.Module',
    explanation: '在PyTorch中，用于构建神经网络模型的基类是torch.nn.Module。'
  },
  {
    id: 'static_7_059',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'MindSpore的前向计算在 __________ 方法中定义。',
    correctAnswer: 'construct',
    explanation: 'MindSpore的前向计算在construct方法中定义。'
  },
  {
    id: 'static_7_060',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'PyTorch使用 __________ 计算图，便于调试和动态修改。',
    correctAnswer: '动态',
    explanation: 'PyTorch使用动态计算图，便于调试和动态修改。'
  },
  {
    id: 'static_7_061',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'MindSpore支持 __________ 和PyNative两种运行模式。',
    correctAnswer: 'Graph',
    explanation: 'MindSpore支持Graph和PyNative两种运行模式。'
  },
  {
    id: 'static_7_062',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: '在PyTorch中，自动微分功能由 __________ 模块提供。',
    correctAnswer: 'torch.autograd',
    explanation: '在PyTorch中，自动微分功能由torch.autograd模块提供。'
  },
  {
    id: 'static_7_063',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'MindSpore的模型中间表示格式是 __________。',
    correctAnswer: 'MindIR',
    explanation: 'MindSpore的模型中间表示格式是MindIR。'
  },
  {
    id: 'static_7_064',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'PyTorch中用于数据加载和批处理的类是 __________。',
    correctAnswer: 'DataLoader',
    explanation: 'PyTorch中用于数据加载和批处理的类是DataLoader。'
  },
  {
    id: 'static_7_065',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'MindSpore的三个API层次是High-Level、Medium-Level和 __________。',
    correctAnswer: 'Low-Level',
    explanation: 'MindSpore的三个API层次是High-Level、Medium-Level和Low-Level。'
  },
  {
    id: 'static_7_066',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: '在PyTorch中，用于实现损失函数的模块是 __________。',
    correctAnswer: 'torch.nn',
    explanation: '在PyTorch中，用于实现损失函数的模块是torch.nn。'
  },
  {
    id: 'static_7_067',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'MindSpore的可视化调试调优工具是 __________。',
    correctAnswer: 'MindInsight',
    explanation: 'MindSpore的可视化调试调优工具是MindInsight。'
  },
  {
    id: 'static_7_068',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'PyTorch中用于模型保存和加载的函数是 __________。',
    correctAnswer: 'torch.save和torch.load',
    explanation: 'PyTorch中用于模型保存和加载的函数是torch.save和torch.load。'
  },
  {
    id: 'static_7_069',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: 'MindSpore支持数据并行、模型并行和 __________ 并行。',
    correctAnswer: '自动',
    explanation: 'MindSpore支持数据并行、模型并行和自动并行。'
  },
  {
    id: 'static_7_070',
    chapterId: 7,
    type: QuestionType.FILL_BLANK,
    content: '在PyTorch中，用于学习率调整的模块是 __________。',
    correctAnswer: 'torch.optim.lr_scheduler',
    explanation: '在PyTorch中，用于学习率调整的模块是torch.optim.lr_scheduler。'
  }
];

export default chapter7Questions;