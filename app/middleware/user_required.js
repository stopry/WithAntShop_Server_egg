'use strict';

module.exports = ()=>{
  return async function(ctx,next){
    if(!ctx.user||!ctx.user_id){
      ctx.status = 403;
      ctx.body = 'forbidden';
      return;
    }
    next();
  }
}