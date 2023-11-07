var Restaurants = require("../modeles/restaurants");
var fs = require("fs");
var checkAccountSetup = require("../helpers/checkAccountSetup");

const index = async(req , res)=>{
  const user = req.user;
  if(!user) return res.statut(401).send("Utilisateur non autorisé")

  try{
    const restaurants = await Restaurants.find();
    res.status(200).send(restaurants)
  }catch(err){
    console.log(err);
    res.status(500).send("Something went wrong")
  }
};

const show = async(req , res)=>{
  
};

const update = async (req, res) => { 
  if(req.user){
    const user = req.user;
    if(req.file && req.body){
      let data = req.body;
      data.profilPicture = req.file.path;
      try {
        const restaurantData = await Restaurants.findOneAndUpdate( { userId: user.id }, data );
        return res.status(200).send(await checkAccountSetup(restaurantData));
      } catch (err) {
        console.log("error" , err)
        return res.status(500).send("Server internal error");
      }
    }else if (req.file && !req.body) {
      const file = req.file.path;
      try {
        const restaurantData = await Restaurants.findOneAndUpdate( { userId: user.id }, { profilPicture : file } );
        return res.status(200).send(await checkAccountSetup(restaurantData));
      } catch (err) {
        console.log("error" , err)
        return res.status(500).send("Server internal error");
      }
    }else if (!req.file && req.body) {
      const  data = req.body
      console.log("data" , data);
      try {
        const restaurantData = await Restaurants.findOneAndUpdate( { userId: user.id } , data );
        return res.status(200).send(await checkAccountSetup(restaurantData));
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

const destroy = async(req , res)=>{
  
}

module.exports = { index , show , update , destroy }