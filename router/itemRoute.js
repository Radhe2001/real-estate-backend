const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
router.use(express.json());
const Property = require('../db/model/property');

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, 'public/Images');
	},
	filename: (req, file, callback) => {
		callback(
			null,
			file.fieldname + '_' + Date.now() + path.extname(file.originalname)
		);
	},
});

const upload = multer({
	storage: storage,
});

router.post('/', upload.single('file'), (req, res) => {
	const { file, body } = req;
	const property = new Property({
		name: body.name,
		rooms: body.rooms,
		area: body.area,
		cost: body.cost,
		year: body.year,
		type: body.type,
		image: file.filename,
		description: body.description,
		location: body.location,
	});

	property
		.save()
		.then((data) => res.status(200).send({ mes: 'saved successfully' }))
		.catch((err) =>
			res.status(500).send({ mes: 'failed to save the data' })
		);
});

router.get('/:type', (req, res) => {
	Property.find({ type: req.params.type })
		.then((data) => res.status(200).send({ data: data }))
		.catch((err) => res.status(500).send({ err: err }));
});

router.post('/all', (req, res) => {
	Property.find({})
		.then((data) => res.status(200).send({ data: data }))
		.catch((err) => res.status(500).send({ err: err }));
});

router.delete('/delete/:id', (req, res) => {
	const id = req.params.id;
	Property.findByIdAndDelete(id)
		.then((data) => res.status(200).send({ mes: 'deleted successfully' }))
		.catch((err) => res.status(500).send({ mes: 'failed to delete' }));
});

module.exports = router;
