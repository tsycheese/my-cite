import Mock from 'mockjs';

Mock.mock('/api/project', 'get', {
  code: 0,
  msg: '',
  'data|10-20': [
    {
      id: '@id',
      name: '@ctitle(5, 20)',
      url: '@url',
      'github|1': ['@url', ''],
      'description|1-4': ['@cparagraph(1, 5)'],
      thumb: '@image(300x250, @color, #fff, @natural)',
    },
  ],
});
