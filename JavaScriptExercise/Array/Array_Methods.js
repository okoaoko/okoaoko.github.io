let Computer = ['CPU', 'DRAM', 'SSD', 'Mouse']; let comp = new Array('CPU', 'DRAM', 'SSD', 'Mouse');
let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
let Prices = [280, 320, 250, 210];
let Fruits = ['Apple', 'Banana', 'Cherry'];
let Person = ['John', 35, 'john@gmail.com'];

let friends = ["David", "Mary", "John"];

let text = friends[0] + friends[1] + friends[2];
console.log(text);
console.log(friends);
console.log(friends.length);


/* friends=[];
friends.length=0; */
friends.splice(2, friends.length);

console.log(friends);
console.log(friends.length);


let friends = ["David", "Mary", "John"];

let item2 = "";
friends.forEach((item, index) => {
    console.log(item);
    item2 += item;
})
console.log(item2);
console.log(friends.join("."));

let friends=[];
friends.push("David");
friends.push("John");
friends.push("IronMan");
friends.pop();
console.log(friends);

var array1=['a','b','c'];
var array2=['d','e','f'];
var array3=array1.concat(array2);

console.log(array3);

var array4 = [...array1,...array2];
console.log(array4);

let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
/* console.log(Cars);
console.log(Cars.sort());
console.log(Cars.reverse());
console.log(Cars.sort().reverse()) */
let car =Cars.find(c=>c=='Benz');
console.log(car);
let index = Cars.indexOf('Audi');
console.log(index);
let ind = Cars.findIndex(c=>c=='Benz');
console.log(ind);

let Prices = [280, 320, 250, 210];
console.log(Prices.findIndex(p=>p>300));
console.log(Prices.filter(p=>p>250));

Prices.filter(function(item,index){
    if(item>250){
        console.log(Cars[index]+" 's price is "+item +", it's large 250.")
    }
});

