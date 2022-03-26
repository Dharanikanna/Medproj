// This file is the server of this project

// Importing required modules 
'use strict';
const cors = require('cors');
const express = require('express')
const morgan = require('morgan')
const app = express()
require('dotenv').config()



require('./helpers/init_db')
const authroute = require('./routers/authrouter')
const {verifyAccessToken} = require('./helpers/init_jwt');

app.use(morgan('dev'))
//json get and post permission

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(cors());

//api end points

app.get('/home',verifyAccessToken, async (req, res, next) => {
  // console.log(req.headers['authorization'])
  res.send({
    message: 'Hello User'
  });
});

app.use('/users',authroute)

const port = process.env.PORT || 8080
app.use(cors({
  origin: '*'
}));
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

// to start app use the command => nodemon app.js