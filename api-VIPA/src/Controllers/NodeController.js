const express = require('express');

const Node = require('../models/node');

const router = express.Router();

router.post('/node-map', async (req, res) => {
	try {
		const node = await Node.create(req.body);
		return res.send({ node });
	} catch (error) {
		return res.send(error);
	}
});

module.exports = app => app.use('/node', router);