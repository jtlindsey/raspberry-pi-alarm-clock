var fs = require("fs");

//blue
document.getElementById("btn1").onclick = function() {myDigitalClockColor("#1e90ff")};
//silver
document.getElementById("btn2").onclick = function() {myDigitalClockColor("#c0c0c0")};
//green
document.getElementById("btn3").onclick = function() {myDigitalClockColor("#009900")};
// red
document.getElementById("btn4").onclick = function() {myDigitalClockColor("#ff0000")};

document.getElementById("my-file").onclick = function() {
  myDigitalClockColor(mySettings.clockColor);
};

document.getElementById("save").onclick = function() {
  saveSettings();
};

function myDigitalClockColor(color) {
  mySettings.clockColor = color;
  document.getElementById("digital-clock").style.color = color;
  saveSettings();
};