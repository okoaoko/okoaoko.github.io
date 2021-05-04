function displaytime(){
    let data = new Data();
    let h= data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    console.log(`${h}:${m}:${s}<br/>`);
}

const print = function(...Args){
    console.log(typeof Args);
    console.log(Args instanceof Array);
    console.log(Args[0]);
    console.log(Args[1]);
    console.log(Args[2]);
    console.log(Args.join());
}

print("昔⼈人已乘黃鶴去", "此地空餘黃鶴樓樓", "黃鶴⼀一去不復返", "雲千載空悠 悠");


//宣告陳列列
var taiwanArray = ['台灣', 41, 1 ,12];
var chinaArray = ['中國', 80134, 2914, 44595]; 
var americaArray = ['美國', 9665, 146, 694];
var map = new Map();
map.set("taiwan", taiwanArray); 
map.set("china", chinaArray); 
map.set("america", americaArray);

console.log(map.get('america'));
console.log(map.get('taiwan'));
console.log(map.get('china'));

map.delete("china");
console.log(map);

map.clear();
console.log(map);

for (let key of map.keys()) {
    console.log(key);
}
//Ex4 - value
for (let value of map.values()) {
    console.log(value);
}
//Ex5 - key & value
for (let [key, value] of map) {
    console.log(`${key} : ${value}`);
}

