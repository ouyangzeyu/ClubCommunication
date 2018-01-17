//负责文章模块的业务逻辑
var controller = module.exports;

var querystring = require('querystring');

var articleModel = require('../models/article_model.js');

var errHandler = require('../errHandler.js');


//1 展示添加文章页面
controller.showArticleAdd = function (req, res) {
    res.render('article/articleAdd.html');
}

//2 添加文章
controller.doArticleAdd = function (req, res) {
    var body = req.body;
    console.log(body);

    articleModel.create(body, function (err, doc) {
        if (err) {
            res.json(errHandler(500, err));
        } else {
            res.json(errHandler(0));
        }
    })
}

//3 查看某一篇文章
controller.showArticleInfo = function (req, res) {
    var articleId = req.query.id;
    //根据Id查询数据库
    articleModel.findById(articleId, function (err, doc) {
        if (err) {
            res.json(errHandler(500, err));
        }
        res.render('article/articleInfo.html', {
            article: doc
        })
    })
}

// 4 展示编辑文章页面
controller.showArticleEdit = function (req, res) {
    var articleId = req.query.id;
    //根据Id查询数据库
    articleModel.findById(articleId, function (err, doc) {
        if (err) {
            res.json(errHandler(500, err));
        }
        res.render('article/articleEdit.html', {
            article: doc
        })
    })
}

// 5 编辑文章
controller.doArticleEdit = function (req, res) {
    //获取post请求的数据
    var body = req.body;
    //修改数据库
    articleModel.findByIdAndUpdate(body.id, body, function (err, raw) {
        if (err) {
            res.json(errHandler(500, err));
        }
        res.json(errHandler(0));
    })
}