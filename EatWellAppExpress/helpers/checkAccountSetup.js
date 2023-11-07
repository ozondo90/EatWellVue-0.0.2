var Users =  require("../modeles/users");
var Consumers = require("../modeles/consumers");
var Restaurants = require("../modeles/restaurants");


const dataAttributes = {
  "basic-infos": ["firstName", "lastName", "phone", "profilPicture"],
  "business-infos": [
    "restaurantName",
    "emailContact",
    "profilPicture",
    "openingDays",
  ],
  "location": [
    "country",
    "town",
    "residentialAddress",
    "professionnalAddress",
    "longitude",
    "latitude",
  ],
  "preferences": ["foodPreferences", "carteGastro"],
};

const getEmptyElement = (data) => {
  for (const element in data) {
    if (
      dataAttributes["basic-infos"].includes(element) ||
      dataAttributes["business-infos"].includes(element) ||
      dataAttributes["location"].includes(element) ||
      dataAttributes["preferences"].includes(element)
    ) {
      if (!data[element]) {
        return element; // Return the key with an empty value
      }
    }
  }
  return true; // Return true if all keys have non-empty values
};

const checkAccountSetup = async (data)=>{
  for(item in dataAttributes){
    if(dataAttributes[item].includes(getEmptyElement(data))){
      
      const user = await Users.findByIdAndUpdate(data.userId , {accountSetLevel : item} , {new : true});
      
      switch (user.accountType) {
        case "consumer" :
           const consumer = await Consumers.findOne({ userId : user.id }).populate("userId");
           return consumer
        case "restaurant" : 
           const restaurant = await Restaurants.findOne({userId : user.id}).populate("userId");
           return restaurant
      }
    }
  }

  const user = await Users.findByIdAndUpdate(data.userId , {accountSetLevel : "1"} , {new : true});
  switch (user.accountType) {
    case "consumer" :
       const consumer = await Consumers.findOne({ userId : user.id }).populate("userId");
       return consumer
    case "restaurant" : 
       const restaurant = await Restaurants.findOne({userId : user.id}).populate("userId");
       return restaurant
  }
}

module.exports = checkAccountSetup;
