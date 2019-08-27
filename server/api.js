// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const db = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

//注册用户
router.post('/api/admin/signup', (req, res) => {
    new db.User(req.body.userInfo).save(function (err) {
        if (err) {
            res.status(500).send();
            return
        }
        res.send();
    })
});

//登录
router.post('/api/admin/signin', (req, res) => {
    res.send();
});

// 根据用户名获取用户
router.get('/api/admin/getUser/:name', (req, res) => {
    // 通过模型去查找数据库
    db.User.findOne({
        name: req.params.name
    }, (err, docs) => {
        if (err) {
            res.send(err);
        } else {
            res.send(docs);
        }
    });
});

// 文章详情页
router.get('/api/articleDetail/:id', function (req, res) {
    db.Article.findOne({
        _id: req.params.id
    }, function (err, docs) {
        if (err) {
            return
        }
        res.send(docs)
    })
})

// 获取所有文章
router.get('/api/articleList', function (req, res) {
    db.Article.find({}, function (err, docs) {
        if (err) {
            return
        }
        res.json(docs)
    })
})

// 文章保存
router.post('/api/admin/saveArticle', function (req, res) {
    new db.Article(req.body.articleInformation).save(function (err) {
        if (err) {
            res.status(500).send();
            return
        }
        res.send();
    });
});

// 文章更新
router.post('/api/admin/updateArticle', function (req, res) {
    let info = req.body.articleInformation
    db.Article.find({
        _id: info._id
    }, function (err, docs) {
        if (err) {
            return
        }
        docs[0].title = info.title
        docs[0].date = info.date
        docs[0].content = info.content
        docs[0].gist = info.gist
        docs[0].labels = info.labels
        db.Article(docs[0]).save(function (err) {
            if (err) {
                res.status(500).send()
                return
            }
            res.send()
        })
    })
})

// 文章删除
router.post('/api/admin/deleteArticle', function (req, res) {
    db.Article.remove({
        _id: req.body._id
    }, function (err) {
        if (err) {
            res.status(500).send()
            return
        }
        res.send()
    })
})

module.exports = router;