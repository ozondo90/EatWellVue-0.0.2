var generateAccesToken = require("../helpers/generateAccessToken");
var generateAccountVerifCode = require("../helpers/generateAccountVerifCode");
var bcrypt = require("bcrypt");
var Users = require("../modeles/users");
var Consumers = require("../modeles/consumers");
var restaurants = require("../modeles/restaurants");
const Restaurants = require("../modeles/restaurants");

const login = async (req, res) => {
  const datas = req.body;
  console.log(datas)
  if (datas.email.trim() == "" || datas.password.trim() == "") {
    return res.sendStatus(422);
  }

  try {
    const user = await Users.findOne({ email: datas.email.trim() });
    const isPasswordConfirm = await bcrypt.compare(
      datas.password.trim(),
      user.password
    );

    if (!user || !isPasswordConfirm) return res.sendStatus(401); //Unauthorized

    const token = generateAccesToken({
      id : user._id,
      email: user.email,
      userName: user.userName,
      accountType: user.accountType,
      emailVerify: user.emailVerify,
      isSetAccount: user.isSetAccount,
    });
    return res.status(200).send(token);
  } catch (err) {
    return res.sendStatus(500);
  }
};

const logout = (req, res) => {
  console.log("ok");
};

// controller that store new user into the database
const register = async (req, res) => {
  let datas = req.body;
  const accounts = ["consumer", "restaurant"];
  if (
    datas.email.trim() == "" ||
    datas.password.trim() == "" ||
    datas.userName.trim() == "" ||
    !accounts.includes(datas.accountType)
  ) {
    return res.sendStatus(422);
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassWord = await bcrypt.hash(datas.password, salt);

    const newUser = new Users({
      email: datas.email,
      password: hashPassWord,
      userName: datas.userName,
      accountType: datas.accountType,
      verifCode: generateAccountVerifCode(),
    });

    const { _id, accountType } = await newUser.save();

    if (accountType == "consumer") {
      await Consumers.create({
        userId: _id,
      });
    }

    if (accountType == "restaurant") {
      await Restaurants.create({
        userId: _id,
      });
    }

    return res.sendStatus(201);
  } catch (err) {
    console.log(err.message);
    return res.sendStatus(500);
  }
};

const authentifyMe = async (req, res, next) => {
  if (req.user) {
    const user = req.user;
    switch (user.accountType) {
      case "consumer" :
         const consumer = await Consumers.findOne({ userId : user.id }).populate("userId");
         return res.status(200).send(consumer);
      case "restaurant" : 
         const restaurant = await Restaurants.findOne({userId : user.id}).populate("userId");
         return res.status(200).send(restaurant);
      default : return res.status(200).send(user);
    }
  }
  
  return res.sendStatus(403);
};

module.exports = { login, logout, register, authentifyMe };
