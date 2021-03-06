'use strict';

const Service = require('egg').Service;

class OrderService extends Service{

  //存入订单数据
  async createOrder(payload,token){
    const {ctx,service} = this;
    const orderLen = await this.getOrderCount();

    const userId = await ctx.helper.decodeToken({ctx,token}).data._id;
    const userName = await ctx.helper.decodeToken({ctx,token}).data.userName;

    const orderId = orderLen+new Date().getTime().toString()+(Math.random()*10000).toFixed(0);

    // payload.orderId = orderId+len+Math.random(10).toFixed(5);//模拟自增id
    // payload.userId = userId;//用户id
    // payload.userName = userName;
    Object.assign(payload,{orderId,userId,userName});
    console.log(payload,'组织');
    return await ctx.model.Order.create(payload);
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
    return await ctx.model.Order.find({userId:userId});
  }
  //删除 订单
  async deleteOrder(payload){
    const {ctx,service} = this;
    const {_id} = payload;//订单id
    let res = false;
    await ctx.model.Order.deleteOne({_id},(error,result)=>{
      if(error){
        res = false;
      }else{
        res = result;
      }
    }) 
    return res;
  }
}

module.exports = OrderService;
