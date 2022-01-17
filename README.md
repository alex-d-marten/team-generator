# team-generator

## Description
This repository contains code that can be used to generate a team profile. This is accomplished using Node.js, inquirer, and jest. and all interactions are done through the command line interface. When the program is started, the user is asked first to input details about the manager and these are required. After filling these prompts out, the user is then prompted to add an engineer or an intern. Depending on the selection, prompts for the engineers and interns will be presented to the user for answering. After answering these prompts the user will be asked again if they would like to add another engineer or intern to the team. Upon completion, a index.html file is generated which contains the code for the team profile. All styling was done with Bootstrap and no style sheets were needed. The team

## How to use this repository
First, clone the repo and navigate to the directory of the repository. Node.js is required to run this application so be sure to install this as well. Once in the directory, run npm install inquirer to be able to use the inquirer module in the code. Additonally, to run any tests, run npm install jest. Once jest is installed, simply run npm test from the CLI. With everything set up now, in the root directory of the project simply run node index.js to begin the program. After that just follow the prompts to get to your team profile html.

## Walkthrough Video
[How to run the team-generator](https://drive.google.com/file/d/1P0OJwbrLTDoZM8Scu3Ej1F2lTd99NPsP/view?usp=sharing)