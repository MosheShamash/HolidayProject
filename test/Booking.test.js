const chai = require('chai');
const expect = chai.expect;

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

    it("Returns the information on a Booking's authorisation", function() {
        var booking = new Booking("2018-09-02", "2018-09-06")
        expect(booking.authorisedBy("Mr Boss Man")).to.equal("Mr Boss Man")
        expect(booking.isAuthorised()).to.equal(true)
    })
})