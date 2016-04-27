
document.body.onload = function() {
  updateDigitalClockAmPM(); setInterval('updateDigitalClockAmPM()', 1000 );
  updateDigitalClock(); setInterval('updateDigitalClock()', 1000 );
  updateAnalogueClock();
}

function updateDigitalClockAmPM() {
  var currentTime       = new Date ();
  var currentHours      = currentTime.getHours();
  var timeOfDay         = (currentHours < 12) ? "AM" : "PM";
  document.getElementById("digital-clock-am-pm").innerHTML = " " + timeOfDay;
}

function updateDigitalClock() {
  var currentTime       = new Date ();
  var currentHours      = currentTime.getHours();
  var currentMinutes    = currentTime.getMinutes();

  currentMinutes        = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentHours          = (currentHours > 12) ? currentHours - 12 : currentHours;
  currentHours          = (currentHours == 0) ? 12 : currentHours;
  var currentTimeString = currentHours + ":" + currentMinutes;

  document.getElementById("digital-clock-time").innerHTML = currentTimeString;
}

function updateAnalogueClock() {

}