var jwt = require("jsonwebtoken");

function authentication(req , res , next){
  const authHeader = req.headers.authorization;
  if(!authHeader){
    return res.sendStatus(401); //not authenticated
  }
  
  const token = authHeader.split(" ")[1];

  jwt.verify(token , process.env.ACCESS_TOKEN_SECRET , function (err , userInfo){
    
    if(err || !userInfo){
      
      // return res.sendStatus(403); 
      // unauthorize headers
      console.log(err)
      return next();
    }
    req.user = userInfo;
    return next();
  });
}

module.exports = authentication;