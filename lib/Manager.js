// Employee's Properties, Office Number, getRole() <-- Overridden to Return 'Manager' 
// consider adding validation to ensure that user input provided is in the proper expected format
const Employee = require("../lib/Employee")


class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email )
        this.officeNumber = officeNumber;
    }

}