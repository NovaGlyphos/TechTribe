const express = require('express');
const {connectDB} = require("./config/database");
const cookieParser = require('cookie-parser');

// Instance of application
const app = express(); 

//Import User model so that we can create instance of User model
const User = require("./models/user");

//middlwares
app.use(express.json());    // convert json of request to js object
app.use(cookieParser());    // Used for parsing through cookies

// Managing the routes
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');
const requestRouter = require('./routes/request');
const userRouter = require('./routes/user');

app.use('/',authRouter);
app.use('/',profileRouter);
app.use('/',requestRouter);
app.use('/',userRouter);



//Connecting to DB and listening to the application
connectDB()
    .then(()=>{
        console.log("Database connection established......");
        app.listen(3000,()=>{
            console.log('server is running at port 3000');
        });
    })
    .catch((err)=>{
        console.errpr("Database cannot be connected");
    });





