const inquirer = require("inquirer");
const { writeFile } = require('fs').promises;

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");


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

teamArr = [];

class Generator {

    launchGenerator() {
        this.getManager();
    };

    addEmployeeMenu () {

        return inquirer
        .prompt([
            {
                type: "list",
                name: "menu",
                message: "MENU: Would you like to add add an Engineer, Intern, or Finish Building Team?",
                choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
            },
        ])
        .then (val => {
            switch (val.menu){
                case "Add Engineer":
                    return this.getEngineer();
                case "Add Intern":
                    return this.getIntern();
                case "Finish Building Team":
                    console.log("\nYour team's roster is complete!");
                    console.log(teamArr);
                    process.exit(0);
            }
        })


    }

    getManager() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the team's Manager name?",
                },
                {
                    type: "input",
                    name: "id",
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
                    name: "email",
                    message: "What is the team's Manager email?",
                    validate: val => {
                        let email = (val.match("@.")) ? true : console.log("\nPlease provide a valid email");
                        return email;
                    },
                },
                {
                    type: "input",
                    name: "officeNum",
                    message: "What is the manager's Office Phone Number? (Example: 000-000-0000)",
                    validate: val => {
                        if(val.length < 12 || val.length > 12 || !val.match(/[0-9]/g) || !val.match("-")) {
                            console.log("\nPlease provide a 10-digit phone number in the following format: 000-000-0000");
                        } else {
                            return true;
                        };
                    }
                },
            ])
            .then(managerInput => {
                const {name, id, email, officeNum } = managerInput;
                const manager = new Manager(name, id, email, officeNum);

                teamArr.push(manager);
                console.log(manager);

                this.addEmployeeMenu();
            })
            
    }

    getEngineer() {
        return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Engineer's name?",
            },
            {
                type: "input",
                name: "id",
                message: "Please provide the Engineer's Employee ID 6-digit ID Number.",
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
                name: "email",
                message: "What is the  Engineer's email?",
                validate: val => {
                    let email = (val.match("@.")) ? true : console.log("\nPlease provide a valid email");
                    return email;
                },
            },
            {
                type: "input",
                name: "github",
                message: "What is the Engineer's Github Username?",
            },
        ])
        .then ( engineerInput => {
            const {name, id, email, github } = engineerInput;
            const engineer = new Engineer(name, id, email, github);

            teamArr.push(engineer);
            console.log(engineer);

            this.addEmployeeMenu();
        })
    }

    getIntern(){
        return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Intern's name?",
            },
            {
                type: "input",
                name: "id",
                message: "Please provide the Intern's Employee ID 6-digit ID Number.",
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
                name: "email",
                message: "What is the Intern's email?",
                validate: val => {
                    let email = (val.match("@.")) ? true : console.log("\nPlease provide a valid email");
                    return email;
                },
            },
            {
                type: "input",
                name: "school",
                message: "What school does the Intern attend?",
                
            },
        ])
        .then(internInput => {
            const {name, id, email, school } = internInput;
            const intern = new Intern(name, id, email, school);

            teamArr.push(intern);
            console.log(intern);

            this.addEmployeeMenu();
        })
    }

}


module.exports = Generator;