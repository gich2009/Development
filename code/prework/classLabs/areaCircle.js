//globall variable declaring PI.
const PI = 3.14159;

//Arrow function
//Takes a radius for a circle and returns its area.
const areaCircleArrow = (radius) => PI * radius ** 2;

console.log("The area calculated using a normal function is: ", areaCircleNormal(7));
console.log("The area calculated using an arrow function is: ", areaCircleArrow(7));

//Normal function
//Takes a radius for a circle and returns its area.
//areaCircleNormal (radius: number): number.
function areaCircleNormal (radius){
  return PI * radius ** 2;
}