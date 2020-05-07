'use strict';

module.exports = app=>{
  const {router,controller,jwt} = app;

  const {admin} = controller;

  const orderRouter = router.namespace('/api');

  orderRouter.post('/admin/login',admin.login.login);//管理员登陆


};
