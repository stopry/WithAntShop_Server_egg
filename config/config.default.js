/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576832034949_6064';
  config.host = 'http://stopry.com';

  // 文件上传配置
  config.upload = {
    path: path.join(__dirname, '../app/public/upload/'),
    url: '/public/upload/',
  };

  //redis 配置
  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: '',
      db: '0'
    }
  };
  config.sessionRedis = {
    name: ''//single redis dose not to config name
  };


  // add your middleware config here
  //load errorHandler middleware
  config.middleware = ['errorHandler'];

  config.security = {
    csrf: {
      enable:true,
      ignoreJSON:true
    },
    domainWhiteList: ['http://localhost:8888'],
  };
  config.multipart = {
    fileExtensions: ['.apk', '.pptx', '.docx', '.csv', '.doc', '.ppt', '.pdf', '.pages', '.wav', '.mov'],
  };
  config.bcrypt = {
    saltRounds: 10
  };

  //mongodb config
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/egg_sports',//mongodb default port 27017
    options: {
      useMongoClient:true,
      autoReconnect:true,
      reconnectTries:Number.MAX_VALUE,
      bufferMaxEntries:0
    }
  };
  //use client and server token auth "json web token"
  config.jwt = {
    secret:'SPORTS_RR',//token secret String
  };
  //cors request allow
  config.cors = {
    origin:'*',
    allowMethod:'GET,PUT,POST,DELETE,PATCH,HEAD'
  };

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: process.env.EGG_ALINODE_APPID || '',
    secret: process.env.EGG_ALINODE_SECRET || '',
  };

  // add your user config here
  const userConfig = {
    myAppName: 'SPORTS',
  };

  return {
    ...config,
    ...userConfig,
  };
};
