//Global Variables
var pattern = [3, 1, 4, 3, 2, 1, 2, 4];
var progress= 0;
var gamePlaying = false;

function startGame(){
  progress = 0;
  gamePlaying = true;
}

document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
