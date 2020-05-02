
module.exports = app=>{
  const {router,controller,jwt} = app;
  const {discover} = controller;

  const $router = router.namespace('/api');

  $router.get('/seasonPic',discover.getSeasonPic);//首页banner信息
}