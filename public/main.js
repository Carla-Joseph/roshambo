let firstPlayerScore = 0
let secondPlayerScore = 0

  const start = () => function(start) {
    const startButton = document.querySelector('.start button')

    startButton.addEventListener('click', function() => {


    })
  }


const playGame = () => {
  const player1Options = document.querySelector(".player1options");
  const player2Options = document.querySelector(".player2options");

  const player1plays = ["rock", "paper", "scissors"];
  const player2plays = ["rock", "paper", "scissors"];

  options.forEach(option => {
    option.addEventListener("click", function() {
      console.log(option)
      const player1Choice = player1plays;
      const player2Choice = player2plays;

      compareHands(this.textContent, player1Choice);  

      const updateScore = () => {
        let player1Score = document.querySelector('.player1 p');
        let player2Score = document.querySelector('.player2 p');
        player1Score.textContent = firstPlayerScore;
        player2Score.textContent = secondPlayerScore;
      };
   
    })
  })
}

function handleClick(event) {
  const target = event.target;
  return;
}

const compareHands = (player1Choice, player2Choice) =>{

  const winner = document.querySelector(".winner");
  if(player1Choice === player2Choice){
winner.textContent = 'Draw';
return; 
  }

  if(player1Choice === 'rock'){
    if (player2Choice === 'scissors') {
      winner.textContent = 'Player 1 Wins!'
      firstPlayerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = 'Player 2 Wins!'
      secondPlayerScore++;
      updateScore();
      return;
    }
  }

  if(player1Choice === 'paper'){
    if (player2Choice === 'scissors') {
      winner.textContent = 'Player 2 Wins!'
      secondPlayerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = 'Player 1 Wins!'
      firstPlayerScore++;
      updateScore();
      return;
    }

  }
  if(player1Choice === 'scissors'){
    if (player2Choice === 'rock') {
      winner.textContent = 'Player 2 Wins!'
      secondPlayerScore++;
      updateScore();
      return;
    } else {
      winner.textContent = 'Player 1 Wins!'
      firstPlayerScore++;
      updateScore();
      return;
    }
  }



document.addEventListener('DOMContentLoaded', main) 