const chai = require('chai')
const expect = chai.expect

var Employee = require('../models/Employee.js')

describe("Employee", function() {

    // var employee = new Employee(​"E123"​, "joe bloggs"​, ​"joe@bloggs.com"​, ​25​)

    var employee = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)

    it("Instantiates properly", function(){
        expect(employee.payrollNo).to.eql("E123")
        expect(employee.name).to.eql("Joe Bloggs")
        expect(employee.email).to.eql("joe@bloggs.com")
        expect(employee.holidayAllowance).to.eql(25)
        expect(employee.bookings).to.eql([])
        expect(employee.daysRemaining).to.eql(25)
        expect(employee.daysBooked).to.eql(0)
        expect(employee.daysBookedAndAuthorised).to.eql(0)
    })
})