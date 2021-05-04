// var person = {
//     name :"Kevin" , age:23 ,height:175,wieght:64

// };
// var person = {
//     name :"Kevin" , age:23 ,height:175,wieght:64

// };

// console.log(person);

// var person = {
//     name:"Kevin",
//     age:23,
//     height:175,
//     wieght:64,
//     bmi:function(){
// return this.wieght/((this.height/100)**2);
//     }
// };
// console.log(person);
// console.log(person.bmi());

// console.log(person.name);
// console.log(person.age);
// console.log(person.height);
// console.log(person.wieght);

// // 兩種都可以取值
// console.log(".".repeat(60));
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["height"]);
// console.log(person["wieght"]);


// console.log("*".repeat(60));
// let keys =Object.keys(person);
// let values = Object.values(person);

// console.log(keys);
// console.log(values);

// keys.forEach((item,index)=>{
//     console.log(item+':'+person[item]);
// });

// let people = [
// {name:"Kevin",age:22,height:211,wieght:324},
// {name:"Mary",age:23,height:311,wieght:624},
// {name:"David",age:25,height:411,wieght:924}
// ];

// console.log(people);

// people.forEach((item,index)=>{
// console.log(item);
// });

// people.forEach((item,index)=>{
//     let keys = Object.keys(person);
//     let msg = index + ". ";
//     keys.forEach((key,index)=>{
// msg +=key+":"+person[key] +",";
//     });

// console.log(msg);

// })

// let person = {
//     name :"Kevin" , age:23 ,height:175,wieght:64

// };
// let person = {
//     name :"Kevin" , age:23 ,height:175,wieght:64

// };

// console.log(person);
//let無法重複宣告

let person = {
    name :"Kevin" , age:23 ,height:175,wieght:64

};

console.log(person);
console.log("The Object is :" + person);
console.log("The Object is %0 :" ,person);

var jsonText = JSON.stringify(person);
console.log(typeof jsonText);

var p =JSON.parse(jsonText);
console.log(p);
console.log(typeof p );