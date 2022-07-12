let messageBox = document.search.message;
const div = document.getElementById("div");
const divCount = document.getElementById("count");

let count = 0;
let str = "";
let list =[];//
let words = str.split(/\s/g);

function getRandomId() {
    let rand = Math.random().toString(36).substring(2);
    rand = `a${rand}`;
    return rand;
}

function sortirovka(){
    let elementDelete = document.getElementsByClassName("divCount");
    let j=0;
    while(divCount.firstChild) {
        console.log("jgvdsc");
        divCount.removeChild(divCount.firstChild);
    }
    list.sort((prev, next) => next.count - prev.count);
    for(let i=0;i<list.length;i++)
    {
        const element = document.createElement("div");
        const elementCount = document.createElement("div");
        element.id=getRandomId();
        elementCount.id=getRandomId();
        element.textContent=words[words.length-1];
        elementCount.textContent=list[i]['name']+' - '+list[i]['count'];
        divCount.appendChild(elementCount);
    }

}
function onkeypress(e) {
    str = messageBox.value;
}

function onkeydown(e) {
    let flag=false;
    if (e.keyCode === 32) {
        words = str.split(/\s/g);
        const element = document.createElement("div");
        const elementName = document.createElement("p");
        const elementCount = document.createElement("div");
        for(let i=0;i<list.length;i++){
            if(words[words.length-1]===list[i]['name']){
                list[i]['count']++;
                 sortirovka();
                flag=true;
                break;
            }
        }
        if(flag===false)
        {
            element.id=getRandomId();
            elementCount.id=getRandomId();
            elementName.id=getRandomId();
            elementName.textContent=words[words.length-1];
            element.textContent=words[words.length-1];
            list.push({id:element.id,name:element.textContent,count:1,countId:elementCount.id});
            elementCount.textContent=list[list.length-1]['name']+' - '+list[list.length-1]['count'];
            divCount.appendChild(elementCount);
        }
    }
}

messageBox.addEventListener("input", onkeypress);
messageBox.addEventListener("keydown", onkeydown);