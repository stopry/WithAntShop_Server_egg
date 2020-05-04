const Service = require('egg').Service;
class MyService extends Service{

  //用户登录
  async login(payload){
    const {ctx,service} =this;
    const user = await service.user.findByMobile(payload.mobile);
    if(!user){
      ctx.throw(200,'用户不存在');
    }

    
      
    let verifyPsw = payload.password===user.password

    if(!verifyPsw){
      ctx.throw(200,'用户名或密码错误');
    }

    const token = await service.actionToken.applay(user._id);

    //生成Token
    return {token};

  }

  async getUserInfo(payload){
    const {ctx,service} = this;
    let token = payload;

    let info = await ctx.helper.decodeToken({ctx,token});

    console.log(info,'新信息下走下周弄')
    const userId = info.data._id;
    return await ctx.model.User.findById(userId);
  }

  async getAddressList(payload){
    const {ctx,service} = this;
    let token = payload;
    let info = await ctx.helper.decodeToken({ctx,token});
    const userId = info.data._id;
    return await ctx.model.User.findById(userId).select('addressList');
  }
}

module.exports = MyService;