const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();
router.use(express.json());

router.get('/', (req, res) => {
	res.send('this is the user route');
});

router.post('/', (req, res) => {
	const { body } = req;
	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	let mailOptions = {
		from: process.env.EMAIL,
		to: process.env.RECEIVER,
		subject: 'Mail from real-estate application',
		text: `Hii Radheshyam Jha , I want to connect with you \n \n Name : ${body.name} \n Email : ${body.email} \n Subject : ${body.subject} \n Website : ${body.website} \n \n Message : ${body.message} \n`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) res.status(500).send({ mes: 'some error occured' });
		else res.status(200).send({ mes: 'mail send successfully' });
	});
});

module.exports = router;
