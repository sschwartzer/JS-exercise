// print numbers in range 1 to 100 within 1 second break

// extra method
const maxValue = 100;
function repeatingFunc(num) {
    if(num > maxValue){
        return;
    }
    console.log(num);   // print the current num
    setTimeout(repeatingFunc, 1000, num+1);   // recursion, entering the function with num+1
}

setTimeout(repeatingFunc, 1000, 1); // entering repeatingFunc(num) with num = 1, within 1 sec delay