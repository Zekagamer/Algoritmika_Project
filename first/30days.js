/* 
let a = 10
let b = 15
console.log(a+=b)

console.log(a != b)
*/
// ternar if else kimi 
/*
let myNum = 7
myNum > 0
  ? console.log(`${myNum} greater than 0`)
  : console.log('false')
  */
 /*
 alert('salam')
 let myNum = prompt('Enter a int number')
 console.log(myNum)

 let goDelete = confirm('Are you sure?')
 goDelete
  ? console.log("its deleted")
  : console.log("its canceled")

  let date = new Date()
  console.log(date.getFullYear())
  */


/*
let b = prompt('enter a base number')
let h = prompt('enter height')
console.log(0.5*b*h)
*/
/*
let myNum = prompt("7*8 cavabi nedi")
if (myNum == 56) {
    console.log('you are right')
} else {
    console.log('you need some practice in math')
}
*/
/*
let a = 0
if (a > 0){
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else{
  console.log(`${a} is equal zero`)
}
*/
/*
let isWinter = 'Winter'
switch(isWinter){
   case 'Autmn':
     console.log('you need a umbrella')
     break;
   case 'Winter':
     console.log('you need a hot place')
     break;
}
*/
/*
let myAge = 20
let yourAge = prompt('enter your age:')

if(myAge > yourAge){
  console.log(`${myAge-yourAge} years older than you`)
} else if(myAge==yourAge){
  console.log('We have same age')
} else{
  console.log(`${yourAge-myAge} years older than me`)
}
*/
/*
let numbers = prompt('a number')

if(numbers%2 == 0){
  console.log(`${numbers} even number`)
} else{
  console.log(`${numbers} odd number`)
}
*/

/*

let a = prompt('Enter yout mark:');
if(a>90)
    {
      console.log('Grade - A')}
else if(a<=100 && a>90)
    {
      console.log('Grade - A-')}
else if(a>80 && a<=90)
    {
      console.log('Grade - B');}
else if(a>70 && a<=80)
    {
      console.log('Grade - C')}
else if(a>60 && a<=70)
    {
      console.log('Grade - D')}
else if(a>50 && a<=60)
    {
      console.log('Grade - E')}
else{
      console.log('Grade - F')}

*/
/*
let arr = 'javascript'
console.log(arr.split('').reverse().join(''))

let MMMC = 'Google, Facebook, Youtube'
console.log(MMMC.split(','))
*/
/*
let arr2 = Array(4).fill('space')
console.log(arr2)
*/
/*
let firstArr = [10, 7 , 8]
let secondArr = [9, 0 , 6]
const together = firstArr.concat(secondArr)
console.log(together)
*/
/*
const arr4 = [1, 2, 3, 4, 5, 6]
console.log(arr4.splice(3,2,7,8))
console.log(arr4)
*/
/*
const myNumbers = [1, 2, 3, [4, 5, 6], {}]
console.log(myNumbers[3][0])
*/
/*
const shopList = ['milk', 'honey', 'meat', 'vegatables']
let allergic = prompt('do you have allergic?')
allergic == true
 ? console.log(shopList.shift())
 : console.log('you need to buy all list')
 */
/*
 for(let i = 1; i<=10; i++){
   console.log(i)
 }
*/
/*
const b = ['Zeka','Hamlet', 'Oruc', 'Hesen','Huseyn'] 

for(let i=0; i<=b.length; i++){  // i<= 4
  console.log(b[i])
}
  */
/*
let numbers = [1, 4, 5 ,7, 8]
let sum = 0
for( let i = 0; i< numbers.length; i++){
  sum += numbers[i]
}
 console.log(sum)
 */
/*
 const numbers = [1, 2, 3, 4]
 let newArr = []
 for(let i = 0; i < numbers.length; i++){
   newArr.push(numbers[i]**2)
 }
 console.log(newArr)
 */
/*
const countries = ['turkey', 'azerbaijan', 'america']
let newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)
*/
/*
let a = 1
while(a < 5){
  console.log(a)
  a++
}

let b = 4
do{
  console.log(b)
  b++
}while(b<9)
*/
/*
const names = ['Zeka','Hamlet', 'Oruc', 'Hesen','Huseyn'] 
for(let name of names){
  console.log(name)
}
for(let firstletter of names){
  console.log(firstletter[0])
}
// break
for(let find of names){
  if(find == 'Oruc'){
    console.log(`${find} found`)
     break
  }
  console.log(find)
}
// continue
for(let find of names){
  if(find == 'Oruc'){
    continue
  }
  console.log(find)
}
*/
/*
for(let i = 0; i <= 10; i++){
  console.log(i)
}

const v = [1, 4, 7, 8]
let sum = 0
for(let i = 0; i < v.length; i++){
  sum += v[i]
  
}console.log(sum)
*/
/*
for(let i = 0; i <101; i++){
  if(i%2 ==0){
    console.log(i)
  }
}
*/
/*
function b(){
  console.log('Hi World')
}
b()

function a(){
  let p = 'Zeka'
  return p = ['Zeka']
}
let c = a()
console.log(c)
*/
/*
let a = ''
let y = 7
for(let i = 1; i < 8; i++){
  for(let k = 0; k < i; k++){
    a += '#'
  }
  console.log(a)
  a = ''
}
*/
// normal function
function g(name, surname){
   return (`Hello ${name}, ${surname}`)
}console.log(g('Zeka', 'Askerov'))
// arrow function
const y = (name, surname) => `Hello ${name}, ${surname}`
  console.log(y('Zeka', 'Askerov'))

