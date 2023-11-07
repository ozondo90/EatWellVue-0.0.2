var Consumers = require("../modeles/consumers");
var fs = require("fs");
var checkAccountSetup = require("../helpers/checkAccountSetup")

const index = async (req, res) => {};

const show = async (req, res) => {};

const update = async (req, res) => {
  
  if(req.user){
    const user = req.user;
    if(req.file && req.body){
      let data = req.body;
      console.log(req.file)
      data.profilPicture = req.file.path;
      try {
        const consumerData = await Consumers.findOneAndUpdate( { userId: user.id }, data );
        return res.status(200).send(await checkAccountSetup(consumerData));
      } catch (err) {
        console.log("error" , err)
        return res.status(500).send("Server internal error");
      }
    }else if (req.file && !req.body) {
      const file = req.file.path;
      try {
        const consumerData = await Consumers.findOneAndUpdate( { userId: user.id }, { profilPicture : file } );
        return res.status(200).send( await checkAccountSetup(consumerData));
      } catch (err) {
        console.log("error" , err)
        return res.status(500).send("Server internal error");
      }
    }else if (!req.file && req.body) {
      const  data = req.body
      try {
        const consumerData = await Consumers.findOneAndUpdate( { userId: user.id }, data );
        return res.status(200).send( await checkAccountSetup(consumerData));
      } catch (err) {
        console.log("error" , err)
        return res.status(500).send("Server internal error");
      }
    }else{
      return res.status(422).send("Unprocessable entries");
    }
  }
  
  return res.status(403).send("Access Forbidden");
};

const destroy = async (req, res) => {};

module.exports = { index, show, update, destroy };
