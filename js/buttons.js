var fs = require("fs");

//blue
document.getElementById("btn1").onclick = function() {myDigitalClockColor("#1e90ff")};
//silver
document.getElementById("btn2").onclick = function() {myDigitalClockColor("#c0c0c0")};
//green
document.getElementById("btn3").onclick = function() {myDigitalClockColor("#009900")};
// red
document.getElementById("btn4").onclick = function() {myDigitalClockColor("#ff0000")};

function myDigitalClockColor(color) {
  mySettings.clockColor = color;
  document.getElementById("digital-clock").style.color = color;
  saveSettings();
};

  
document.getElementById("digital-clock").onclick = function() {changeDiv("digital-clock", "settings")};

document.getElementById("done").onclick = function() {changeDiv("settings", "done")};

function changeDiv(hideDivID, showDivID) {
  $("#" + hideDivID).hide();
  if (showDivID == "done") {
    $("#digital-clock").show();
  } else {
    $("#" + showDivID).show();
    $('.your-class').get(0).slick.setPosition();
  }
};

// temporary
$('#change-numbers').on('afterChange', function(event, slick, currentSlide, nextSlide){
  console.log($(slick.$slides.get(currentSlide)).text());
});