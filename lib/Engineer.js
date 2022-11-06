// Employee's Properties, github <--Github Username, getGithub(), get Role()<-- Overridden to return Engineer
// consider adding validation to ensure that user input provided is in the proper expected format

const Employee = require("./Employee")

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    };

    getRole() {
        return "Engineer";
    };

    getGithub() {
        return this.github;
    };

}

module.exports = Engineer;