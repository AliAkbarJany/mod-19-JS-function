// i = 0;
// while (i <= 15) {
//     // console.log(i);
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// for (var i = 0; i < 20; i++) {
//     // console.log(i);
//     if (i == 9) {
//         break;
//     }
//     console.log(i);
// }

// for (var i = 0; i < 16; i++) {
//     console.log(i);
//     if (i > 12) {
//         break;
//     }
// }

// var numbers = [12, 34, 23, 45, 56, 78, 89, 90, 99, 100];
// for (var i = 0; i < numbers.length; i++) {

//     var age = numbers[i];
//     console.log(age);
//     if (age > 89) {
//         break;
//     }
// }
// var numbers = [12, 34, 23, 45, 56, 78, 89, 90, 99, 100];
// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);

//     if (numbers[i] > 89) {
//         break;
//     }
// }

// continue====

// var numbers = [23, 34, 51, 66, 89, 90, 44, 123, 85, 110, 22, 9, 78,];
// for (var i = 0; i < numbers.length; i++) {
//     // 
//     var age = numbers[i];

//     if (age > 89) {
//         continue;

//     }
//     console.log(age);
// }

function getreminder(number1, number2) {
    result = number1 % number2;
    return result;
}
const reminder = getreminder(12, 2);
console.log(reminder);