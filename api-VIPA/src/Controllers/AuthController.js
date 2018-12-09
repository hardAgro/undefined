const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({ user });
    } catch (error) {
        return res.send(error);
    }
});

router.get('/list',async (req, res) => {
    try {
        const users = await User.find({});
        return res.send({users});
    } catch (error) {
        return res.send(error);
    }
});

module.exports = app => app.use('/auth', router);