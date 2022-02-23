var student = {
    id: 5466,
    Name: 'rafsan',
    phone: 06476576,
    height: '8feet',
    wight: '80kg',

}
console.log(student.height);

var watch = { booktitle: 'the art of war', price: 344, author: 'namira' };
console.log(watch);
console.log(watch.author);
console.log(watch.price);
// var watchprice = watch.price;
// console.log(watchprice);

watch.price = 6007;
watch["price"] = 2300;
var priceProperty = "price";
watch[priceProperty] = 9999;
console.log(watch);