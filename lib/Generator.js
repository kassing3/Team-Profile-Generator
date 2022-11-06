const inquirer = require("inquirer");
const { writeFile } = require('fs').promises;

// Exit the inquirer prompt
function exit () {
    prompt.ui.close();
}
  
// close inquirer input if user press "escape" key
process.stdin.on('keypress', (_, key) => {
if (key.name === "escape") {
    exit();
}
});



class Generator {

    launchGenerator() {
        this.getManager();
    }

    getManager() {
        return inquirer
            .prompt([
                //Initial Prompts for Manager's Info
                {
                    type: "input",
                    name: "managerName",
                    message: "What is the team's Manager name?",
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "Please provide the Manager's Employee ID 6-digit ID Number.",
                    validate: val => {
                        if(val.length < 6 || val.length > 6 || !val.match(/[0-9]/g)) {
                            console.log("\nPlease provide a 6-digit number for the employee's ID.");
                        } else {
                            return true;
                        };
                    },
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is the team's Manager email?",
                    validate: val => {
                        let email = (val.match("@.")) ? true : console.log("\nPlease provide a valid email");
                        return email;
                    },
                },
                {
                    type: "input",
                    name: "managerOfficeNum",
                    message: "What is the manager's Office Phone Number? (Example: 000-000-0000",
                    validate: val => {
                        if(val.length < 12 || val.length > 12 || !val.match(/[0-9]/g) || !val.match("-")) {
                            console.log("\nPlease provide a 10-digit phone number in the following format: 000-000-0000");
                        } else {
                            return true;
                        };
                    }
                },

                //Menu Prompt to either add employees or finish building
                {
                    type: "list",
                    name: "menu",
                    message: "MENU: Would you like to add add an Engineer, Intern, or Finish Building Team?",
                    choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
                },
                //Engineer Prompts
                {
                    type: "input",
                    name: "engineerName",
                    message: "What is the Engineer's name?",
                    when: answers => answers.menu === "Add Engineer",
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "Please provide the Engineer's Employee ID 6-digit ID Number.",
                    validate: val => {
                        if(val.length < 6 || val.length > 6 || !val.match(/[0-9]/g)) {
                            console.log("\nPlease provide a 6-digit number for the employee's ID.");
                        } else {
                            return true;
                        };
                    },
                    when: answers => answers.menu === "Add Engineer",
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is the  Engineer's email?",
                    validate: val => {
                        let email = (val.match("@.")) ? true : console.log("\nPlease provide a valid email");
                        return email;
                    },
                    when: answers => answers.menu === "Add Engineer",
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the  Engineer's Github Username?",
                    when: answers => answers.menu === "Add Engineer",
                    
                },
               
                //Intern Prompts
                {
                    type: "input",
                    name: "internName",
                    message: "What is the Intern's name?",
                    when: answers => answers.menu === "Add Intern",
                },
                {
                    type: "input",
                    name: "internId",
                    message: "Please provide the Intern's Employee ID 6-digit ID Number.",
                    validate: val => {
                        if(val.length < 6 || val.length > 6 || !val.match(/[0-9]/g)) {
                            console.log("\nPlease provide a 6-digit number for the employee's ID.");
                        } else {
                            return true;
                        };
                    },
                    when: answers => answers.menu === "Add Intern",
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "What is the Intern's email?",
                    validate: val => {
                        let email = (val.match("@.")) ? true : console.log("\nPlease provide a valid email");
                        return email;
                    },
                    when: answers => answers.menu === "Add Intern",
                },
                {
                    type: "input",
                    name: "school",
                    message: "What school does the Intern attend?",
                    when: answers => answers.menu === "Add Intern",
                    
                },
                
            ])
            
    }



}


module.exports = Generator;