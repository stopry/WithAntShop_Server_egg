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
    ctx.query.pageNum = Number(ctx.query.pageNum);
    ctx.query.pageSize = Number(ctx.query.pageSize);
    const {orderStatus,pageNum,pageSize} = ctx.query;
    let token = ctx.request.get('Authorization');
    const res = await service.admin.orderManger.getOrder({orderStatus,pageNum,pageSize,token});
    // const res = await service.admin.orderManger.getOrder();

    ctx.helper.success({ctx,res})
  }
}
module.exports = OrderMangerController;
