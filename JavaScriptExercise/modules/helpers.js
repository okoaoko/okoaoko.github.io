function $g(selector){
if (selector.includes('#')&&!selector.includes(' ')){

    return document.querySelector(selector);

}

let nodelist = document.querySelectorAll(selector);

return nodelist.length == 1 ? nodelist[0]:nodelist;
    
}

function genUl(LiArray){
    let ul = document.createElement("li");
    LiArray.forEach((item,index)=>{
        let li = document.createElement("li");
        li.innerText= item;
        ul.appendChild(li);

    });
return ul ;
}

function getRandom(min,max){
    return Math.floor(Math.random()*max+min);
}

function $c(element,text){
    let el = document.createElement(element);
    if(text!== null && text !== undefined&& text.length >0){
        el.innerText = text ; 
    }
return el;
}


export { $g, genUl ,getRandom,$c};