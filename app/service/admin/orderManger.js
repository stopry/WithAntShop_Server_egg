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
    const {token,orderStatus,pageNum,pageSize} = payload;

    let info = await ctx.helper.decodeToken({ctx,token});


    //获取分页数据返回给前端
    /***
     * pageNum //当前页数
     * list //当前页的list列表数据
     * pages //总页数
     * amout //数据总条数
     * pageSize //当前页数据条数
     * 
     */
      //获取数据总条数
    const amount = await ctx.model.Order.count({});//订单总条数
    const pages = Math.ceil(amount/pageSize);//总页数

    const list = await ctx.model.Order.find({})
    .skip((pageNum-1)*pageSize)
    .limit(pageSize)
    .sort({_id:-1})
    .exec((err,doc)=>{
      try {
        if (!err && doc) {
          return doc;
        }
        ctx.throw('查询失败');
      } catch (e) {
        ctx.throw('查询失败');
      }
    });
    const res = {list,pageNum,pages,amount,pageSize};

    return res;
  }
  //删除订单
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
  //更新订单
  async updateOrder(payload){
    const {ctx} = this;
    const {_id} = payload;
    let res = false;

    let pro = new Promise((resolve,reject)=>{
      ctx.model.Order.where({ _id }).update(payload,(error,result)=>{
        if(error){
          res = false;
          reject(res);
        }else{
          res = result;
          resolve(res)
        }
      });
    })
    
    return pro;
  }
  //添加订单
  async addOrder(payload){
    const {ctx} = this;
    const {_id} = payload;
    let res = false;
    await ctx.model.Order.create(payload,(error,result)=>{
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
