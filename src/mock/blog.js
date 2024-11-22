import Mock from 'mockjs';
import qs from 'querystring';

Mock.mock('/api/blogtype', 'get', {
  code: 0,
  msg: '',
  'data|10-20': [
    {
      'id|+1': 1,
      name: '分类@id',
      articleCount: '@integer(0, 300)',
      'order|+1': 1,
    },
  ],
});

Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (options) {
  const query = qs.parse(options.url.split('?')[1]);
  return Mock.mock({
    code: 0,
    msg: '',
    data: {
      total: '@integer(80, 300)',
      [`rows|${query.limit}`]: [
        {
          id: '@guid',
          title: '@ctitle(10, 20)',
          description: '@cparagraph(3, 10)',
          category: {
            id: '@integer(1, 20)',
            name: '分类@id',
          },
          scanNumber: '@integer(1, 100)',
          commentNumber: '@integer(1, 100)',
          'thumb|1': [
            "@image('300x250', '#50B347', '#FFF', 'Image Example')",
            null,
          ],
          createDate: +new Date() - Math.floor(Math.random() * 10000000000),
        },
      ],
    },
  });
});
