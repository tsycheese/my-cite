import Mock from 'mockjs';
import qs from 'querystring';

Mock.mock('/api/message', 'post', {
  code: 0,
  msg: '',
  data: {
    id: '@guid',
    nickname: '@cname',
    content: '@cparagraph(1, 10)',
    createDate: Date.now(),
    'avatar|1': [
      'https://avatars.githubusercontent.com/u/150910201?v=4',
      'https://lh3.googleusercontent.com/ogw/AF2bZyhh9cWyobOLvANS8ckh4016Q6uEIneTY9e4cpvyGPpDng=s32-c-mo',
      'https://avatars.githubusercontent.com/u/23567154?v=4',
      'https://res.u-tools.cn/assets/avatars/JCqZzPNT2Qs0CO8tIwu1scvBCvPKVKIJbmQX2Mru.png',
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function (options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: '',
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: '@guid',
          nickname: '@cname',
          content: '@cparagraph(1, 10)',
          createDate: Date.now(),
          'avatar|1': [
            'https://avatars.githubusercontent.com/u/150910201?v=4',
            'https://lh3.googleusercontent.com/ogw/AF2bZyhh9cWyobOLvANS8ckh4016Q6uEIneTY9e4cpvyGPpDng=s32-c-mo',
            'https://avatars.githubusercontent.com/u/23567154?v=4',
            'https://res.u-tools.cn/assets/avatars/JCqZzPNT2Qs0CO8tIwu1scvBCvPKVKIJbmQX2Mru.png',
          ],
        },
      ],
    },
  });
});
