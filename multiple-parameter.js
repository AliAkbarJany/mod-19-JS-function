// function addParameter(number1, number2) {
//     console.log(number1, number2);
// }
// var firstnum = 23;
// var seconfnum = 56;
// addParameter(seconfnum, firstnum);

// addition==
// function addition(num1, num2) {
//     result = num1 + num2;
//     return result;
// }

// addition(67, 89);
// console.log(result);


function addition(num1, num2) {
    console.log(num1, num2);
    var total = num1 + num2;
    return total;
}

var result = addition(67, 89);
console.log('the result of addition', result);

// ....multiplication====

function multiplication(mul1, mul2) {
    console.log(mul1, mul2)
    var total = mul1 * mul2;
    return total;
}

var no1 = 50;
var no2 = 5;
var total = multiplication(no1, no2);
console.log('result of multiplication', total);

//  division======

function division(div1, div2) {
    console.log(div1, div2);
    var result = div1 / div2;
    return result;
}

var first = 100;
var second = 25;
var result = division(first, second);
console.log('result of division', result);