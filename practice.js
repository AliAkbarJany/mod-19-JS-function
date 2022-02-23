function multiplication(number1, number2) {
    var total = number1 * number2;
    return total;

}

var result = multiplication(20, 7);
// console.log(result);

// division==

function division(num1, num2) {
    let total = num1 / num2;
    return total;
}

let first = 1200;
let second = 7;
let dividedResult = division(first, second);
// console.log(dividedResult);

// object=====

var watch = {
    name: 'rado',
    id: 235,
    price: 4587,
    belt: 'leather',

}

console.log(watch);
console.log(watch.belt);
console.log('changing of watch property');


watch.belt = "elastic";
console.log(watch);
watch['belt'] = "plastic";
console.log(watch);
// another way to change "watch property"====

var propertyChange = "belt";
watch[propertyChange] = "rubber";
console.log(watch);


// break=====

for (var i = 0; i < 23; i++) {
    if (i == 7) {

        break;
    }
    console.log(i);
}

// continue======
for (var i = 0; i < 12; i++) {
    if (i == 9) {
        continue;
    }
    console.log(i);
}

var age = [23, 46, 78, 80, 12, 44, 90, 67, 77, 29, 100,]

for (var i = 0; i < age.length; i++) {
    var result = age[i];
    if (result > 80) {
        break;
    }
    console.log(result);
}

for (var i = 0; i < age.length; i++) {
    var result = age[i];
    if (result >= 80) {
        break;
    }
    console.log(result);
}