function increment() {
    console.log('Te button was clicked')
}

let countEl = document.getElementById('count-el')
//console.log(countEl)
let count = 0

function decrement() {
    count = count - 1
    countEl.innerText = count
}

function increment() {
    count = count + 1
    countEl.innerText = count
}


/*
let a = 12
let b = 34
let c = 56
sum = 0
function sumAll(){
    sum = a + b + c
    console.log(sum)
}
sumAll()

let lapsCompleted = 0

function ab (){

}
*/
