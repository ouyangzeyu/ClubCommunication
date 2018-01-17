//错误处理模块：作用，封装整个项目所有的错误码 好处：让你的代码修改最少

//将所有的错误编码集中管理，便于维护

/*状态码
0：请求成功
500：请求失败
1000：功
1001：用户名登录成或密码错误
2000：注册成功
2001：邮箱已注册
9999：服务器维护中
*/


module.exports = function(code,err){
    
        var errData;
        var message;
    
        switch(code){
            case 0:
                message = '请求成功';
                break;
            case 500:
                message = err || '请求失败';
                break;
            case 1000:
                message = '登录成功';
                break;
            case 1001:
                message = '用户名或密码错误';
                break;
            case 2000:
                message = '注册成功';
                break;
            case 2001:
                message = '该邮箱已注册';    
                break;
            case 9999:
                message = '服务器维护';
                break;
    
            default:
                message = '未知错误';
                break;
        }
    
        errData = {
            err_code : code,
            err_message : message
        };
    
        return errData;
    };