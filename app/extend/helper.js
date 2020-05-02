'use strict';
const uuidv1 = require('uuid/v1');
const moment = require('moment');
exports.uuidv1 = uuidv1;
//format time
exports.formatTime = time=>moment(time).format('YYYY-MM-DD HH:mm:ss');
//处理成功响应
exports.success = ({ctx,res=null,msg='请求成功'})=>{
  ctx.body = {
    code:200,
    data:res,
    msg,
    success:true
  };
  ctx.status = 200;
};
exports.JSONParse = (str,defaultResult)=>{
  try{
    return JSON.parse(str);
  }catch (e) {
    return defaultResult||{};
  }
};

// 封装socket.io数据格式
exports.parseSocketMsg = (action, payload = {}, metadata = {})=>{
  return {
    meta: { timestamp: Date.now(), ...metadata },
    data: { action, payload },
  };
};

//解析token
exports.decodeToken = ({ctx,token})=>{
  const JWT = ctx.app.jwt;
  const secret = ctx.app.config.jwt.secret;
  let info;
  token&&(token = token.split(' ')[1]);
  JWT.verify(token,secret,(error,decoded)=>{
    if(error){
      ctx.throw(error)
    }else{
      info = decoded;
    }
  })
  return info;
}
