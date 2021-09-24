var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []

var started = false
var level = 0


$(document).keypress(function(){
if (started == false){
  nextSequence();
  started = true;
}

});


function nextSequence() {
  min = Math.ceil(0);
  max = Math.floor(4);
  randomNumber = Math.floor(Math.random() * (max - min) + min);
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

function sleep(ms){
 return new Promise( resolver => setTimeout(resolver, ms));
};
async function execute(){
for(var i = 0; i < (level + 1); i++){
playSound(gamePattern[i]);
animatePress(gamePattern[i]);
await sleep(1000)
}
}
execute();
$("#level-title").html("Level 0");
 level++
 $("#level-title").html("Level " + level);
}


$(".butn").click(function() {
  var userChosenColor =  $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
});

function playSound(name){

  var audio = new Audio("/sounds/simonSounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){

if (gamePattern[currentLevel] == userClickedPattern[currentLevel]){
  if (gamePattern.length === userClickedPattern.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
    userClickedPattern.length = 0;
  }
}
else{
  userClickedPattern.length = 0;
  var audio = new Audio("/sounds/simonSounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
setTimeout(function () {
  $("body").removeClass("game-over");
}, 200);
$("#level-title").html("Game Over, Press Any Key to Restart");
startOver();
}
}

function startOver(){
level = 0
gamePattern.length = 0
started = false;

}
