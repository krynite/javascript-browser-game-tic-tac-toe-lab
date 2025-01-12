/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/




/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



let board;
let turn;   
let winner;
let tie; 
let winningCombos = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]


const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

console.log(`Message sqr${squareEls}`)
console.log(`Message class${messageEl}`)





const init = () => {
    // console.log(`Initialize Func init: `)
    board = ['','','','','','','','',''];
    turn = 'X';       
    winner = false;
    tie = false;
    render();
}

const render = () => {
    // console.log(`Render Func Test`)
    updateBoard();
    updateMessage();
}

const updateBoard = () => {
    //  console.log(`UpdateBoard Func Test`)
    // taking values from squareEls and update the board.
    board.forEach((value, index)=>{
        squareEls[index].textContent = value;
    })
}
    
const updateMessage = () => {
    if ( winner === false && tie === false){
        console.log(`Game still in Progress`)
    }
    if ( winner === false && tie === true){
        console.log(`Game is a tie`)
    }
    if ( winner === true){
        console.log(`We have a winner!`)
    }

}

squareEls.forEach(button =>{
    button.addEventListener('click', handleClick)
});

function handleClick(event){
    console.dir(`Testing handleClick Func: ${event}`)
    console.log(event)
    console.log(event.target.id)
    let squareIndex = Number(event.target.id)
    console.log(`Thhis is squareIndex Num: ${squareIndex}`)
    console.log(`Typeof ${typeof squareIndex}`)
    // console.log(`Testing handleClick Func: ${squareIndex}`)
    // const squareIndex = event.target.id.value
    // console.log(squareIndex) 
    // console.log(`This is squareIndex ${squareIndex}`)
    placePiece(squareIndex);
    checkForWinner();
}

const placePiece = (index) => {
    console.log(`This is placePiece index value: ${index}`)
    board[index] = turn         //turn changes
    console.log(`This is the board array: ${board}`)
}

const checkForWinner = () => {
    winningCombos.forEach((arrValue) => {
        console.log(`This is checkForWinner() augValue: ${arrValue}`)
        let [a,b,c] = arrValue        
            console.log(`For "a" value : ${a}`)
            console.log(`For "b" value : ${b}`)
            console.log(`For "c" value : ${c}`)
            if(board[a] ===  board[b] && board[b]=== board[c]) //omitted out && board[c] === board[a] //double check if this makes sense
                winner = true
                
    })
}
const checkForTie = () => {
    if(winner ===  true) return;

    board.forEach()     //https://tpiros.dev/blog/contains-vs-includes/
    if(!board.includes('')) {
        tie = true
    }
}

const switchPlayerTurn = () => {
    if(winner === true){
        return;
    } else {
        if (turn === 'X') turn = 'O';
        if (turn === 'O') turn = 'X';
        
    }
}

function handleClick(event){
    console.dir(`Testing handleClick Func: ${event}`)
    console.log(event)
    console.log(event.target.id)
    let squareIndex = Number(event.target.id)
    console.log(`Thhis is squareIndex Num: ${squareIndex}`)
    console.log(`Typeof ${typeof squareIndex}`)
    // console.log(`Testing handleClick Func: ${squareIndex}`)
    // const squareIndex = event.target.id.value
    // console.log(squareIndex) 
    // console.log(`This is squareIndex ${squareIndex}`)
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
}


init();

