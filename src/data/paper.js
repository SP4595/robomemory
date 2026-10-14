// Source: the supplied CoRL 2026 manuscript. Benchmarks: Table 1.
export const authors = [
  ['Mingcong Lei', '1,3*'],
  ['Honghao Cai', '3*'],
  ['Yuyuan Yang', '3*'],
  ['Yimou Wu', '6*'],
  ['Jinke Ren', '2,1'],
  ['Zezhou Cui', '1,3'],
  ['Liangchen Tan', '4'],
  ['Junkun Hong', '1'],
  ['Gehan Hu', '1,3'],
  ['Shuangyu Zhu', '1'],
  ['Shaohan Jiang', '1,3'],
  ['Ge Wang', '1,3'],
  ['Junyuan Tan', '1'],
  ['Zhenglin Wan', '5'],
  ['Zhongkai Xue', '3'],
  ['Zheng Li', '6'],
  ['Zhen Li', '2,1✉'],
  ['Shuguang Cui', '2,1'],
  ['Yiming Zhao', '7'],
  ['Yatong Han', '7✉'],
]

export const affiliations = [
  'Shenzhen Future Network of Intelligence Institute (FNii-Shenzhen)',
  'School of Science and Engineering, The Chinese University of Hong Kong, Shenzhen',
  'The Chinese University of Hong Kong, Shenzhen',
  'The University of Hong Kong',
  'National University of Singapore',
  'The Chinese University of Hong Kong',
  'Ising AI',
]

export const benchmarks = [
  {
    name: 'RoboMemory',
    detail: 'Qwen2.5-VL-72B-Ins',
    ours: true,
    average: 70.5,
    alfredBase: 68,
    alfredLong: 66,
    habitatBase: 86,
    habitatLong: 62,
  },
  {
    name: 'Claude-3.5-Sonnet',
    detail: 'Single VLM agent',
    average: 69.5,
    alfredBase: 72,
    alfredLong: 52,
    habitatBase: 96,
    habitatLong: 58,
  },
  {
    name: 'Gemini-1.5-Pro',
    detail: 'Single VLM agent',
    average: 68,
    alfredBase: 70,
    alfredLong: 58,
    habitatBase: 92,
    habitatLong: 52,
  },
  {
    name: 'Voyager',
    detail: 'Qwen2.5-VL-72B-Ins',
    average: 46.5,
    alfredBase: 56,
    alfredLong: 32,
    habitatBase: 76,
    habitatLong: 22,
  },
  {
    name: 'Qwen2.5-VL-72B-Ins',
    detail: 'Single VLM agent · Backbone',
    average: 44,
    alfredBase: 50,
    alfredLong: 34,
    habitatBase: 74,
    habitatLong: 18,
  },
]

export const citation = `@inproceedings{
anonymous2026robomemory,
title={RoboMemory: A Brain-inspired Multi-memory Agentic Framework for Interactive Environmental Learning in Physical Embodied Systems},
author={Lei, Mingcong and Cai, Honghao and Yang, Yuyuan and Wu, Yimou and Ren, Jinke and Cui, Zezhou and Tan, Liangchen and Hong, Junkun and Hu, Gehan and Zhu, Shuangyu and others},
booktitle={10th Annual Conference on Robot Learning},
year={2026}
}`
