'use strict';

const Controller = require('egg').Controller;

class OrderController extends  Controller{
  async index(){
    const {ctx} = this;
    ctx.body = 'hi sports';
  }
  //创建订单
  async createOrder(){
    const {ctx,service} = this;
    const order = ctx.request.body;
    let token = ctx.request.get('Authorization');
    const res = await service.order.createOrder(order,token);
    ctx.helper.success({ctx, res});
    // ctx.body = 'hi sports';
  }
  //文档数量
  async getOrderCount(){
    const {ctx,service} = this;
    const res = await service.order.getOrderCount();
    ctx.body = res;
  }
  //获取订单
  async getOrder(){
    const {ctx,service} = this;
    const orderStatus = ctx.query.orderStatus;
    let token = ctx.request.get('Authorization');
    const res = await service.order.getOrder({token,orderStatus});

    console.info(res,'请求的数据')
    ctx.helper.success({ctx,res})
  }
}
module.exports = OrderController;
