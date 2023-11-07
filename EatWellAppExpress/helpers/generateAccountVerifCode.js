const generateAccountVerifCode = ()=>{
  let randCode = "";

  for (let i=0 ; i<=6 ; i++){
    let randDigit = Math.floor(Math.random() * 9);
    randCode = randCode + randDigit;
  }

  return parseInt(randCode)
}

module.exports = generateAccountVerifCode;