// Name, Id, email, getName(), getID(), getEmail(), getRole()<--Returns 'Employee'
// consider adding validation to ensure that user input provided is in the proper expected format

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }



}

