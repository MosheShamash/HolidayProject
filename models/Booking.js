
class Booking {
    constructor(startDate, endDate) {
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
        this.isAuthorised = false
        this.authorisedBy = null
        this.authorisedOn = null
    }

    numberOfDays() {
        var oneDay = 1000*60*60*24  
        var startDate_ms = this.startDate.getTime()
        var endDate_ms = this.endDate.getTime()
        var difference_ms = endDate_ms - startDate_ms // Calculate the difference in milliseconds
        return Math.round((difference_ms / oneDay) + 1) // Convert back to days and return 
    }

    authorise(name, date = new Date()) {
        this.isAuthorised = true
        this.authorisedBy = name
        this.authorisedOn = new Date(date)
    }

    is_authorised() {
        return this.isAuthorised
    }

    authorised_by() {
        return this.authorisedBy
    }

    authorised_on() {
        return this.authorisedOn
    }
}

module.exports = Booking
