
module.exports = app=>{
  const {router,controller,jwt} = app;
  const {home} = controller;

  const $router = router.namespace('/api');

  $router.get('/banner',home.getBanner);//首页banner信息
  $router.get('/goods',home.getGoods);//商品列表
  $router.get('/recomGoods',home.getRecomGoods);//首页推荐商品
  $router.get('/goodsDetail/:_id',home.getGoodsDetail);//首页推荐商品
}