'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let token = ctx.request.get('Authorization');
    if(token){
      token = token.split(' ')[1];
    const JWT = ctx.app.jwt;
    const secret = ctx.app.config.jwt.secret;
    let info;
    JWT.verify(token, secret,(error,decoded)=>{
      if (error) {
        console.log(error.message)
        return
      }
      console.log(decoded)
      info = decoded;
    });
    // console.info(decode)
    ctx.body = info;
  }
}

  //查询banner数据
  async getBanner(){
    const {ctx,service} = this;

    const res = await service.home.getBanner();
    ctx.helper.success({ctx,res});
  }


  //查询goods数据
  async getGoods(){
    const {ctx,service} = this;

    const res = await service.home.getGoods();
    ctx.helper.success({ctx,res});
  }

  //查询首页推荐商品
  async getRecomGoods(payload){
    const {ctx,service} = this;

    const res = await service.home.getRecomGoods(payload);
    ctx.helper.success({ctx,res});
  }
  //查询商品详情数据
  async getGoodsDetail(){
    const {ctx,service} = this;
    const payload = ctx.params._id;
    const res = await service.home.getGoodsDetail(payload);
    ctx.helper.success({ctx,res});

  }
}

module.exports = HomeController;
