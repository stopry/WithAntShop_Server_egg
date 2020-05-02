'use strict';

const Service = require('egg').Service;

class OrderService extends Service{

  //存入订单数据
  async createOrder(payload,token){
    const {ctx,service} = this;
    const len = await this.getOrderCount();

    const userId = await ctx.helper.decodeToken({ctx,token}).data._id;

    let orderId = new Date().getTime().toString();

    payload.orderId = orderId+len;//模拟自增id
    payload.userId = userId;//用户id
    console.log(payload,'组织');
    return ctx.model.Order.create(payload);
  }
  //查询文档数量
  async getOrderCount(){
    const {ctx} = this;
    const res = await ctx.model.Order.count({});
    return res;
  }

  /**
   * payload {userId,status}
   *用户id 和 订单状态 0 1 2 3 4 5 全部 待支付 已支付 待发货 待收货 已完成
   *  
  */
  async getOrder(payload){
    const {ctx,service} = this;
    const {token,orderStatus} = payload;

    let info = await ctx.helper.decodeToken({ctx,token});

    const userId = info.data._id;

    console.info(token,orderStatus,info,'产讯大点的');
    return ctx.model.Order.find({userId:userId});
  }
}

module.exports = OrderService;
