// For loop
// Implementation
function sumLoop(firstNum, secondNum) {
    const arguments = [firstNum, secondNum];
    let num = 0;
    for(const value of arguments) {
        num += value
    }
    return num
}


// Usage
num = sumLoop(35, 56)
console.log(num)
