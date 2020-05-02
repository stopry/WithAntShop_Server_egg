const Service = require('egg').Service;

class DiscoverService extends Service{

  //获取发现页面季节图
  async getSeasonPic(payload){
    const {ctx} = this;
    let _m = new Date().getMonth()+1;
    let season = 0;//默认春天
    switch(_m){
      case 3>=_m<6:
        season = 0;
        break;
      case 6>=_m<9:
        season = 1;
        break;
      case 9>=_m<12:
        season = 2;
        break;
      case 12<=_m<3:
        season = 3;
        break;
      default:
        season = 0;
        break; 
    }
    const picList = await ctx.model.Season.findOne({});
    return picList['pic'][season];

  }

}

module.exports = DiscoverService;