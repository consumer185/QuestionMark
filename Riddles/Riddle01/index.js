var correctAnswer = ["12", "ALL OF THEM", "TWELVE", "ALL 12", "ALL TWELVE"]; //the correct answer(s) for this specific page

userInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submitButton").click();
  }
});

$("#submitButton").click(function() {
  checkAnswer();
});

function checkAnswer() {
  var convertedAnswer = $("#userInput").val();
  convertedAnswer = convertedAnswer.toUpperCase();
if (correctAnswer.includes(convertedAnswer)) {
    answerIsCorrect();
  }
  else if (convertedAnswer === "") {
    console.log("nothing entered");
  }
  else if (convertedAnswer === "???") {
    console.log("nothing entered");
  }
 else {
    answerIsWrong();
  }
}

function answerIsCorrect() {
  console.log("correct answer!");
  $("#answer").show();
  $("#answer").text("yes");
  $("#continue").show();
  $("#userInput").prop("disabled", true);
  $("#submitButton").prop("disabled", true);
}

function answerIsWrong() {
  console.log("wrong answer! going into cooldown");
  cooldown();
  setTimeout(function() {
    $("#answer").hide();
  }, 2000);
}

function cooldown() {
  $("#answer").show();
  $("#answer").text("wrong! try again in ");
  $("#userInput").addClass("userInputCooldown");
  $("#submitButton").addClass("submitButtonCooldown");
  $("#submitButton").prop("disabled", true);
  $("#userInput").prop("disabled", true);
  $("#submitButton").val("10");

  setTimeout(function() {
    $("#submitButton").prop("disabled", false);
    $("#userInput").prop("disabled", false);
    $("#userInput").removeClass("userInputCooldown");
    $("#submitButton").removeClass("submitButtonCooldown");
    $("#submitButton").val("OK");
  }, 10000);

// for cooldown timer of 10 seconds
var cooldownInSeconds = 9;
var downloadTimer = setInterval(function(){
  if(cooldownInSeconds <= 1){
    clearInterval(downloadTimer);
  }
  $("#submitButton").val(cooldownInSeconds);

  cooldownInSeconds -= 1;
}, 1000);
}
