//function keyword
function add(){

}

//function declaration
var add = function(inputs){

}

//arrow function

var add =inputs=>inputs


//higher order function
var id=setInterval(function(){
    console.log("hi")
},2000)

clearInterval(id);


var numbers=[1,2,35,6,8,3];
// numbers.push(9);
// // numbers.pop();
 numbers.unshift(12);
 console.log(numbers.indexOf(35))
 console.log(numbers.slice())

 numbers.splice(3,1)

 //map

//  for(var i=0;i<numbers.length;i++){
//      console.log(numbers[i]);
//  }

numbers.forEach((number,index,numbers)=>{
  console.log(number)
})


//map
var numbersNew=numbers.map((number,index,numbers)=>{
    return "swadhin"});

 //filter
//  var filteredNumbers=  numbers.filter((number)=>{
//   if(number ==6){
//       return true
//   }
//  }) 
 var filteredNumbers=  numbers.filter(number=>number >=6) 

 //sort

//  var sortedNumbers = numbers.sort((x, y) => {
//    if (x > y) {
//      return 1;
//    } else {
//      return -1;
//    }
//  });

 var sortedNumbers = numbers.sort((x, y) =>y-x);

console.log(numbers)
console.log(numbersNew)
console.log(filteredNumbers)