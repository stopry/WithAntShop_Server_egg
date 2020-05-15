'use strict';

const Controller = require('egg').Controller;

class GoodsMangerController extends  Controller{
  async index(){
    const {ctx} = this;
    ctx.body = 'hi sports';
  }
  //获取商品列表
  async getGoods(){
    const {ctx,service} = this;
    ctx.query.pageNum = Number(ctx.query.pageNum);
    ctx.query.pageSize = Number(ctx.query.pageSize);
    const {pageNum,pageSize} = ctx.query;
    let token = ctx.request.get('Authorization');
    const res = await service.admin.goodsManger.getGoods({pageNum,pageSize,token});

    ctx.helper.success({ctx,res})
  }
  //删除商品
  async deleteGoods(){
    const {ctx,service} = this;
    const {_id} = ctx.query;
    const res = await service.admin.goodsManger.deleteGoods({_id});
    if(res){
      ctx.helper.success({ctx,res});
    }else{
      ctx.throw('删除失败')
    }
  }
  //更新商品
  async updateGoods(){
    const {ctx,service} = this;
    const order = ctx.request.body;
    const res = await service.admin.goodsManger.updateGoods(order);
    res?ctx.helper.success({ctx,res}):ctx.throw('更新失败');
  }

}
module.exports = GoodsMangerController;
