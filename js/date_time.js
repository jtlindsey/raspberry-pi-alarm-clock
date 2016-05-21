var currentTime, currentHours;

document.body.onload = function() {
  setInterval('getTime()', 1000 );
  setInterval('updateDigitalClockAmPM(currentTime, currentHours)', 1000 );
  setInterval('updateDigitalClock(currentTime, currentHours)', 1000 );
  updateAnalogueClock();
}

function getTime() {
  currentTime   = new Date ();
  currentHours  = currentTime.getHours();
}

function updateDigitalClockAmPM(currentTime, currentHours) {
  var timeOfDay = (currentHours < 12) ? "AM" : "PM";
  document.getElementById("digital-clock-am-pm").innerHTML = " " + timeOfDay;
}

function updateDigitalClock(currentTime, currentHours) {
  var currentMinutes    = currentTime.getMinutes();

  currentMinutes        = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentHours          = (currentHours > 12) ? currentHours - 12 : currentHours;
  currentHours          = (currentHours == 0) ? 12 : currentHours;
  var currentTimeString = currentHours + ":" + currentMinutes;

  document.getElementById("digital-clock-time").innerHTML = currentTimeString;
}

function updateAnalogueClock(currentTime, currentHours) {

}