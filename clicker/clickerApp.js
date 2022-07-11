const buttonPlus=document.getElementById("btn2");
const buttonMinus=document.getElementById("btn1");
buttonPlus.onclick = () => ChangeCountPlus();
buttonMinus.onclick = () => ChangeCountMinus();
let text = document.querySelector('.count > span');
function ChangeCountPlus(){
    text.textContent=(Number(text.textContent)+1).toString();
}
function ChangeCountMinus(){
    text.textContent=(Number(text.textContent)-1).toString();
}