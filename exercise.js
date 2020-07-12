// print numbers in range 1 to 100 within 1 second break

//  method #1
console.log("method 1:")

// the function takes two numbers as parameters.
// prints numbers from 1 to n in delay of delay_second.
function printNumbersEveryFewSec(n, delay_second){
    for(let i = 1; i <= n; i++){
        // check again in a second (1000 milliseconds = 1 sec)
        setTimeout(function(){ console.log(i); }, i*delay_second*1000);
    }
}

printNumbersEveryFewSec(100, 1)


//  method #2
console.log("method 2:")

var i = 1;
var num = 100; 

myVar = setInterval(print, 1000); // every 1 sec (1000 miliseconds), it calls print()
function print() {
    if (i <= num) {
        console.log(i)
        i++;
    }
    else {
        clearInterval(myVar) // when finished, stop the Interval.
    }

}

// method #3

console.log("method 3:")
let numbers = [];
const arrayLen = 100
// initializing the array
for(let i = 1; i <= arrayLen; i++){
    numbers.push(i)
}
for(let num = 1; num <= arrayLen; num++){

    setTimeout(function(){console.log(num);}, 1000*(num-1)); // index starts at 0, while array's first value at 1.
}
