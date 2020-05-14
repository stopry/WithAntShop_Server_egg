'use strict';

module.exports = app=>{
  const {router,controller,jwt} = app;

  const {admin} = controller;

  const orderRouter = router.namespace('/api/admin');

  orderRouter.get('/order',jwt,admin.orderManger.getOrder);//获取订单
  orderRouter.get('/deleteOrder',jwt,admin.orderManger.deleteOrder);//删除订单
  orderRouter.post('/updateOrder',jwt,admin.orderManger.updateOrder);//更新订单
  orderRouter.post('/addOrder',jwt,admin.orderManger.addOrder);//添加订单
  

};
