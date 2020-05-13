'use strict';
module.exports = ()=>{
  return async(ctx,next)=>{
    if(!ctx.pagination){
      const query = ctx.query;
      const config = ctx.app.config;
      const pagination = {};

      pagination.pageSize = Math.min(100,parseInt(query.pageSize||config.pageSize,10));
      const pageNum = Math.max(1,parseInt(query.pageNum)||config.pageNum,10);
      pagination.skip = (pageNum-1)*pagination.pageSize;
      
      ctx.pagination = pagination;

    }
    await next();
  }
}