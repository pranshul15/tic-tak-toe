console.log("Tic Tac Toe");
let gameOver = new Audio("gameOver.mp3");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let isGameOver = false;

let turn = "X";

// Function to change the turn
const changeTurn = ()=>{
    return (turn==="X")? "O":"X";
}
let boxValues = [];
let count = 0;
// Function to check for a win
const checkWin = ()=>{
    // horizontal 1
    if((boxValues[0]===boxValues[1]) && (boxValues[1]===boxValues[2])){
        return boxValues[0];
    }
    // horizontal 2
    if((boxValues[3]===boxValues[4]) && (boxValues[4]===boxValues[5])){
        return boxValues[3];
    }
    // horizontal 3
    if((boxValues[6]===boxValues[7]) && (boxValues[7]===boxValues[8])){
        return boxValues[6];
    }
    // vertical 1
    if((boxValues[0]===boxValues[3]) && (boxValues[3]===boxValues[6])){
        return boxValues[0];
    }
    // vertical 2
    if((boxValues[1]===boxValues[4]) && (boxValues[4]===boxValues[7])){
        return boxValues[1];
    }
    // vertical 3
    if((boxValues[2]===boxValues[5]) && (boxValues[5]===boxValues[8])){
        return boxValues[2];
    }
    // diagonal left to right
    if((boxValues[0]===boxValues[4]) && (boxValues[4]===boxValues[8])){
        return boxValues[0];
    }
    // diagonal right to left
    if((boxValues[2]===boxValues[4]) && (boxValues[4]===boxValues[6])){
        return boxValues[2];
    }
    return "NO";
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) =>{
    element.addEventListener('click',(e)=>{
        if(element.innerHTML!=="X" && element.innerHTML!=="O"){
            element.innerText = turn; // setting the value inside
            boxValues[parseInt(element.id)]=turn; // setting value inside code
            turn = changeTurn(); // changing the turn
            ting.play();
            count++;
            
            if(checkWin()==="X" || checkWin==="O"){ 
                document.getElementById('info').innerText = checkWin() + " is Winner!";
            }
            else if(count == 9){
                document.getElementById('info').innerText = "Game Draw";
            }
            else {
                document.getElementById('info').innerText = "Turn for " + turn;
            }
        }
    })
});