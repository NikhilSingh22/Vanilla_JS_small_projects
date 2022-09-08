const X_CLASS ='x',
CIRCLE_CLASS = 'circle';
const win_combination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellEle = document.querySelectorAll('[data-cell]');
const board = document.getElementById("board");
const win_msg = document.getElementById("win_msg");
const win_msg_txt = document.querySelector(".data-win-msg");
const restartbtn = document.getElementById("restartbtn");
let circleTurn

startGame();

restartbtn.addEventListener("click", startGame);

function startGame()
{
    circleTurn=false;
    cellEle.forEach(cell =>{
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('click',handleClick);
        cell.addEventListener('click',handleClick,{once:true});
    });
    setBoardHoverClass();
    win_msg.classList.remove('show');
}

function handleClick(e)
{
    const cell = e.target;
    const currentClass = circleTurn?CIRCLE_CLASS:X_CLASS;

    placeMark(cell,currentClass);
    if(checkwin(currentClass)){
        endGame(false);
    } else if(isDraw()){
        endGame(true);
    }
    else{
    swapTurns();
    setBoardHoverClass();
    }
}


function endGame(draw)
{
    if(draw){
     win_msg_txt.innerText="Draw!";
    }
    else{
        win_msg_txt.innerText = `${circleTurn? "O's Wins!":"X' Wins"}`;
    }
    win_msg.classList.add("show");
}

function isDraw()
{
    return [...cellEle].every(cell =>{
        return cell.classList.contains(X_CLASS)||
        cell.classList.contains(CIRCLE_CLASS);
    });
}

function placeMark(cell,currentClass)
{
    cell.classList.add(currentClass);
}

function swapTurns(){
    circleTurn = !circleTurn;
}

function setBoardHoverClass()
{
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if(circleTurn)
    board.classList.add(CIRCLE_CLASS);
    else
    board.classList.add(X_CLASS);

}

function checkwin(currentClass)
{
  return win_combination.some(combination=>{
    return combination.every(index =>{
        return cellEle[index].classList.contains(currentClass);
    });
  });  
}