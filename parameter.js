// function bringSingara(taka) {
//     console.log('singarer jonno taka dilam', taka);
//     console.log('mama singara den')

// }

// bringSingara(200);



function burgerAno(tk) {
    console.log('burger er jonno taka dilam', tk);
    console.log('burger jeno nosto na hoi')
    var singleBurger = 70;
    var burgerQuantity = tk / singleBurger;
    return burgerQuantity;


}

var money = 350;
var Burger = burgerAno(money);
console.log('ai nen burger', Burger);