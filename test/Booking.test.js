const chai = require('chai')
const expect = chai.expect

var Booking = require('../models/Booking.js')

describe("Booking", function() {

    var booking = new Booking("2018-09-01", "2018-09-05")

    it("instantiates properly", function() {
        expect(booking.startDate).to.eql(new Date("2018-09-01"))
        expect(booking.endDate).to.eql(new Date("2018-09-05"))
        expect(booking.isAuthorised).to.eql(false)
        expect(booking.authorisedBy).to.eql(null)
        expect(booking.authorisedOn).to.eql(null)
    })

    it("Returns the length of the booking in days", function() {
        result = booking.numberOfDays()
        expect(result).to.eql(5)
    })

    it("Returns the information on a Booking's authorisation (no date entered)", function() {
        var booking = new Booking("2018-09-02", "2018-09-06")
        var d = new Date()
        booking.authorise("Mr Boss Man")
        expect(booking.authorised_by()).to.eql("Mr Boss Man")
        expect(booking.is_authorised()).to.eql(true)

        var todaysDate = booking.authorised_on()
        var year = todaysDate.getFullYear()
        var month = todaysDate.getMonth() + 1
        var day = todaysDate.getDate()

        expect(year).to.equal(d.getFullYear())
        expect(month).to.equal(d.getMonth() + 1)
        expect(day).to.equal(d.getDate())
    })

    it("Returns the information on a Booking's authorisation (date entered)", function() {
        var booking = new Booking("2018-09-02", "2018-09-06")
        booking.authorise("Mr Boss Man", "2018-07-01")
        expect(booking.authorised_by()).to.eql("Mr Boss Man")
        expect(booking.is_authorised()).to.eql(true)
        expect(booking.authorised_on()).to.eql(new Date("2018-07-01"))
    })
})

