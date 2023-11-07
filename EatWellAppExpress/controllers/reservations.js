var Restaurants = require("../modeles/restaurants");

const index = async(req , res)=>{
  const user = req.user;
  if(!user) return res.statut(401).send("Utilisateur non autorisé")

  try{
    const restaurants = await Restaurants.find().toArray();
    res.status(200).send(restaurants)
  }catch(err){
    console.log(err);
    res.status(500).send("Something went wrong")
  }
};

const show = async(req , res)=>{
  
};

const store = async(req , res)=>{
  
};

const destroy = async(req , res)=>{
  
}

module.exports = { index , show , store , destroy }