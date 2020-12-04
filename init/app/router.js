'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/:id', controller.home.index);
  // 顶部分类接口
  router.get('/index/sort',controller.home.sort)
  // 详情页接口
  router.get('/detail/:id',controller.home.detail)
  // 获取分类的长度
  router.get('/index/page',controller.home.page)
};
