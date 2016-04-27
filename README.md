## Status

...in progress

## Synopsis & Motivation

This project is the result of wanting a simple bed side alarm clock that I could set my preferred MP3 as my wakeup alarm, play other music with a sleep timer, and have a cool clock color. This proved difficult to find given most people use their cell phones for alarm clocks. Nevertheless it made for an interesting project that revealed an easy way to develop applications for the Raspberry Pi.

After consulting with a friend who's also a developer about the full feature list I had planned (see below), I realized that the Raspberry Pi was the best tool to use for this project given time constraints and a narrowed choice of the Raspberry Pi or Arduino. The next thing to figure out was what I would use to write the application. I primarily operate on Linux and OSX so the Lazarus IDE ended up being the perfect choice...or was it?

Free Pascal is a great tool for many projects and is especially useful when programing ARM devices. Plus with [Lazarus IDE](http://www.lazarus-ide.org/ "Lazarus IDE Homepage") "you don't need to do any recoding to produce identical products for different platforms." But for my busy schedule that wasn't good enough. I know a little Ruby and JavaScript but no Pascal and had no experience with the Lazarus IDE. Plus I was already swamped with other projects.

So I kept researching alternatives until I found that I can use [Electron](http://electron.atom.io/ "Electron Homepage") to easily create a desktop app for the Raspberry Pi with JavaScript HTML and CSS. Much faster than diving into a new language and IDE. Plus I can code in my favorite text editor (Sublime Text). NW.js would have been my preferred solution but there were some issues with nw.js and ARM devices when I started this project.   



## Project Tools

### Raspberry Pi

* Raspberry Pi 3
* Raspbian Jessie, Version: March 2016, Kernel version: 4.1
* 7" Touchscreen Display for Raspberry Pi

### Languages, Frameworks & Web Development Technologies

* CSS
* HTML
* JavaScript
* jQuery
* Node.js
* Electron

### Downloaded Plugins

* [Font-Awesome](https://fortawesome.github.io/Font-Awesome/ "Font-Awesome Homepage")
* [jQuery](https://jquery.com/ "jQuery Homepage")

## Features

* 2 Alarms
* Custom day of week settings for each alarm
* Wake to MP3 on local file system
* 4 clock color choices in settings menu
* Analog or Digital Clock
* No internet access required
* Sleep timer (comming soon)
* Local speaker (coming soon)
* BlueTooth (coming soon)
* Battery backup (coming soon)

## Pic's

...coming soon

## Documentation & Usage Tutorials

...coming soon

## Installation

You can compile and run this application on Windows, OSX or Linux. However, it was designed for the Raspberry Pi 3. The following assumes you are running Raspbian OS on your Pi. To get started:

```bash
# 1. Update your Raspbian Software
$ sudo apt-get update && sudo apt-get dist-upgrade
# 2. Install nodejs (With support for ARM processors) on your Raspberry Pi
$ curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash - 
$ sudo apt-get install -y nodejs  
# 3. Clone this repository
git clone https://github.com/jtlindsey/raspberry-pi-alarm-clock.git
# 4. Go into the repository
cd raspberry-pi-alarm-clock
# 5. Install dependencies and run the app
npm install && npm start
```

## Creators

**John Travis Lindsey**

* <a href="http://jtlindsey.com/" target="_blank">jtlindsey.com</a>
* <a href="https://github.com/jtlindsey" target="_blank">github.com/jtlindsey</a>


## License

[Click to read License information.](https://github.com/jtlindsey/raspberry-pi-alarm-clock/blob/master/LICENSE "License")

