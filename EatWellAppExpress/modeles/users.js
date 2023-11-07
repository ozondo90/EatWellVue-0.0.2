var mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email : {
    type : String,
    unique : true,
    required : true,
    trim : true
  },

  password: {
    type : String,
    required : true,
    trim : true
  },

  userName : {
    type :  String,
    required : true,
    trim : true,
    maxLength : 10,
    minLength : 5
  },

  accountType : {
    type : String,
    required : true,
    enum : ["consumer" , "restaurant"]
  },

  createAt : {
    type : Date,
    require : true,
    default : Date.now()
  },

  verifCode : {
    type : Number,
    required : true
  },

  emailVerify : {
    type : Boolean,
    default : false
  },

  accountSetLevel : {
    type : String,
    default : "0"
  }
  
})


const Users = mongoose.model("users" , userSchema)

module.exports = Users