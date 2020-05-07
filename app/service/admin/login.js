const Service = require('egg').Service;

class LoginService extends Service{
  //管理员登陆
  async login(payload){
    const {ctx,service} = this;
    const user = await ctx.model.Manger.findOne({userName:payload.username});
    if(!user){
      ctx.throw(200,'用户不存在');
    }
    let verifyPsw = payload.password===user.get('password');
    if(!verifyPsw){
      ctx.throw(200,'用户名或密码错误');
    }
    const token = await service.actionToken.applay(user._id,user.get('userName'));

    return {token};
  }
}

module.exports = LoginService;