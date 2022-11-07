# Team Profile Generator
  [![The MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


  ## Description
  This program allows a manager to generate a webpage that displays their team's basic info through a series of prompts. The webpage provides quick access to their team's emails and GitHub profiles. This program is based on the following acceptance criteria:

  ```
    GIVEN a command-line application that accepts user input
    WHEN I am prompted for my team members and their information
    THEN an HTML file is generated that displays a nicely formatted team roster based on user input
    WHEN I click on an email address in the HTML
    THEN my default email program opens and populates the TO field of the email with the address
    WHEN I click on the GitHub username
    THEN that GitHub profile opens in a new tab
    WHEN I start the application
    THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    WHEN I enter the team manager’s name, employee ID, email address, and office number
    THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    WHEN I select the engineer option
    THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    WHEN I select the intern option
    THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
    WHEN I decide to finish building my team
    THEN I exit the application, and the HTML is generated
  ```
 
  ## Installation
  To use this program, you must have node and inquirer installed using the command ```npm install```

  ## Usage
  To use this program to create a team's profile and webpage, open the command line in the designated folder and use the command ```node index.js```

  For a better understanding of it's functionality and how to use the program, feel free to view the [Walk-through Video](https://watch.screencastify.com/v/VQDZpbuMN6kgBjh21NRp).

  **Here's a screenshot of the website created with the prompts:**

  ![MockUp](./images/Mock%20Up%20of%20Team%20Profile%20Generator.png)


  ## License
  This project is licensed under [The MIT License](https://opensource.org/licenses/MIT)


  ## Tests
  To test this application, feel free to clone this repo in github, install inquirer using ```npm install``` in the command line, and then enter ```node index.js ``` in the command line.	

 

