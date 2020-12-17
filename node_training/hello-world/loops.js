var i = 10;
var limit = 5;
while(i<limit){
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while(i<limit);
console.log("-------------------")
for(i=0;i<limit;i++){
    console.log(i);
}
console.log("-------------------")
var arr = [10, 20, 30];
arr.forEach(function(item){
    console.log(item);
})
console.log("-------------------")
var arr = [10, 20, 30];
for (var i of arr) {
    console.log(i);
}
