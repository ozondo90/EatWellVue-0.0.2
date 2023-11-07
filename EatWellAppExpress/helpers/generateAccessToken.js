var jwt = require("jsonwebtoken");

function generateAccesToken(data){
  return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '100000s' });
}


module.exports = generateAccesToken;