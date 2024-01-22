let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p  = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function Komputer(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()  *3 );
    return choices[randomNumber];
    }
console.log(Komputer());
function Convert(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
function win(P1,PC){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${Convert(P1)} vs ${Convert(PC)} You win!`;
    document.getElementById(P1).classList.add('win-glow');
    setTimeout(() => document.getElementById(P1).classList.remove('win-glow'), 600);
    let audio = new Audio("win.mp3");
    audio.play()
}

function lose(P1,PC){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${Convert(P1)} vs ${Convert(PC)} You lost!`;
    document.getElementById(P1).classList.add('lost-glow');
    setTimeout(() => document.getElementById(P1).classList.remove('lost-glow'), 600);
    let audio = new Audio("lost.mp3");
    audio.play()
}

function draw(P1,PC){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  `${Convert(P1)} vs ${Convert(PC)} You tied!`;
    document.getElementById(P1).classList.add('draw-glow');
    setTimeout(() => document.getElementById(P1).classList.remove('draw-glow'), 600);
    let audio = new Audio("draw.mp3");
    audio.play()
}

function game(User_choice){
    const computerChoice = Komputer();
    switch(User_choice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(User_choice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(User_choice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(User_choice, computerChoice);
            break;                                        
    }
}
console.log(game());

function User_choice(){
    rock_div.addEventListener('click', ()=>{
    game("r");
    })
    paper_div.addEventListener('click', ()=>{
    game("p");
    })
    scissors_div.addEventListener('click', ()=>{
    game("s");
    })
}
User_choice();

