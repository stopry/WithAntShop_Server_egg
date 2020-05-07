'use strict';

const Service = require('egg').Service;

class OrderService extends Service{



  /**
   * payload {userId,status}
   *用户id 和 订单状态 0 1 2 3 4 5 全部 待支付 已支付 待发货 待收货 已完成
   *  
  */
  async getOrder(payload){
    const {ctx,service} = this;
    // const {token,orderStatus} = payload;

    // let info = await ctx.helper.decodeToken({ctx,token});

    // const userId = info.data._id;

    // console.info(token,orderStatus,info,'产讯大点的');
    return await ctx.model.Order.find({});
  }

}

module.exports = OrderService;
