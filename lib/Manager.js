// Employee's Properties, Office Number, getRole() <-- Overridden to Return 'Manager' 
// consider adding validation to ensure that user input provided is in the proper expected format
const Employee = require("../lib/Employee")


class Manager extends Employee {
    constructor(name, id, email, officeNum){

        super(name, id, email)

        this.officeNum = officeNum;
    };

    getRole() {
        return "Manager"
    };

    getOfficeNumber() {
        return this.officeNum;
    };

}

module.exports = Manager;