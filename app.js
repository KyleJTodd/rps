// let userChoice

// function setUserChoice(userChoice) {
//   // let myChoice = 'rock'
//   // if (userChoice == "scissors") {
//   //   alert(myChoice)
//   // }
//   // else if (userChoice == "paper") {
//   //   let myChoice = "scissors"
//   //   alert(myChoice)
//   // }
//   // else (userChoice == "rock"); {
//   //   let myChoice = "paper"
//   //   alert(myChoice)
//   // }
//   //display(userChoice)
// }

let choices = ["rock", "paper", "scissors"]

function generateRandomNum() {
  return Math.floor(Math.random() * 3)
}

function display(userChoice) {
  let template = `
   <h3>Computer Choice: ${userChoice}</h3>`
  document.getElementById("compChoice").innerHTML = template
}

//randomization attempt
function choiceIn(userChoice) {
  let computerChoice = choices[generateRandomNum()]
  let result = ''
  if (computerChoice == userChoice) {
    result = "tie"
  }
  if (userChoice == "rock") {
    if (computerChoice == "paper") {
      result = "you lose"
    } else if (computerChoice == "scissors") {
      result = "you win"
    } // result = (computerChoice == "paper" ? "you lose" : "you win")
  }
  if (userChoice == "paper") {
    if (computerChoice == "rock") {
      result = "you win"
    } else if (computerChoice == "scissors") {
      result = "you lose"
    }
  }
  if (userChoice == "scissors") {
    if (computerChoice == "rock") {
      result = "you lose"
    } else if (computerChoice == "paper") {
      result = "you win"
    }
  }

  // let choiceOut = (Math.ceil(3 * Math.random()))
  // if (choiceOut == 1) {
  //   document.getElementById('compChoice').innerText = 'rock'
  // }
  // else if (choiceOut == 2) {
  //   document.getElementById('compChoice').innerText = 'paper'
  // }
  // else {
  //   document.getElementById('compChoice').innerText = 'scissors'
  // }
  // findWinner(userChoice)
}
