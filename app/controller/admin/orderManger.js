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
  //删除订单
  async deleteOrder(){
    const {ctx,service} = this;
    const {_id} = ctx.query;
    const res = await service.admin.orderManger.deleteOrder({_id});
    if(res){
      ctx.helper.success({ctx,res});
    }else{
      ctx.throw('删除失败')
    }
  }
  //更新订单
  async updateOrder(){
    const {ctx,service} = this;
    const order = ctx.request.body;
    const res = await service.admin.orderManger.updateOrder(order);
    res?ctx.helper.success({ctx,res}):ctx.throw('更新失败');
  }

  //添加订单
  async addOrder(){
    const {ctx,service} = this;
    const order = ctx.request.body;
    const res = await service.admin.orderManger.addOrder(order);
    res?ctx.helper.success({ctx,res}):ctx.throw('添加失败');
  }

}
module.exports = OrderMangerController;
