

function checkWinnings() {

  let b1 = $("#b1").val();
  let b2 = $("#b2").val();
  let b3 = $("#b3").val();
  let b4 = $("#b4").val();
  let b5 = $("#b5").val();
  let b6 = $("#b6").val();
  let b7 = $("#b7").val();
  let b8 = $("#b8").val();
  let b9 = $("#b9").val();

  let gameboard = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9]
  ];

  let winningPositions = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
    [b3, b5, b7],
    [b1, b5, b9]
  ]

  console.log(winningPositions[0]);
  const allEqual = arr => arr.every(v => v === arr[0])
  // const allXO = arr => arr.every(val => val =="X" || val == "O");
  // let allDone = allXO(gameboard);

  for (let i = 0; i < winningPositions.length; i++) {

  //  let result = allEqual(winningPositions[i]);
    //let allDone = allXO(gameboard);

    if (result == true && winningPositions[i][0] == "X") {
      $("#status").text("Player 1 wins");
        $("input").prop('disabled',true);
    }

    else if (result == true && winningPositions[i][0] == "O") {
      $("#status").text("Player 2 wins");
        $("input").prop('disabled',true);
    }

    else if (allXO == true){
        $("#status").text("Tie");
          $("input").prop('disabled',true);
    }

  }
}

let flag = 1;


$("input").click(function(event) {
  var space = $(this).attr("id");
  console.log(space);
  fill(space);
  checkWinnings();
});



function fill(space) {
  console.log(space);


  if (flag === 1) {
    $("#" + space).val("X");
    $("#" + space).prop('disabled', true);
    $("#status").text("Player 2's Turn");
    flag = 0;
  } else if (flag === 0) {
    $("#" + space).val("O");
    $("#" + space).prop('disabled', true);
    $("#status").text("Player 1's Turn");
    flag = 1;
  }
}

function reset() {
  $("input").val(null);
  $("input").prop('disabled', false);
  $("#status").text("Player 1's Turn");
  player = 1;
}
