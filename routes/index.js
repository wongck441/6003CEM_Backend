var express = require('express');
var router = express.Router();
var cors = require('cors')
var db = require('../config')
var account = require('./accountFunctions')
var dog = require('./dogFuntions')
router.use(cors())

router.post('/account/login', (req, res) => {
    return account.login(req.body).then((x) => {
        res.send(x)
        return x
    })
})

router.post('/account/register', (req, res) => {
    return account.register(req.body).then((x) => {
        res.send(x)
        return x
    })
})

router.get('/dog/getList', function(req, res, next) {
    return dog.getDogList().then((x) => {
        res.send(x)
        return x
    })
});

router.post('/dog/add', (req, res) => {
    return dog.create(req.body).then((x) => {
        res.send(x)
        return x
    })
})

router.post('/dog/edit', (req, res) => {
    return dog.edit(req.body).then((x) => {
        res.send(x)
        return x
    })
})

router.post('/dog/remove', (req, res) => {
    return dog.remove(req.body).then((x) => {
        res.send(x)
        return x
    })
})


module.exports = router;