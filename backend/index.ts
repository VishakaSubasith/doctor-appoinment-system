const express = require('express');
const path = require('path');
const userRouter = require('./src/routes/user/index');
const appoinmentRouter = require('./src/routes/appoinment/index');
const categoryRouter = require('./src/routes/category/index');

const conn = require('./src/db/connection');
const mongooseConnect = require('mongoose')

const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use('/user',userRouter);
app.use('/appoinment',appoinmentRouter);
app.use('/category',categoryRouter);


mongooseConnect.connect(conn.database);
const connection = mongooseConnect.connection;
connection.once('open',()=>{
  console.log("Mongodb database connection established successfully");
})

app.listen(port);
console.log('Server started at http://localhost:' + port);