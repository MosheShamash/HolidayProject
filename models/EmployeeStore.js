var Employee = require('../models/Employee.js')
var fs = require('fs');

class EmployeeStore {
    constructor(){





    }


    save(employee){
        var tempEmployee = employee

        var jsonFile = fs.readFileSync("./data/employee.json","utf-8");
        var parsedFile = JSON.parse(jsonFile)

        parsedFile.employees.push(tempEmployee);

        var data = JSON.stringify(parsedFile,null,4)

        fs.writeFileSync("./data/employee.json", data,"utf-8");

        return data

    }



    load() {
        var jsonFile = fs.readFileSync("./data/employee.json","utf-8")
        var parsedFile = JSON.parse(jsonFile)

        return parsedFile.employees

    }

    deleteFile() {
        var jsonFile = fs.readFileSync("./data/blankEmployee.json","utf-8");
        var parsedFile = JSON.parse(jsonFile)
        var data = JSON.stringify(parsedFile,null,4)
        fs.writeFileSync("./data/employee.json", data, "utf-8")
    }
}

module.exports = EmployeeStore