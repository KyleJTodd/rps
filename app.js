// let userChoice

function setUserChoice(userChoice) {
  // let myChoice = 'rock'
  // if (userChoice == "scissors") {
  //   alert(myChoice)
  // }
  // else if (userChoice == "paper") {
  //   let myChoice = "scissors"
  //   alert(myChoice)
  // }
  // else (userChoice == "rock"); {
  //   let myChoice = "paper"
  //   alert(myChoice)
  // }
  //display(userChoice)
}

function display(userChoice) {
  let template = `
   <h3>Computer Choice: ${userChoice}</h3>`
  document.getElementById("compChoice").innerHTML = template
}

//randomization attempt
function choiceIn(userChoice) {

  let choiceOut = (Math.ceil(3 * Math.random()))
  if (choiceOut == 1) {
    document.getElementById('compChoice').innerText = 'rock'
  }
  else if (choiceOut == 2) {
    document.getElementById('compChoice').innerText = 'paper'
  }
  else {
    document.getElementById('compChoice').innerText = 'scissors'
  }
  findWinner(userChoice)
}
function findWinner(userChoice) {
  if (document.getElementById('compChoice') == userChoice) {
    alert('draw')
  }

}