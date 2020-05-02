const Service = require('egg').Service;

class UserAccessService extends Service{
  async login(payload){
    const {ctx,service} = this;
    const user = await service.user.findByMobile(payload.mobile);
    if(!user){
      ctx.throw(404,'用户不存在');
    }
    let verifyPsw = await ctx.compare(payload.password,user.password);
    if(!verifyPsw){
      ctx.throw(404,'用户名或密码错误')
    }
    //生成Token
    return {token:await service.actionToken.applay(user._id)}
  }
}
