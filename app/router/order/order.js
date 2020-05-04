'use strict';

module.exports = app=>{
  const {router,controller,jwt} = app;

  const {order} = controller;

  const orderRouter = router.namespace('/api');

  orderRouter.post('/createOrder',jwt,order.order.createOrder);//创建一条订单
  orderRouter.post('/deleteOrder',jwt,order.order.deleteOrder);//删除订单
  orderRouter.get('/orderCount',order.order.getOrderCount);//获取现有订单长度
  orderRouter.get('/order',jwt,order.order.getOrder);//获取订单


};
