// 'use strict'

const Controller = require('egg').Controller;

//客户端个人中心部分控制器
class MyController extends Controller{
  async index(){
    const {ctx} = this;
    ctx.body = 'hi,my';
  }

  //登陆生成token
  async login(){

    const {ctx,service} = this;

    const payload = ctx.request.body;
    
    const res = await service.my.login(payload);

    ctx.helper.success({ctx,res});
  }
  //用户信息
  async getUserInfo(){
    const { ctx,service } = this;
    let token = ctx.request.get('Authorization');
    const res = await service.my.getUserInfo(token);
    ctx.helper.success({ctx,res});
  }

  //收件地址
  async getAddressList(){
    const { ctx,service } = this;
    let token = ctx.request.get('Authorization');
    const res = await service.my.getAddressList(token);
    ctx.helper.success({ctx,res});
  }
}

module.exports = MyController;