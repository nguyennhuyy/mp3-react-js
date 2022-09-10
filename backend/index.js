const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//connect db
mongoose.connect(process.env.MONGODB_URL, () => {
	console.log('connect sucess DB');
});

//routes
app.use('/v1/auth', authRoute);

app.listen(8000, () => {
	console.log('server is running');
});
