const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
router.use(express.json());
const User = require('../db/model/user');

router.get('/', (req, res) => {
	res.send('this is the user route');
});

router.post('/register', (req, res) => {
	const { body } = req;
	const user = new User(body);
	user.save()
		.then((response) => res.status(200).send({ user: user }))
		.catch((err) => res.status(500).send({ err: err }));
});

router.post('/login', (req, res) => {
	const { body } = req;
	User.findOne({ email: body.email })
		.then((user) => {
			if (user === null) res.status(404).send({ msg: 'user not found' });
			else {
				if (user.password !== body.password)
					res.status(402).send({ msg: "password didn't match" });
				else {
					const token = jwt.sign(
						{ id: user._id, email: user.email },
						process.env.SECRET
					);
					res.status(200).send({ token: token });
				}
			}
		})
		.catch((err) => res.status(500).send({ mes: 'some error occured' }));
});

module.exports = router;
