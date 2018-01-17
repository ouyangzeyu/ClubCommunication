//1导入模块
var express = require('express');
//2创建服务器
var app = express();
//3托管静态资源
app.use('/public', express.static('public'));
app.use('/node_modules', express.static('node_modules'));
//4配置模板引擎
app.engine('html', require('express-art-template'));
app.set('view engine', 'html');
//5配置中间件
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

var favicon = require('serve-favicon');
var path = require('path');
app.use(favicon(path.join(__dirname, 'public', 'hmclub.ico')));

//配置cookie-session
//使用：一旦配置成功之后我们无需通过设置响应头来设置cookie,我们的req对象都会有一个session属性
//我们直接设置一个对象为session，中间件内部会将我们转换成正确的响应头
var cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'sid',
    keys: ['黑马程序员'], //中间件会对cookie数据进行加密，该参数设置加密的钥匙
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours  //cookie有效期 单位毫秒
    //一般网站cookie的有效期是一天
}));

//6配置路由
app.use(require('./router/article_router.js'));
app.use(require('./router/user_router.js'));

/**************首页的展示 */
//1 导入 mongoose模块
var mongoose = require('mongoose');
//2 链接数据库
mongoose.connect('mongodb://localhost/07hmclub');

var articleModel = require('./models/article_model.js');
//由于首页是比较简单的一个页面，所以直接在app.js里面处理
app.get('/', function (req, res) {
    articleModel.find(function (err, docs) {
        if (err) {
            throw err;
        }
        var user = req.session.user;
        res.render('index.html', {
            articles: docs,
            user: user
        })
    })
})

//7.监听端口号
app.listen(3000, function () {
    console.log('欢迎来到黑马14期吹水俱乐部');
})