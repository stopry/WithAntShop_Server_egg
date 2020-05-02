//banner 首页banner图

module.exports = app=>{
  const mongoose = app.mongoose;
  const BannerSchema = new mongoose.Schema({
    imgPath:{
      type:String,
      unique:false,
      required:true
    },
    bgPath:{
      type:String,
      unique:false,
      required:true
    },
    id:{//banner id
      type:String,
      unique:false,
      required:true
    },
    proName:{
      type:String,
      unique:false,
      required:true
    },
    proTitle:{
      type:String,
      unique:false,
      required:true
    },
    proDesc:{
      type:String,
      unique:false,
      required:true
    }
  });
   
  return mongoose.model('Banner',BannerSchema);

}