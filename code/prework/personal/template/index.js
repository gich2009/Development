//document.getElementById("demo").innerHTML = "My First JavaScript";

//const button = document.getElementById("notify");
//button.addEventListener('click', function(){button.innerHTML = "Clicked";});


document.addEventListener("DOMContentLoaded", function(){
  const button = document.getElementById("notify")
  button.addEventListener('click', function(){
    button.innerHTML = "Clicked";
  })
});


//Example 3
// const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh"; // CityBike Data from data.gov
// fetch(url)
//    .then(function(response){
//      return response.json()
//    }).then(console.log)


//Example 2   
//const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh"; // CityBike Data from data.gov
//fetch(url).then(console.log)
// Response {type: "cors", url: "https://data.cityofnewyork.us/api/views/p94q-8hxh", redirected: false, status: 200, ok: true, …}



//BONUS problem
// function getJSON (url){
//   return fetch (url)
//    .then(function(response){
//             return response.json()});
// }

// getJSON(url).then(console.log);


//Question 1
// console.log("Hello")
// const url2 = 'https://randomuser.me/api/';

// fetch(url2)
//   .then( res => res.json() )
//   .then( data => {
//     console.log("Hi") 
//   })

// console.log("Sup?")


//Question 2
// function fetchData(){
//         let data = fetch('https://randomuser.me/api/')
//           .then( res => res.json() )
//           .then( res => res )
//         console.log(data)
// }

// fetchData()


// function fetchData(){
//         let data = fetch('https://randomuser.me/api/')
//           .then( res => res.json() )
//           .then( json => console.log(json) )
// }

// fetchData()


// function fetchData(){
//         let data = fetch('https://randomuser.me/api/')
//           .then( res => res.json() )
//           .then( console.log )
// }

// fetchData()

// let telephone = {
//   origin: "home phone",
//   answer: function(){
//     return `Hello, ${this.origin} called the function.`;
//   }
// };

// let answer = telephone.answer;
// console.log(answer());


// var telephone = {
//   answer: function() {
//     console.log(`Hello, ${this.origin} called the function`);
//   }
// };

// var cellphone = {
//   origin: "cell phone"
// };

// cellphone.answer = telephone.answer;
// cellphone.answer();


//arrow functions do not work in objects.
// var telephone = {
//   origin: "home phone",

//   answer: (obj) => {
//     console.log(`Hello, ${obj.origin} called the function`);
//   },

// };

// telephone.answer();