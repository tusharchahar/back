import cors from 'cors';
import express from 'express';
import { services } from './services';
import mongoose from 'mongoose';
import https from 'https';
import fs from 'fs';

const app = express();
const MONGO_URL='mongodb+srv://tusharchahar:X4LE73swa5yF*Aq@cluster.aab0tfl.mongodb.net/tara?retryWrites=true&w=majority';

// middleware for json parsing
app.use(express.json());

// middleware for allow cross origin request
app.use(cors());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', "GET, PUT, POST, PATCH");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
 });


app.use('/api', services);

mongoose.connection.on('open',()=>{
	console.log('connected to database');
})

const port = process.env.PORT || 8081;
(async()=>{
	await mongoose.connect(MONGO_URL);
	//  https.createServer({
	//  	key:fs.readFileSync('./key2.pem'),
	//  	cert: fs.readFileSync('./cert2.pem')
	 app.listen(port, () =>
	console.log(`application is running on :${port}`)
);
})();



