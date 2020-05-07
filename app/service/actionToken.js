//生成token
const Service = require('egg').Service;
class ActionTokenService extends Service{
  //通过用户id生成的token
  async applay(_id,userName){
    const {ctx} = this;
    return ctx.app.jwt.sign({
      data:{
        _id,//生成token的参数
        userName
      },
      exp:Math.floor(Date.now()/1000)+(60*60*24*7),//token过期时间
    },ctx.app.config.jwt.secret);//加密的密钥
  }
}
module.exports = ActionTokenService;
