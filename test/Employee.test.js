// Name, Id, email, getName(), getID(), getEmail(), getRole()<--Returns 'Employee'
// consider adding validation to ensure that user input provided is in the proper expected format

const Employee = require("../lib/Employee");

describe ( "Employee Class", () => {

    describe("Employee Class Constructor", () => {
        it("should create an object with the provided arguments for name, id, and email", () => {
            const employee = new Employee("Leslie", "123123", "les@comp.com");

            expect(store).toBe({name:"Leslie", id:"123123", email:"les@comp.com"});
        })
    });

    describe("getName", () => {

        it("should return the given Employee's name from the employee's object", ()=> {
            

            expect(store.getName()).toBe("Leslie");

        });

    });

    describe("getId", () => {

        it("should return the given Employee's id from the employee's object", ()=> {
            

            expect(store.getId()).toBe("123123");

        });
        
    });

    describe("getId", () => {

        it("should return the given Employee's email from the employee's object", ()=> {
            

            expect(store.getEmail()).toBe("les@comp.com");

        });
        
    });

    describe("getRole", () => {

        it("should return the sting 'Employee'", ()=> {
            

            expect(store.getRole()).toBe("les@comp.com");

        });
        
    });



});