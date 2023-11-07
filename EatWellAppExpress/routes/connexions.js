var Router = require("express").Router();
var auhtentication =  require("../middlewares/authentification")
var { login ,  logout ,  register , authentifyMe } = require("../controllers/connexions")

Router.post("/signin" , login);
Router.get("/signout" , logout);
Router.post("/signup" ,  register);
Router.get("/authentifyMe" , auhtentication , authentifyMe)

module.exports = Router