/*
This is the correct answer for this specific page, obviously change it for each individual page!
*/

var correctAnswer = "12";


$("#submitButton").click(function() {
  checkAnswer();
});


function checkAnswer() {
  if ($("#userInput").val() === correctAnswer) {
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
}

function answerIsCorrect() {
  console.log("correct answer!");
  $("#answer").show();
  $("#answer").text("yes");
  $("#continue").show();
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

  setTimeout(function() {
    $("#submitButton").prop("disabled", false);
    $("#userInput").removeClass("userInputCooldown");
    $("#submitButton").removeClass("submitButtonCooldown");
  }, 10000);

//submit button cooldown display
  $("#submitButton").val("10");
  setTimeout(function() {
    $("#submitButton").val("09");
  }, 1000);
  setTimeout(function() {
    $("#submitButton").val("08");
  }, 2000);
  setTimeout(function() {
    $("#submitButton").val("07");
  }, 3000);
  setTimeout(function() {
    $("#submitButton").val("06");
  }, 4000);
  setTimeout(function() {
    $("#submitButton").val("05");
  }, 5000);
  setTimeout(function() {
    $("#submitButton").val("04");
  }, 6000);
  setTimeout(function() {
    $("#submitButton").val("03");
  }, 7000);
  setTimeout(function() {
    $("#submitButton").val("02");
  }, 8000);
  setTimeout(function() {
    $("#submitButton").val("01");
  }, 9000);
  setTimeout(function() {
    $("#submitButton").val("OK");
  }, 10000);
}
