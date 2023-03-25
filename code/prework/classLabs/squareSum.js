function squareSum(numbers){
  let option = "option3";
  
  if (option === "option1"){
    return numbers.reduce(function (accumulator, element){ return accumulator + element ** 2}, 0);
  }

  if (option === "option2"){
  function squareSumHelper(index){
    if (index === 0)
      return numbers[index] ** 2;
    return numbers[index] ** 2 + squareSumHelper(--index);

  }

  return squareSumHelper(numbers.length - 1);
  }

  if (option === "option3"){
    let accumulator = 0;
    for (let index = 0 ; index < numbers.length ; ++index){
      accumulator += numbers[index] ** 2;
    }
    return accumulator;
  }
}

console.time();
console.log(squareSum(new Array(10).fill(1e8)));
console.timeEnd();
