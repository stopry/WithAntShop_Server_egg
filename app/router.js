'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  require('./router/web')(app);
  require('./router/api')(app);
  require('./router/my')(app);
  require('./router/discover')(app);
  require('./router/order/order')(app);
  require('./router/admin/orderManger')(app);
  require('./router/admin/login')(app);
};
