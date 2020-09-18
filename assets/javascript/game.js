let teamOneShots = document.getElementById("teamone-numshots");
let teamOneGoals = document.getElementById("teamone-numgoals");
let teamOneButton = document.getElementById("teamone-shoot-button");
let teamOneShotsCount = 0;
let teamOneGoalsCount = 0;
let teamTwoShots = document.getElementById("teamtwo-numshots");
let teamTwoGoals = document.getElementById("teamtwo-numgoals");
let teamTwoButton = document.getElementById("teamtwo-shoot-button");
let teamTwoShotsCount = 0;
let teamTwoGoalsCount = 0;
let resetButton = document.getElementById("reset-button");
let resetTxtCount = document.getElementById("num-resets");
let resetNumCount = 0;
let teamOneWinTally = 0;
let teamTwoWinTally = 0;
let teamOneWins = document.getElementById("teamone-wins");
let teamTwoWins = document.getElementById("teamtwo-wins");
// Event Listeners after Local Scope Variables have been Initialized
teamOneButton.addEventListener("click", function () {
  teamOneShotsCount++;
  teamOneShots.innerHTML = teamOneShotsCount;
  let min = 0;
  let max = 10;
  let goalGen = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
  if (goalGen >= 5) {
    teamOneGoalsCount++;
    teamOneGoals.innerHTML = teamOneGoalsCount;
  }
  if (teamOneShotsCount === 21) {
    teamOneButton.disabled = true;
  }
});
teamTwoButton.addEventListener("click", function () {
  teamTwoShotsCount++;
  teamTwoShots.innerHTML = teamTwoShotsCount;
  let min = 0;
  let max = 10;
  let goalGen = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
  if (goalGen >= 5) {
    teamTwoGoalsCount++;
    teamTwoGoals.innerHTML = teamTwoGoalsCount;
  }
  if (teamTwoShotsCount === 21) {
    teamTwoButton.disabled = true;
  }
});
/* Deleted some of the above code for this attempt below at 
while statements or other type of loop for checking who won
** if (teamOneShotsCount && teamTwoShotsCount === 14)
** while (winOrLose <= 28) {
**  console.log(winOrLose);
**   }
** }
** if (teamOneButton.disabled && teamTwoButton.disabled == true) {
**
** } */
resetButton.addEventListener("click", function () {
  resetNumCount++;
  resetTxtCount.innerHTML = resetNumCount;
  if (teamOneGoalsCount > teamTwoGoalsCount) {
    window.alert("Team ONE wins!!!");
    // teamOneWinTally++;
    // document.teamOneWins.write("Wins: " + teamOneWinTally).innerHTML;
  } else if (teamTwoGoalsCount > teamOneGoalsCount) {
    window.alert("Team TWO wins!!!");
    // teamTwoWinTally++;
    // document.teamTwoWins.write("Wins: " + teamTwoWinTally).innerHTML;
  }
  teamOneShotsCount = 0;
  teamOneShots.innerHTML = 0;
  teamOneGoalsCount = 0;
  teamOneGoals.innerHTML = 0;
  teamTwoShotsCount = 0;
  teamTwoShots.innerHTML = 0;
  teamTwoGoalsCount = 0;
  teamTwoGoals.innerHTML = 0;
  teamOneButton.disabled = false;
  teamTwoButton.disabled = false;
});
