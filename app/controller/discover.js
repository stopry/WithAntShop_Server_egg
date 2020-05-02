'use strict';

const Controller = require('egg').Controller;

class DiscoverController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg,我是用户';
  }


  //查询首页推荐商品
  async getSeasonPic(payload){
    const {ctx,service} = this;

    const res = await service.discover.getSeasonPic(payload);
    ctx.helper.success({ctx,res});
  }
}

module.exports = DiscoverController;
