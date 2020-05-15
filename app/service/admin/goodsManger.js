const Service = require('egg').Service;

class GoodsService extends Service{
  async getGoods(payload){
    const {ctx,service} = this;
    const {token,pageNum,pageSize} = payload;

    let info = await ctx.helper.decodeToken({ctx,token});


    //获取分页数据返回给前端
    /***
     * pageNum //当前页数
     * list //当前页的list列表数据
     * pages //总页数
     * amout //数据总条数
     * pageSize //当前页数据条数
     * 
     */
      //获取数据总条数
    const amount = await ctx.model.Goods.count({});//订单总条数
    const pages = Math.ceil(amount/pageSize);//总页数

    const list = await ctx.model.Goods.find({})
    .skip((pageNum-1)*pageSize)
    .limit(pageSize)
    .sort({_id:-1})
    .exec((err,doc)=>{
      try {
        if (!err && doc) {
          return doc;
        }
        ctx.throw('查询失败');
      } catch (e) {
        ctx.throw('查询失败');
      }
    });
    const res = {list,pageNum,pages,amount,pageSize};

    return res;
  }

  //删除商品
  async deleteGoods(payload){
    const {ctx,service} = this;
    const {_id} = payload;//订单id
    let res = false;
    await ctx.model.Goods.deleteOne({_id},(error,result)=>{
      if(error){
        res = false;
      }else{
        res = result;
      }
    }) 
    return res;
  }
  //更新商品
  async updateGoods(payload){
    const {ctx} = this;
    const {_id} = payload;
    let res = false;
    console.log(payload,'收到的请求数据');
    let pro = new Promise((resolve,reject)=>{
      ctx.model.Goods.where({ _id }).update(payload,(error,result)=>{
        if(error){
          res = false;
          reject(res);
        }else{
          res = result;
          resolve(res)
        }
      });
    })
    
    return pro;
  }

}

module.exports = GoodsService;