//banner 发现banner图

module.exports = app=>{
  const mongoose = app.mongoose;
  const SeasonSchema = new mongoose.Schema({
    pic:{
      type:Array,
      unique:true,
      required:true
    },
  });
   
  return mongoose.model('Season',SeasonSchema);

}