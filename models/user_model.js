//用户模型模块：负责用户数据的增删改查

//1.导入mongoose模块
var mongoose = require('mongoose');
//2.连接数据库
/***mongoose的使用流程中，第一步和第二步是可以复用的
 * 原因：通常我们一个中小型网站只需要一个数据库，而一个数据库中可以有很多张表（集合collections）
 * 在什么时候连接数据库：这个网站第一次需要用到数据库的时候（首页）
 */
//3.创建Schema：确定数据库的存储结构
var userSchema = mongoose.Schema({
    email:{type:String,required:true,index:true,unique:true},//用户的邮箱，不能为空，不能重复
    password:{type:String,required:true},//用户密码，不能为空
    avatar:{type:String,default:'/public/img/default_icon.png'},//用户头像，有默认值
    nickname:{type:String,required:true}//用户昵称，不能为空
},{
    timestamps:true//使用mongoose自动管理时间
});

//4.创建model：数据库的增删改查
var userModel = mongoose.model('User',userSchema);

//5.导出Model：因为在mongoose中，数据的增删改查是由model来负责
module.exports = userModel;