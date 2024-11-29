import Mock from 'mockjs';

Mock.mock('/api/about', 'get', {
  code: 0,
  msg: '',
  data: '//player.bilibili.com/player.html?isOutside=true&aid=80433022&bvid=BV1GJ411x7h7&cid=137649199&p=1',
});
