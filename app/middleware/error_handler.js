'use strict'

//全局错误处理
module.exports = (option,app)=>{
  return async function errorHandler(ctx,next) {
    try{
      await next();
      const transaction = await app.getTransaction();
      //如果有事务自动提交
      if(transaction){
        transaction.commit();
        app.deleteTransaction();
      }
    }catch (err) {
      //所有异常都会在app上触发一个error事件，框架会记录一条错误日志
      app.emit('error',err,ctx);
      const status = err.status||500;
      //生产环境时500错误的详细内不返回给客户端，因为可能包含敏感信息
      const error = status ===500&&app.config.env==='prod'?'系统内部错误':err.message;
      //从error对象上读出各个属性，设置到响应中
      ctx.body = {
        code:err.status,
        msg:error,
        success:false,
      };
      if(status===422){
        ctx.body.detail = err.errors;
      }
      ctx.status = status;

      const transaction = await app.getTransaction();
      //如果有事务自动提交
      if(transaction){
        transaction.rollback();
        app.deleteTransaction()
      }

    }
  }
};
