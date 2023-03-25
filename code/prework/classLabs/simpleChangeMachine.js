function changeMe(moneyIn){
  // Write your function here
  if (moneyIn !== "£5" && moneyIn !== "£2" && moneyIn !== "£1" && moneyIn !== "50p" && moneyIn !== "20p"){
    return moneyIn;
  }
  
  
  if (moneyIn[0] === "£"){
    let money = moneyIn.substring(1);
    money = Number(money);
    money *= 100;
    return calculateChange(money);
  }
  
  if (moneyIn[moneyIn.length - 1] === "p"){
    let money = moneyIn.substring(0, moneyIn.length - 1);
    money = Number(money);
    return calculateChange(money);
  }
  
  return "Check whether the currency format is correct.";
  
  
  function calculateChange(money){
    let changeString = "";
  
    if (money !== 20){
      while (money >= 20){
        changeString += "20p ";
        money -= 20;
      } 
    }
  
    while (money >= 10){
      changeString += "10p ";
      money -= 10;
    }
  
    changeString = changeString.substring(0, changeString.length - 1);
  
    return changeString;
  }
}