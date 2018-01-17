//用户模块路由：负责分化文章接口

//1.导入express模块
var express = require('express');
//2.创建路由容器
var router = express.Router();

var userController = require('../controllers/user_controller.js');

router.get('/register', userController.showRegister) //展示注册界面
    .post('/register', userController.doRegister) //完成注册
    .get('/login', userController.showLogin) //展示登陆界面
    .post('/login', userController.doLogin) //完成登陆
    .get('/logout', userController.doLogout); //注销登陆

//3.将路由容器作为模块导出
module.exports = router;