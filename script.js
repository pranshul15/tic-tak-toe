console.log("Tic Tac Toe");
let gameOver = new Audio("gameOver.mp3");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");

let turn = "X";

// Function to change the turn
const changeTurn = ()=>{
    return (turn==="X")? "O":"X";
}


// Function to check for a win
const checkWin = ()=>{

}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) =>{
    let boxText = document.querySelector('.boxValue');
    // console.log(element);
    element.addEventListener('click',(boxText)=>{
        if(boxText.innerText===undefined){
            console.log("kuch bhi nahi hai");
            element.innerText = turn;
            console.log(element.innerText);
            turn = changeTurn();
            ting.play();
            // checkWin();
            document.getElementById('info').innerText = "Turn for " + turn;
        }
        // console.log(boxText.innerText);
        // if(boxText.innerText === ''){
        //     boxText.innerText = turn;
        //     changeTurn();
        //     ting.play();
        //     checkWin();
        //     document.getElementsByClassName(turn)[0].innerText = "Turn for" + turn;
        // }
    })
});