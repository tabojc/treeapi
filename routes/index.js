const express = require('express');

const treeRouter = require('./tree.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api', router);

  router.use('/tree', treeRouter);
}

module.exports = routerApi;
