var myFile = require("./data/settings.json");
var filePathString = "data/settings.json";
// Javascript object to JSON text and stores that JSON text in a string.
var mySettings = JSON.stringify(myFile);;
// turns JSON string into a JavaScript object.
mySettings = JSON.parse(mySettings);

loadSavedSettings();

function loadSavedSettings() {
  document.getElementById("digital-clock").style.color = mySettings.clockColor;
};

function saveSettings() {
  // Serialize as JSON and Write it to a file
  fs.writeFileSync(filePathString, JSON.stringify(mySettings, null, 2));
};






// {
//     "clockColor": "#FF69B4",
//     "yourName": "Travis",
//     "alarm1": [
//       {
//         "sound": "",
//         "activeTime": "",
//         "activeDays": ""
//       }
//     ],
//     "alarm2": [
//       {
//         "sound": "",
//         "activeTime": "",
//         "activeDays": ""
//       }
//     ]        
// }