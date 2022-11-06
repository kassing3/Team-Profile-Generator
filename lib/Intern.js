// Employee's Properties, school, getSchool(), get Role()<-- Overridden to return Intern
// consider adding validation to ensure that user input provided is in the proper expected format

const Employee = require("./Employee")

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    };

    getRole() {
        return "Intern";
    };

    getSchool() {
        return this.school;
    };

}

module.exports = Intern;