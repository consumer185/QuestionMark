var correctAnswer = ["POSTBOX", "A POSTBOX", "POST BOX", "A POST BOX", "LETTERBOX", "A LETTERBOX", "LETTER BOX", "A LETTER BOX"]; //the correct answer(s) for this specific page
var wrongAnswerResponse = ["I EXPECTED SO MUCH MORE FROM YOU THAN THIS.",
  "STOP GUESSING AND USE YOUR, ADMITTEDLY INFERIOR, MIND.",
  "IF YOU KEEP GUESSING YOU WILL KEEP FAILING.",
  "THIS ISN'T EVEN DIFFICULT, NOT FOR ME ANYWAY.",
  "HA HA! TRULY AWFUL, DARK KNIGHT. TRY AGAIN.",
  "I HATE TO SAY IT, BUT WRONG, WRONG, WRONG!"
]





var timercountdown = new Audio("../../sfx/timercountdown.wav");
var wrong = new Audio("../../sfx/wrong.wav");
var correct = new Audio("../../sfx/correct.wav");



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
  } else if (convertedAnswer === "") {
    console.log("nothing entered");
    $("#answer").text("TYPE SOMETHING, DARK KNIGHT.");
    $("#answer").show();


  } else if (convertedAnswer === "???") {
    console.log("nothing entered");
  } else {
    answerIsWrong();
  }
}

function answerIsCorrect() {
  console.log("correct answer!");
  $("#continue").show();
  $("#userInput").prop("disabled", true);
  $("#submitButton").prop("disabled", true);
  correct.play();
}

function answerIsWrong() {
  console.log("wrong answer! going into cooldown");
  wrong.play();
  cooldown();
}

function cooldown() {
  var randomIndex = (Math.floor(Math.random() * wrongAnswerResponse.length));
  var randomWrongAnswerResponse = wrongAnswerResponse[randomIndex];
  $("#answer").text(randomWrongAnswerResponse);
  $("#answer").show();
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
    $("#answer").hide();
  }, 10000);

  // for cooldown timer of 10 seconds
  var cooldownInSeconds = 9;
  var downloadTimer = setInterval(function() {
    if (cooldownInSeconds <= 1) {
      clearInterval(downloadTimer);
    }
    $("#submitButton").val(cooldownInSeconds);
    timercountdown.play();
    cooldownInSeconds -= 1;
  }, 1000);
}
