module.exports = {
  schedule: {
    interval: '1000m', // 1000 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    const res = await ctx.curl('http://www.qq.com', {
      dataType: 'json',
    });
    ctx.app.cache = res.data;
  },
};
