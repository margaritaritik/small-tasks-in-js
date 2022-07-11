const button=document.getElementById("buttonRed");
let text = document.querySelector('.count > span');
button.onclick=() => ChangeColorButton();
let startTime = Date.now();
console.log(startTime);
setTimeout(ChangeColor, Math.floor(Math.random() * 9 + 1)*1000);
function ChangeColor(){
    button.style.backgroundColor="green";
    startTime = Date.now();
}
function ChangeColorButton(){
    if(button.style.backgroundColor==="green"){
        setTimeout(function(){
            let elapsedTime = (Date.now() - startTime)/1000;
            if(elapsedTime>0.2)
            {
                text.textContent="Ваша скорость : "+elapsedTime+"\n Вы как черепаха!!!";
            }
            if(elapsedTime<=0.2)
            {
                text.textContent="Ваша скорость : "+elapsedTime+"\n Норм скорость !!!";
            }

        }, 100);
        button.style.backgroundColor="red";
        setTimeout(ChangeColor, Math.floor(Math.random() * 9 + 1)*1000);
    }
}