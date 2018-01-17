//文章模块路由

//1 导入express
var express = require('express');
//创建路由容器
var router = express.Router();

articleController = require('../controllers/article_controller.js');



router.get('/article/add', articleController.showArticleAdd) //展示添加文章界面
    .post('/article/add', articleController.doArticleAdd) //添加文章
    .get('/article/info', articleController.showArticleInfo) //查看文章
    .get('/article/edit', articleController.showArticleEdit) //展示编辑文章界面
    .post('/article/edit', articleController.doArticleEdit); //编辑文章


//导出
module.exports = router;