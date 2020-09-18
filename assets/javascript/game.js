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
// Event Listeners after Local Scope Variables have been Initialized
teamOneButton.addEventListener("Click", function () {
  teamOneShotsCount++;
  teamOneShots.innerHTML = teamOneShotsCount;
  console.log(teamOneShotsCount);
});
