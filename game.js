
alert("steps to play simon game");
alert("Firstly, the game shows the first colour in the sequence (blue).You have to clicks on the blue button.");
alert("Next, the game shows the next colour (red), you have to remember the sequence is blue, red and so on and so forth.");
alert("If you messes up the sequence, then the game ends.");
alert("Let's start");

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;


var level = 0;

 
$(document).keypress(function() {
  if (!started) {

     
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
 
$(".btn").click(function() {

  
  var userChosenColour = $(this).attr("id");

   
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel) {

     
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

       
      if (userClickedPattern.length === gamePattern.length){

        
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");

      playSound("wrong");

       
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

       
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }

    

}

 
function nextSequence() {

    userClickedPattern = [];

  level++;

  $("#level-title").text("Level " + level);

    
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}


  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}

function animatePress(currentColor) {

     
    $("#" + currentColor).addClass("pressed");
  
     
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  
  function startOver() {

    level = 0;
    gamePattern = [];
    started = false;
  }
  
