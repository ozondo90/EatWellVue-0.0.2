var Router = require("express").Router();
var { index , show , destroy } = require("../controllers/users")

Router.get("/" , index);
Router.get("/:id" , show);
Router.get("/" ,  destroy);

module.exports = Router