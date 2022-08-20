const Employee = require("./Employee");
// A child class that extends employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); // suoer indicates what properties the child class will inherit from the parent
        this.github = github;
        
    }
    getGitHub(){
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer; 