const heartRed = document.getElementById("img");
heartRed.onclick = () => ChangeColor();
let count=0;
function func(){
    const styles=getComputedStyle(heartRed);
    console.log(styles.fill);
    if(styles.fill === "rgb(255, 0, 0)"){
        console.log("black");
        heartRed.style.fill="black";
   }
   else if(styles.fill  === "rgb(0, 0, 0)"){
       console.log("red");
        heartRed.style.fill = "red";
    }
}

function ChangeColor(){
    count++;
    if(count===2)
    {
        setTimeout(func, 800);
        count=0;
    }
}
