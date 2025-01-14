let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
console.log(choices)

const msg=document.querySelector('#msg');
// console.log(msg)

//Accessing score para id's
const uscorepara=document.querySelector('#user-score');
const cscorepara=document.querySelector('#comp-score');
// console.dir(uscore);
const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3)
    // console.log(randIdx)
    return options[randIdx];
}

const draw = () => {
    console.log("Game was draw");
    msg.innerText="Game was Draw";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        console.log('User Win');
        msg.innerText=`You Win!Your ${userChoice} beats ${compChoice}`;
        uscorepara.innerText=userScore;
        msg.style.backgroundColor = "rgba(0, 255, 0, 0.2)"; // Green

    }
    else{
        compScore++;
        console.log('User Lose');
        msg.innerText=`You Lose.${compChoice} beats your ${userChoice}`;
        cscorepara.innerText=compScore;
        msg.style.backgroundColor = "rgba(240, 0, 0, 0.85)"; // Red

    }    
};
const playGame = (userChoice) => {
    console.log('User Choice:', userChoice)
    const compChoice = genCompChoice();
    console.log('Comp Choice:', compChoice)
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === 'paper') {
            //scissors,rock
            userWin = compChoice === 'rock' ? true : false;
        } else if (userChoice === 'rock') {
            //paper,scissors
            userWin = compChoice ==='paper' ?false : true;
        }else{
             //rock,paper
             userWin=compChoice === 'rock' ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
        }
        
    };


    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute('id')
            // console.log("Choice was Clicked",userChoice);
            playGame(userChoice);
        })
    })
// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         console.log("Choice was Clicked");
//     });
//     });
