'use strict';
const _ = require('lodash');
const fecha = require('fecha');

const TRANSACTION = Symbol('Application#transaction');

module.exports = {
  _,
  //获取当前时间相差count天时间
  getDifferDate(count=0,date=new Date()){
    const time = date.getTime();
    const oneDayTime = 86400000;
    return new Date(time+oneDayTime*count);
  },
  //tansaction
  async transaction(){
    if(!this[TRANSACTION]){
      this[TRANSACTION] = await this.model.transaction();
    }
    return this[TRANSACTION];
  },
  getTransaction(){
    return this[TRANSACTION];
  },
  deleteTransaction(){
    this[TRANSACTION] = null;
  }

};
