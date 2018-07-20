const chai = require('chai')
const expect = chai.expect

var Employee = require('../models/Employee.js')
var Booking = require('../models/Booking.js')
var EmployeeStore = require('../models/EmployeeStore.js')
var fs = require('fs');
// var employeeFile = require('../models/employee.json')

describe("EmployeeStore", function() {

    it("Should create a JSON file with all employees", function() {
        var employeeStore = new EmployeeStore
        var newEmployee = new Employee(22, "john", "hjon@hotmail.com",25)
        employeeStore.deleteFile()
        employeeStore.save(newEmployee)
        var loadFile = employeeStore.load()
        var jsonFile = fs.readFileSync("./data/employee.json","utf-8");
        var parsedFile = JSON.parse(jsonFile)
        expect(parsedFile.employees[0]).to.eql(newEmployee)
        expect(loadFile[0]).to.eql(newEmployee)
    })
})