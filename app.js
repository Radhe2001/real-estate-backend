const express = require('express');
const cors = require('cors');
const path = require('path');
require('./db/config');
require('dotenv').config();
const app = express();
app.use(
	cors({
		origin: '*',
	})
);
app.use(express.static(path.join(__dirname, 'public')));
const user = require('./router/userRoute');
const contact = require('./router/contactRoute');
const item = require('./router/itemRoute');
const search = require('./router/searchRoute');
app.use('/user', user);
app.use('/contact', contact);
app.use('/add', item);
app.use('/search', search);

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.send('Your application is up and running');
});

app.listen(PORT, () => {
	console.log('server is up on port : ' + PORT);
});
