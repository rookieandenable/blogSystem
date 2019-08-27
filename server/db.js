const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/data'

mongoose.connect(url, {useNewUrlParser: true}, function(err) {
    if(err) {
        console.log('连接失败')
    } else {
        console.log('db连接成功')
    }
})

/************** 定义模式loginSchema **************/
const userSchema = mongoose.Schema({
    name : String,
    password : String
});

const articleSchema = mongoose.Schema({
    title : String,
    date : String,
    content : String,
    gist : String,
    labels : Array
});

/************** 定义模型Model **************/
const Models = {
    User : mongoose.model('User',userSchema),
    Article : mongoose.model('Article',articleSchema)
}

module.exports = Models