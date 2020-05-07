'use strict';

module.exports = app=>{
  const {router,controller,jwt} = app;

  const {admin} = controller;

  const orderRouter = router.namespace('/api');

  orderRouter.get('/admin/order',admin.orderManger.getOrder);//获取订单


};
