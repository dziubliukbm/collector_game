$(document).ready(function startGame() {
 
  //Set global variables
  var totalScore = 0;
  var randomNum = 0;
  var btnNum1 = 0;
  var btnNum2 = 0;
  var btnNum3 = 0;
  var btnNum4 = 0;
  var wins = 0;
  var losses = 0;

  //Grab the random numbers to begin the game
  resetNum()

  //Create function to assign random numbers to point target and to each crystal
  function resetNum() {
    //Randomly generate a number from 19 to 120 to match, then post to DOM
    randomNum = Math.floor(Math.random() * 101 + 19);
    $("#random").text(randomNum);
    console.log("random: " + randomNum);

    //Randomly assign a number between 1 -12 to each crystal
    btnNum1 = Math.floor(Math.random() * 12) + 1;
    console.log("btn1: " + btnNum1);

    btnNum2 = Math.floor(Math.random() * 12) + 1;
    console.log("btn2: " + btnNum2);

    btnNum3 = Math.floor(Math.random() * 12) + 1;
    console.log("btn3: " + btnNum3);

    btnNum4 = Math.floor(Math.random() * 12) + 1;
    console.log("btn4: " + btnNum4);
  }

  //When each crystal is clicked, add that corresponding number to the totalScore and display o DOM
  $("#blue").on("click", function() {
    totalScore += btnNum1;
    console.log("Blue is set to: " + totalScore); //DELETE FOR ACTUAL GAME PLAY
    $("#total_score").text(totalScore);
    winloss();
  });

  $("#pink").on("click", function() {
    totalScore += btnNum2;
    console.log("Pink is set to: " + totalScore);  //DELETE FOR ACTUAL GAME PLAY
    $("#total_score").text(totalScore);
    winloss();
  });

  $("#purple").on("click", function() {
    totalScore += btnNum3;
    console.log("Purple is set to: " + totalScore);  //DELETE FOR ACTUAL GAME PLAY
    $("#total_score").text(totalScore);
    winloss();
  });

  $("#yellow").on("click", function() {
    totalScore += btnNum4;
    console.log("Yellow is set to: " + totalScore);  //DELETE FOR ACTUAL GAME PLAY
    $("#total_score").text(totalScore);
    winloss();
  });

  //Create function where if the user busts, losses++ -- OR -- if the user matches number, win ++
  function winloss() {
    if (totalScore === randomNum) {
      alert("Great Job! You got exactly " + randomNum + " !");
      wins++;
      console.log("Wins: " + wins);
      $("#wins").text(wins);
      alert("The Numbers have been reset, Let's play again!");
      totalScore = 0;
      $("#total_score").text(totalScore);
      resetNum();
    } 
    
    else if (totalScore > randomNum) {
      alert("Oh no! You went too high above the target number!");
      losses++;
      $("#losses").text(losses);
      console.log(losses);
      alert("The Numbers have been reset, try again!");
      totalScore = 0;
      $("#total_score").text(totalScore);
      resetNum();
    }

  //End of winloss Function
  }

//End of startGame function
});

//Start the game again
startGame();