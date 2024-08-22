const  box1=document.getElementById("box1");
const  box2=document.getElementById("box2");
const  box3=document.getElementById("box3");
const  box4=document.getElementById("box4");
const  box5=document.getElementById("box5");
const  box6=document.getElementById("box6");
const  box7=document.getElementById("box7");
const  box8=document.getElementById("box8");
const  box9=document.getElementById("box9");
let box=document.querySelectorAll(".box");
const result=document.getElementById('result');
const Player=document.getElementById("player");
const reset=document.getElementById("reset");
let flag=0;
 function game(e){
    console.log(e.target.innerHTML);    
    if(e.target.innerHTML==="."){
    if (Player.innerHTML==="Player-1's Turn"&&flag===0){
        Player.innerHTML="Player-2's Turn";
        flag=1;
        e.srcElement.innerHTML="X";
    }
    else{
        Player.innerHTML="Player-1's Turn";
        flag=0;
        e.srcElement.innerHTML="O";
    }
   checkingWinner();
}
}

Again();
function Again(){
box.forEach((val)=>{
    val.addEventListener("click",game);
 });}
function disableBoard() {
    box.forEach((val) => {
        val.removeEventListener("click", game); 
        });
}
function checkingWinner() {
    const winConditions = [
        [box1, box2, box3],
        [box4, box5, box6],
        [box7, box8, box9],
        [box1, box4, box7],
        [box2, box5, box8],
        [box3, box6, box9],
        [box1, box5, box9],
        [box3, box5, box7]
    ];

    let winner = null;

    winConditions.forEach((condition) => {
        const [a, b, c] = condition;
        if (a.innerHTML !=="." && a.innerHTML === b.innerHTML && a.innerHTML === c.innerHTML) {
            winner = a.innerHTML;
        }
    });

    if (winner) {
        result.innerHTML = `Player ${winner === "X" ? "1" : "2"} wins!`;
        disableBoard();
    } else if ([...box].every(val => val.innerHTML !== ".")) {
        result.innerHTML = "It's a draw!";
    }
}
reset.addEventListener('click',()=>{
    box.forEach((val) => {
        val.innerHTML="."; 
        });
        Again();
})