function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function changeImage1() {
  var randomNumber1c = getRandomInt(1, 7);
  switch (randomNumber1c) {
    case 1:
      document.getElementById("player1dice").src = "/images/diceImages/dice1.png";
      return (1);
      break;
    case 2:
      document.getElementById("player1dice").src = "/images/diceImages/dice2.png";
      return (2);
      break;
    case 3:
      document.getElementById("player1dice").src = "/images/diceImages/dice3.png";
      return (3);
      break;
    case 4:
      document.getElementById("player1dice").src = "/images/diceImages/dice4.png";
      return (4);
      break;
    case 5:
      document.getElementById("player1dice").src = "/images/diceImages/dice5.png";
      return (5);
      break;
    case 6:
      document.getElementById("player1dice").src = "/images/diceImages/dice6.png";
      return (6);
      break;
  }
}

function changeImage2() {
  var randomNumber2c = getRandomInt(1, 7);
  switch (randomNumber2c) {
    case 1:
      document.getElementById("player2dice").src = "/images/diceImages/dice1.png";
      return (1);
      break;
    case 2:
      document.getElementById("player2dice").src = "/images/diceImages/dice2.png";
      return (2);
      break;
    case 3:
      document.getElementById("player2dice").src = "/images/diceImages/dice3.png";
      return (3);
      break;
    case 4:
      document.getElementById("player2dice").src = "/images/diceImages/dice4.png";
      return (4);
      break;
    case 5:
      document.getElementById("player2dice").src = "/images/diceImages/dice5.png";
      return (5);
      break;
    case 6:
      document.getElementById("player2dice").src = "/images/diceImages/dice6.png";
      return (6);
      break;
  }
}

function compare() {
  var randomNumber1 = changeImage1();
  var randomNumber2 = changeImage2();
  if (randomNumber1 > randomNumber2) {
    document.getElementById("h6").innerHTML = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.getElementById("h6").innerHTML = "Player 2 wins!";
  } else if (randomNumber1 == randomNumber2) {
    document.getElementById("h6").innerHTML = "Draw!";
  }

}
