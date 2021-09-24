var but = document.querySelectorAll(".drum").length;
for (var i = 0; i < but; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", clicker);
}

function clicker() {
  var button = this.innerHTML;
  playaudio(button);
  buttonAnimation(button);
}

document.addEventListener("keydown", function(event) {
  playaudio(event.key);
  buttonAnimation(event.key);
});


function playaudio(key) {
  switch (key) {
    case "w":
      var audio = new Audio("/sounds/drumSounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio('/sounds/drumSounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('/sounds/drumSounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('/sounds/drumSounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('/sounds/drumSounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('/sounds/drumSounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('/sounds/drumSounds/kick-bass.mp3');
      audio.play();
      break;
  }
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
     activeButton.classList.remove("pressed");
 }, 100);
}
