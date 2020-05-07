const Controller= require('egg').Controller;

class LoginController extends Controller{
  async login(){
    const {ctx,service} = this;
    const payload = ctx.request.body;
    const res = await service.admin.login.login(payload);

    ctx.helper.success({ctx,res});
  }
}

module.exports = LoginController;