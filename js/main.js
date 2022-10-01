const userScoreVal = document.querySelector("#userScoreVal");
const compScoreVal = document.querySelector("#compScoreVal");
const result_user_stat = document.querySelector("#result-user-stat");
const result_comp_stat = document.querySelector("#result-comp-stat");
const result_final_stat = document.querySelector("#result-final-stat");
const choice = document.querySelectorAll(".choice");

const compInput = ["rock", "paper", "scissors"];
let numOfTimes = 0;
choice.forEach((choiceEle) => {
  choiceEle.addEventListener("click", (choice) => {
    console.log("vhhv");
    if (numOfTimes === 9) {
      playGame(choice);
      numOfTimes = 0;

      let userScore = Number(userScoreVal.innerText);
      let compScore = Number(compScoreVal.innerText);
      if (userScore > compScore) {
        result_final_stat.innerText = "Winner: user";
      } else if (compScore > userScore) {
        result_final_stat.innerText = "Winner: computer";
      } else {
        result_final_stat.innerText = "Game Tie";
      }

      setTimeout(() => {
        result_user_stat.innerText = "User:";
        result_comp_stat.innerText = "Computer:";
        userScoreVal.innerText = "0";
        compScoreVal.innerText = "0";
        result_final_stat.innerText = "Winner:";
      }, 5000);
    } else {
      playGame(choice);
    }
  });
});
function playGame(choice) {
  const userInputVal = choice.target.alt;
  const compInputVal = compInput[Math.floor(Math.random() * 3)];
  if (userInputVal === "rock" && compInputVal === "rock") {
    result_user_stat.innerText = "User: " + userInputVal;
    result_comp_stat.innerText = "Computer: " + compInputVal;
    numOfTimes = numOfTimes + 1;
  }
  if (userInputVal === "rock" && compInputVal === "paper") {
    result_user_stat.innerText = "User: " + userInputVal;
    result_comp_stat.innerText = "Computer: " + compInputVal;
    numOfTimes = numOfTimes + 1;
    compScoreVal.innerText = Number(compScoreVal.innerText) + 1;
  }
  if (userInputVal === "rock" && compInputVal === "scissors") {
    result_user_stat.innerText = "User: " + userInputVal;
    result_comp_stat.innerText = "Computer: " + compInputVal;
    numOfTimes = numOfTimes + 1;
    userScoreVal.innerText = Number(userScoreVal.innerText) + 1;
  }

  if (userInputVal === "paper" && compInputVal === "paper") {
    result_user_stat.innerText = "User: " + userInputVal;
    result_comp_stat.innerText = "Computer: " + compInputVal;
    numOfTimes = numOfTimes + 1;
  }
  if (userInputVal === "paper" && compInputVal === "rock") {
    result_user_stat.innerText = "User: " + userInputVal;
    result_comp_stat.innerText = "Computer: " + compInputVal;
    numOfTimes = numOfTimes + 1;
    userScoreVal.innerText = Number(userScoreVal.innerText) + 1;
  }
  if (userInputVal === "paper" && compInputVal === "scissors") {
    result_user_stat.innerText = "User: " + userInputVal;
    result_comp_stat.innerText = "Computer: " + compInputVal;
    numOfTimes = numOfTimes + 1;
    compScoreVal.innerText = Number(compScoreVal.innerText) + 1;
  }

  if (userInputVal === "scissors" && compInputVal === "scissors") {
    result_user_stat.innerText = "User: " + userInputVal;
    result_comp_stat.innerText = "Computer: " + compInputVal;
    numOfTimes = numOfTimes + 1;
  }
  if (userInputVal === "scissors" && compInputVal === "paper") {
    result_user_stat.innerText = "User: " + userInputVal;
    result_comp_stat.innerText = "Computer: " + compInputVal;
    numOfTimes = numOfTimes + 1;
    userScoreVal.innerText = Number(userScoreVal.innerText) + 1;
  }
  if (userInputVal === "scissors" && compInputVal === "rock") {
    result_user_stat.innerText = "User: " + userInputVal;
    result_comp_stat.innerText = "Computer: " + compInputVal;
    numOfTimes = numOfTimes + 1;
    compScoreVal.innerText = Number(compScoreVal.innerText) + 1;
  }
}
