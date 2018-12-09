const express = require('express');

const Node = require('../models/node');

const router = express.Router();

router.post('/node-map', async (req, res) => {
	try {
		res.setHeader('Access-Control-Allow-Origin','*');
		const node = await Node.create(req.body);
		return res.send({ node });
	} catch (error) {
		return res.send(error);
	}
});

router.get('/list',async (req, res) => {
    try {
		res.setHeader('Access-Control-Allow-Origin','*');
		const nodes = await Node.find({});
        return res.send({nodes});
    } catch (error) {
        return res.send(error);
    }
});

module.exports = app => app.use('/node', router);