//用户客户端个人中心部分路由

module.exports = app=>{
  const {router,controller,jwt} = app;
  const {my} = controller;

  const $router = router.namespace('/api');

  $router.get('/my',my);
  $router.post('/login',my.login);
  $router.get('/userInfo',jwt,my.getUserInfo);//用户信息
  $router.get('/addressList',jwt,my.getAddressList);//收件地址
}