module.exports = app=>{
  const  mongoose = app.mongoose;
  const OrderSchema = new mongoose.Schema({
    orderId:{type:Number,required:true},
    remark:{type:String},//金额
    goods:{type:Object,required:true},//产品
    price:{type:Number,required:true},//备注
    createTime:{type:Date,default: Date.now},//创建时间
    status:Number,
    userId:Object,
    goodsId:Object,
  });
  return mongoose.model('Order',OrderSchema);
};
