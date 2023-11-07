const { ObjectId } = require("mongodb");
var mongoose = require("mongoose");
var Users = require("../modeles/users");

const consumersSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: false,
    default : ""
  },
  
  lastName: {
    type: String,
    required: false,
    default : ""
  },
  
  phone: {
    type: String,
    required: false,
    default : ""
  },

  country: {
    type: String,
    required: false,
    default : ""
  },

  town: {
    type: String,
    required: false,
    default : ""
  },

  residentialAddress: {
    type: String,
    required: false,
    default : ""
  },
  
  professionnalAddress: {
    type: String,
    required: false,
    default : ""
  },

  foodPreferences: {
    type: Array,
    required: false,
    default : []
  },

  createAt: {
    type: Date,
    required: true,
    default: Date.now()
  },

  profilPicture: {
    type: String,
    required: false,
    default: null
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Users,
    required: true
  }

})

const Consumers = mongoose.model("consumers" , consumersSchema)

module.exports = Consumers;