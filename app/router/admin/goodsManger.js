'use strict';

module.exports = app=>{
  const {router,controller,jwt} = app;
  const {admin} = controller;

  const goodsRouter = router.namespace('/api/admin');

  goodsRouter.get('/goods',jwt,admin.goodsManger.getGoods);//获取商品
  goodsRouter.get('/deleteGoods',jwt,admin.goodsManger.deleteGoods);//删除商品
  goodsRouter.post('/updateGoods',jwt,admin.goodsManger.updateGoods);//更新商品

}