# _The New Pandemic_

#### _A pandemic style board game built in 2 days, 6.29.20_

#### By _**Taylor Phillips and Teresa Rosinski**_

## Description

_This is a 2 day project at Epicodus to build a Pandemic style board game.  A game where 2 players collaborate to defeat the infection rate.  Players roll dice to reduce, or increase(!) the infection rate and every 60 seconds the value of the roll is changed.  The goal is to reduce the infection rate to 0._

### TDD Specs
| Spec | Input | Output |
| :-------------   | :------------- | :------------- |
| Player1 will press button to roll the 6-sided dice  |  button press   |  5    |
| Player2 will press button to roll the 6 sided dice  | button press  |   3 |
| When first dice roll occurs, 300 second timer begins | button press  |  timer begins   |
| Even rolled numbers will add to the infection rate |  4  |  infection rate increased by 4%  |
| Odd rolled numbers will reduce the infection rate |  5  |  Reduce infection rate by 5%   |
| -----  | ------ | ----- |
|After every 60 seconds a new element will be added to the dice roll for the next 60 seconds |     |     |
|For the first 60 seconds, a rolls' value is equal to the roll | 3 | 3  |
|For the seconds from 61 -120, a rolls' value is doubled | 3 | 6
|For the seconds from 121 - 180, a rolls' value is tripled | 3 | 9
|For the seconds from 181 - 240, a rolls' value is quadrulpled | 3 | 12
|For the seconds from 241 - 300, a rolls' value is 5x | 3 | 15
|The effect of the roll (whether it acts like an odd or even number) is determined by the final value of the roll | 3 during seconds 61 - 120 | it is changed to a 6 and it adds to the infection rate
|Game ends after 20 rounds or 5 minutes (300 seconds) |  20 dice rolls or 5 minutes time or infection rate exceeding 100%  |   game over  |


## Setup/Installation Requirements

* _Install Git Bash_
* _Using a Terminal on desktop, user will need to type git init_
* _go to this repository and clone then Open in Desktop_
* _Will likely need Git for Desktop which can be found here: https://help.github.com/en/desktop/getting-started-with-github-desktop/installing-github-desktop_
* _Clone file to desktop from repo on github_
* _run index.html with web browser_
* _Other option is to go to Repository on git hub and download zip_
* _Retrieve zip file in downloads on computer and double click to unpack_
* _Find the project folder on desktop or downloads folder_
* _Run index.html with web browser

## Known Bugs

_ _
## Support and contact details

_Contact me at...._

## Technologies Used

_HTML_
_CSS_
_Bootstrap_
_JavaScript_
_JQuery_
_VSCode_

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2020 **_Taylor Phillips and Teresa Rosinski_**