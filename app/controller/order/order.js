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

   
    ctx.helper.success({ctx,res})
  }
  //删除订单
  async deleteOrder(){
    const {ctx,service} = this;
    const {_id} = ctx.request.body;
    const res = await service.order.deleteOrder({_id});
    if(res){
      ctx.helper.success({ctx,res});
    }else{
      ctx.throw('删除失败')
    }
    
  }
}
module.exports = OrderController;
