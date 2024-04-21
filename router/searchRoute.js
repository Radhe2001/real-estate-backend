const express = require('express');
const router = express.Router();
router.use(express.json());
const Property = require('../db/model/property');

router.get('/:input', (req, res) => {
	Property.find({
		$or: [
			{ location: { $regex: `.*${req.params.input}.*`, $options: 'i' } },
			{ name: { $regex: `.*${req.params.input}.*`, $options: 'i' } },
			{ cost: { $regex: `.*${req.params.input}.*`, $options: 'i' } },
			{ type: { $regex: `.*${req.params.input}.*`, $options: 'i' } },
		],
	})
		.then((data) => {
			res.status(200).send({ data: data });
		})
		.catch((err) => res.status(500).send({ err: err }));
});

module.exports = router;
