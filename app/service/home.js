
const Service = require('egg').Service;

class HomeService extends Service{
  
  //查询banner 数据
  async getBanner(payload){
    const {ctx,service} = this;
    const res = await ctx.model.Banner.find({});
    const datas = {
      logo:'WithAnt',
      shopDesc:'蚂蚁的店',
      imgList:res,
    };
    return datas;
  }

    //查询goods 数据
    async getGoods(payload){
      const {ctx,service} = this;
      const res = await ctx.model.Goods.find({}).select('title img price isHot');
      const datas = res;
      return datas;
    }
    //查询首页推荐数据
    async getRecomGoods(payload){
      const {ctx,service} = this;
      const res = await ctx.model.Goods.find({'recommend':true}).select('title des img imgMin price isHot');
      return res;
    }

  //查询商品详情
  async getGoodsDetail(payload){
    const {ctx} = this;
    const res = await ctx.model.Goods.findOne({'_id':payload});
    return res;
  }

}

module.exports = HomeService;