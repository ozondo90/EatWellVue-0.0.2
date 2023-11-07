const { Timestamp } = require("mongodb");
var mongoose = require("mongoose");
var Users = require("../modeles/users");

const restaurantsSchema = mongoose.Schema({
  restaurantName: {
    type: String,
    required:  false,
    default: null
  },

  emailContact: {
    type: String,
    required:  false,
    default: null
  },
  
  phone: {
    type: String,
    required:  false,
    default: null
  },

  country: {
    type: String,
    required: false,
    default : null
  },

  town: {
    type: String,
    required: false,
    default : null
  },

  professionnalAddress: {
    type: String,
    required: false,
    default : null
  },
  
  openingTime: {
    type: String,
    required:  true,
    default: "08:30"
  },

  closingTime: {
    type: String,
    required:  true,
    default: "23:30"
  },

  profilPicture : {
    type : String,
    required : false,
    default: null
  },

  createAt: {
    type: Date,
    required: true,
    default: Date.now()
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref : Users,
    required: true
  },
  
  longitude : {
    type : String,
    required : false,
    default : "00.00"
  },

  latitude : {
    type : String,
    required : false,
    default : "00.00"
  },

  carteGastro : {
    type : Array,
    required : false,
    default : null
  },

  openingDays : {
    type : Array,
    required : false,
    default : null
  }
});


const Restaurants = mongoose.model("restaurants" , restaurantsSchema)

module.exports = Restaurants