var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require("dotenv")
dotenv.config();
var cors = require("cors")
var authentication = require("./middlewares/authentification");


var userRoutes =  require("./routes/users");
var consumersRoutes =  require("./routes/consumers");
var restaurantsRoutes =  require("./routes/restaurants");
var reservationsRoutes =  require("./routes/reservations");
var ratingsRoutes =  require("./routes/ratings");
var connexionsRouter = require("./routes/connexions")

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('upload'))
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin" , "*");
  res.setHeader("Access-Control-Allow-Methods" , "POST , GET , PUT , PATCH");
  res.setHeader("Access-Control-Allow-Headers" , "*");
  next();
});

app.use("/" , connexionsRouter);
app.use("/users", authentication , userRoutes);
app.use("/consumers" , authentication, consumersRoutes);
app.use("/restaurants" , authentication,  restaurantsRoutes);
app.use("/reservations",authentication, reservationsRoutes);
app.use("/ratings" ,authentication, ratingsRoutes);


module.exports = app;
