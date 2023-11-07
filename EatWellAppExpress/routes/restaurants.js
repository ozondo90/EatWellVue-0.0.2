var Router = require("express").Router();
var { index , show ,  update , destroy } = require("../controllers/restaurants");
var upload = require("../middlewares/upload");

Router.get("/" , index);
Router.get("/:id" , show);
Router.patch("/" ,upload.single("file") ,  update);
Router.get("/" ,  destroy);

module.exports = Router