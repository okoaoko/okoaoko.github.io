// function getRandom(min,max){
//     return Math.floor(Math.random()*max+min);
// }

// console.log(getRandom(1,100));


// let array1 = [...Array(100).keys()];
// console.log(array1);

// array1.forEach((item,index)=>{
//     console.log(getRandom(1,100));
// });


let array1 = [...Array(100).keys()];
let ary1 = array1.map(x=>x+1);
console.log(ary1);

array1.forEach((item,index)=>{
console.log(getRandom(1,100));
});