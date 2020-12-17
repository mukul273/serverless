// function add(a, b) {
//     return (a+b);
// }

// console.log(add(1,2));
// console.log(add(3,5));

function add(a, b, callback) {
    console.log("This is before callback")
    callback(a+b);
    console.log("This is after callback")
}

// function print(c) {
//     console.log("This is a early execution test")
//     console.log(c);
// }

//add(1, 2, print);
// add(1, 2, function(c){
//     console.log(c);
// });

add(1, 2, (c) => {
    console.log(c);
});

// add(1, 2, (c) => console.log(c));

// function add(a, b, callback) {
//     callback(a+b);
// }

// var a = 5;
// var b = 3;
// var c = 20;

// add(a, b, (c)=>console.log(c));

// console.log(c);

// var a = 10;
// if(true) {
//     let a = 20;
//     console.log(a);
// }

// console.log(a);
