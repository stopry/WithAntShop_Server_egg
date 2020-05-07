'use strict';

const Controller = require('egg').Controller;

class OrderMangerController extends  Controller{
  async index(){
    const {ctx} = this;
    ctx.body = 'hi sports';
  }
  //获取订单
  async getOrder(){
    const {ctx,service} = this;
    // const orderStatus = ctx.query.orderStatus;
    // let token = ctx.request.get('Authorization');
    // const res = await service.order.getOrder({token,orderStatus});
    const res = await service.admin.orderManger.getOrder();

  //  ctx.body = '444';
    ctx.helper.success({ctx,res})
  }
}
module.exports = OrderMangerController;
