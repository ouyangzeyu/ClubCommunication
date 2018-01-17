//负责文章数据的增删改查

var mongoose = require('mongoose');

//创建Schema
var articleScheme = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    articleType: {
        type: String,
        default: 'chuishui'
    }
}, {
    timestamps: true
})
//创建model
var articleModel = mongoose.model('Article', articleScheme);

//导出
module.exports = articleModel;