const chai = require('chai')
const expect = chai.expect

var Employee = require('../models/Employee.js')
var Booking = require('../models/Booking.js')

describe("Integration", function() {
    
    var employee = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)
    employee.makeBooking("2018-09-01", "2018-09-05")
    employee.makeBooking("2018-01-01", "2018-01-05")

    it("Should return employee's holiday booking record", function(){
        expect(employee.days_remaining()).to.eql(15)
        expect(employee.days_booked()).to.eql(10)
        expect(employee.days_booked_and_authorised()).to.eql(0)
    })

    it("Should return all future and past bookings for an employee", function(){
        expect(employee.future_bookings()).to.eql([new Booking("2018-09-01", "2018-09-05")])
        expect(employee.past_bookings()).to.eql([new Booking("2018-01-01", "2018-01-05")])

    })

    it("Should return employee's holiday booking record with authorisation", function(){
        var employee1 = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)
        employee1.makeBooking("2018-09-01", "2018-09-05")
        employee1.makeBooking("2018-01-01", "2018-01-05")
        employee1.future_bookings()[0].authorise("Mr Boss Man")
        expect(employee1.days_remaining()).to.eql(15)
        expect(employee1.days_booked()).to.eql(10)
        expect(employee1.days_booked_and_authorised()).to.eql(5)
    })

    it("Should return authorised bookings only", function() {
        var employee2 = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)
        employee2.makeBooking("2018-09-01", "2018-09-05")
        employee2.makeBooking("2018-01-01", "2018-01-05")
        employee2.future_bookings()[0].authorise(null)
        employee.future_bookings(true)
        employee.past_bookings(true)
        expect(employee2.future_bookings_authorised()).to.eql([employee2.future_bookings()[0]])
        expect(employee2.past_bookings_authorised()).to.eql([])
    })

})