'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  bcrypt: {
    enable: true,
    package: 'egg-bcrypt'
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'//json web token 验证身份
  },
  cors: {
    enable: true,
    package: 'egg-cors',//
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  sessionRedis: {
    enable: true,
    package: 'egg-session-redis'
  },
  exports: {
    enable: true,
    package: 'egg-socket.io',
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  alinode: {
    enable: true,
    package: 'egg-alinode',
    env: ['prod'],
  },

};
