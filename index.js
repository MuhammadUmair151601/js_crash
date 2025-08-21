
// function askdetails(){
// let age = +prompt('Please enter your age:')
// let gender = prompt('please enter your gender:')

// document.querySelector('#btn').innerText=`age ${age}gender ${gender}`;
// if (gender === 'Female')
// {
//   alert('You got 50% discount');
// }
// else if(age < 5 && gender=== 'Male' || gender === 'Female'){
//   alert('you are completely free')
// }
// else if(age > 5 && age <=8 && gender=== 'Male')
// {
//   alert('you got half ticket')
// }
// else if(age > 8 && age <= 65 && gender === 'Male'){
//   alert('please pay the ticket fee in full')
// }
// else if(age > 65 && gender === 'Male'){
//   alert('you got free ticket')
// }
// else if(age < 5 && gender === 'Female') {
//   alert ('you get full discount')
// }
// else if(gender === 'Female' && age > 5 && age <=8)
// {
//   alert('you got full discount')
// }
// else{
//   alert('please insert the correct values:')
// }
// }
// functions, return and parameters done;
// functions completed:
// function numbers(num){
//   // +prompt('please put a number');
//   if(num%2 === 0){
//     console.log('its an even number');
//   }else if(num%2 !== 0){
//     console.log('its an odd number')
//   }else{
//     console.log('plaese put a valid number');
//   }
//   return num;
// }
// console.log(numbers(10));
// console.log(numbers(13));
// console.log(numbers(14));

// function compare(num1, num2){
  
//   if(num1>num2){
//     return(`${num1} is greater than ${num2}`);
//   }else if(num2>num1){
//     return(`${num2} is greater than ${num1}`);
//   }else{
//     return('plaese put a valid number');
//   }
// }
// console.log(compare(10,12));
// console.log(compare(13,9));
// console.log(compare(14,23));

// function convert(C){
//   return ((9/5)*C + 32);
// }

// console.log(convert(37));
// Objects
// syntax
// obj methods
// Json -- Js object notation.
// same as JS object but here the key values are inside the " ". means the key values are also strings.
// Local storage
// date 
// DOM
// Array
// Array.isarray(); true or false
// array.length; shows the num of elements.
// push / pop add or remove element to end.
// shift / unshift add or remove element to start.
// arr.splice used to delete or add specific no of elements.(1, 2) 1st se start karo 2 ko delete karo.
// tostring convert the array to string.
// arr.sort() sort the elements in arr.
// Loops
// let num = 1;
// while(num <=10){
//   console.log(num);
//   num++;
// }
// do while
// let num = 1;
// do {
//   console.log(num);
//   num++
// }
// while(num <=10)
// runs at least once:
// FOR:
// for (initialization; condition; increment or decrement:){
// statement }
// array exercise:
// anonymous function
// arrow function
// timeout function
// let alarm = function(){
//   console.log('subha hogayi hay beta')
// }
// setTimeout(alarm, 7000)
// Cleartimeout(timerID)
// set interval
// let alarm = function(){
//     console.log('subha hogayi hay beta')
//   }
//   setInterval(alarm, 5000)
// clearinterval:
// eventlisteners:
// addeventlistener
// let buttonElement = document.querySelector('#btn');
// buttonElement.addEventListener('click', event =>
// {console.log('i am clicked')});