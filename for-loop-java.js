// For loop
// Implementation
function sumLoop(firstNum, secondNum) {
    const arguments = [firstNum, secondNum];
    let num = 0;
    for( let value of arguments) {
        num += value
    }
    console.log(num)
    return num
}


// Usage
sumLoop(35, 56)
