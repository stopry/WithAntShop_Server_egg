module.exports = app=>{
  const {router,controller} = app;
  const expRouter = router.namespace('/api/exp');//router命名空间
  expRouter.get('/access/current',app.jwt,controller.home.index);
};
