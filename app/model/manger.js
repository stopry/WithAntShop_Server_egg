//管理员模型
module.exports = app=>{
  const  mongoose = app.mongoose;
  const MangerSchema = new mongoose.Schema({
    userName:{type:String,required:true},
    password:{type:String,required:true},
    remark:{type:String},//金额
    role:{type:Number,required:true},//角色 0 超级管理员
    createTime:{type:Date,default: Date.now},//创建时间
    status:{type:Number,required:true},//状态 0 默认正常
  });
  return mongoose.model('Manger',MangerSchema);
};
