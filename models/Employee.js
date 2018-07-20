var SCN = require('string-capitalize-name')
var Booking = require('../models/Booking.js')

class Employee {
    constructor(payrollNo, name, email, holidayAllowance) {
        this.payrollNo = payrollNo
        this.name = SCN(name)
        this.email = email
        this.holidayAllowance = holidayAllowance
        this.bookings = []
        this.daysRemaining = 25
        this.daysBooked = 0
        this.daysBookedAndAuthorised = 0
    }

    makeBooking(startDate, endDate) {
        var newBooking = new Booking(startDate, endDate)
        this.bookings.push(newBooking)
    }

    days_remaining() {
        // var holidayTaken = 0
        for(var i = 0; i < this.bookings.length; i++){
            this.daysBooked += this.bookings[i].numberOfDays()
        }
        return this.daysRemaining - this.daysBooked
    }

    days_booked() {
        return this.daysBooked
    }

    days_booked_and_authorised() {
        for(var i = 0; i < this.future_bookings().length; i++) {
            if(this.future_bookings()[i].isAuthorised == true) {
                this.daysBookedAndAuthorised += this.future_bookings()[i].numberOfDays()
            }
        }
        return this.daysBookedAndAuthorised
    }

    future_bookings(boolean) {
        var futureBookings = []
        for(var i = 0; i < this.bookings.length; i++){
            if(this.bookings[i].startDate > new Date()){
                futureBookings.push(this.bookings[i])
            }
        }
        return futureBookings
    }

    future_bookings_authorised() {
        var futureBookingsAuthorised = []
        for(var i = 0; i < this.future_bookings().length; i++){
            if(this.future_bookings()[i].isAuthorised){
                futureBookingsAuthorised.push(this.future_bookings()[i])
            }
        }
        return futureBookingsAuthorised

    }

    past_bookings() {
        var pastBookings = []
        for(var i = 0; i < this.bookings.length; i++){
            if(this.bookings[i].startDate <= new Date()){
                pastBookings.push(this.bookings[i])
            }
        }
        return pastBookings
    }

    past_bookings_authorised() {
        var pastBookingsAuthorised = []
        for(var i = 0; i < this.past_bookings().length; i++){
            if(this.past_bookings()[i].isAuthorised){
                pastBookingsAuthorised.push(this.past_bookings()[i])
            }
        }
        return pastBookingsAuthorised
    }

    get bookingsList() {
        return this.bookings
    }

    set bookingsList(bookings) {
        throw new Error("Cannot overwrite bookings array!!")
    }
}

module.exports = Employee
