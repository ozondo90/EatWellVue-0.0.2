var mongoose = require("mongoose");

var initMongoClient = async ()=>{
  try{  
    await mongoose.connect(process.env.DB_CONNEXION_STR)
    console.log("Connexion successfully establish to the mongodb database")
  }catch(err){
    console.log(err.message)
  }
};

module.exports = initMongoClient;