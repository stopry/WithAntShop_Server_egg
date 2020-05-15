// user
module.exports = app=>{
  const mongoose = app.mongoose;
  const GoodsSchema = new mongoose.Schema({

    id:{
      type:String,
      unique:true,
      required:true
    },
    title:{type:String,required:true},
    des:{type:String},
    recommend:{type:Boolean},
    img:{type:String},
    imgMin:{type:String},
    bannerlImg:{type:Array},
    detail:{type:Object},
    isHot:{type:Boolean},
    price:{type:Number},
    type:{type:String},
    stock:{type:String},
    originPrices:{type:Number},
    express:{type:Number},
    colors:{type:Array},
    size:{type:String},

    // mobile:{type:String,unique:true,required:true},
    // hot:{type:String,unique:true,required:true},
    // password:{type:String,required: true},
    // realName:{type:String,required:true},
    // role:{type:mongoose.Schema.Types.ObjectId,ref:'Role'},//关联Role集合
    // avatar:{type:String,default:'https://1.gravatar.com/avatar/a3e54af3cb6e157e496ae430aed4f4a3?s=96&d=mm'},
    // extra:{type:mongoose.Schema.Types.Mixed},
    // createdAt:{type:Date,default: Date.now}
  });
  return mongoose.model('Goods',GoodsSchema);
};
