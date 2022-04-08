$("#submitButton").click(function() {

  if ($("#userInput").val() === "12") {
    correctAnswer();
  } else {
    wrongAnswer();
  }
});



function correctAnswer() {
  console.log("correct answer!");
  $("#answer").show();
  $("#answer").text("yes");
$("#continue").show();

}

function wrongAnswer() {
  console.log("wrong answer!");
  $("#answer").show();
  $("#answer").text("wrong!");

  setTimeout(function(){
  $("#answer").hide();
  },2000);



}
