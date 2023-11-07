var Router = require("express").Router();
var { index , show ,  store , destroy } = require("../controllers/ratings")

Router.get("/" , index);
Router.get("/:id" , show);
Router.post("/" ,  store);
Router.get("/" ,  destroy);

module.exports = Router