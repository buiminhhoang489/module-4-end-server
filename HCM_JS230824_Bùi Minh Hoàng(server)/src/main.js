import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const server = express();

import bodyParser from 'body-parser';
server.use(bodyParser.json());


import {connect} from './mysql.js'
connect();

server.listen(process.env.PORT, () =>{
    console.log(`Server on at: http://${process.env.HOST}:${process.env.PORT} `)
})