## Status

...in progress

## Project Tools

### Raspberry Pi

* Raspberry Pi 3
* Raspbian Jessie, Version: March 2016, Kernel version: 4.1
* 7" Touchscreen Display for Raspberry Pi

### Languages & Development Technologies

* CSS
* HTML
* JavaScript
* jQuery
* Node.js
* Electron

### Downloaded Plugins

* [Font-Awesome](https://fortawesome.github.io/Font-Awesome/ "Font-Awesome Homepage")
* [jQuery](https://jquery.com/ "jQuery Homepage")

## Installation

You can compile and run this application on Windows, OSX or Linux. However, it was designed for the Raspberry Pi 3. The following assumes you are running Raspbian OS on your Pi. To get started:

```bash
# 1. Update your Raspbian Software
sudo apt-get update && sudo apt-get dist-upgrade
# 2. Install nodejs (With support for ARM processors) on your Raspberry Pi
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash - 
sudo apt-get install -y nodejs  
# 3. Clone this repository
git clone https://github.com/jtlindsey/raspberry-pi-alarm-clock.git
# 4. Go into the repository
cd raspberry-pi-alarm-clock
# 5. Install dependencies and run the app
npm install && npm start
```

## Creators

**J Travis Lindsey** | <a href="http://jtlindsey.com/" target="_blank">jtlindsey.com</a>



## License

[Click to read License information.](https://github.com/jtlindsey/raspberry-pi-alarm-clock/blob/master/LICENSE "License")  


[![Analytics](https://ga-beacon.appspot.com/UA-77922886-2/raspberry-pi-alarm-clock/readme?pixel&useReferer)](https://github.com/igrigorik/ga-beacon)
