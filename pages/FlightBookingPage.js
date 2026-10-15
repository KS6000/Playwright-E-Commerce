export class FlightBookingPage {

    constructor(page) {
        this.page = page;

        this.fromCity = page.locator('#flight-from');
        this.toCity = page.locator('#flight-to');
        this.departureDate = page.locator('#flight-departure-date');
        this.returnDate = page.locator('#flight-return-date');
        this.passengers = page.locator('#flight-passengers');
        this.travelClass = page.locator('#flight-class');
        this.oneWay = page.locator('#flight-one-way');
        this.searchFlightsButton = page.getByTestId('flight-search');
        this.selectFlightButton = page.getByTestId('flight-select-SH137');
        this.returnFlightButton = page.getByTestId('flight-select-SH237');
        this.continueToPassengersButton = page.getByTestId('flight-continue-to-passengers');
        this.passengerName = page.getByTestId('flight-passenger-name');
        this.passengerEmail = page.getByTestId('flight-passenger-email');
        this.passengerPhone = page.getByTestId('flight-passenger-phone');
        this.continueToPaymentButton = page.getByTestId('flight-continue-to-payment');
        this.cardNumber = page.getByTestId('flight-card-number');
        this.expiryDate = page.getByTestId('flight-expiry');
        this.cvv = page.getByTestId('flight-cvv');
        this.confirmBookingButton = page.getByTestId('flight-book');
    }

    async selectCities(from, to) {
        await this.fromCity.selectOption({ label: from });
        await this.toCity.selectOption({ label: to });
    }

    async selectDates(departure, returnDate) {
        await this.departureDate.fill(departure);
        await this.returnDate.fill(returnDate);
    }

    async enterPassengers(number) {
    await this.passengers.fill(number);
    }

    async selectTravelClass(travelClass) { 
    await this.travelClass.selectOption({label: travelClass});
    }

    async selectOneWay() {
    await this.oneWay.check()
    }

    async searchFlights() {
    await this.searchFlightsButton.click();
    }

    async selectFlight() {
    await this.selectFlightButton.click();
    }

    async selectReturnFlight() {
    await this.returnFlightButton.click();
    }

    async continueToPassengerDetails() {
    await this.continueToPassengersButton.click();
    }

    async enterPassengerDetails(name, email, phone) {
    await this.passengerName.fill(name);
    await this.passengerEmail.fill(email);
    await this.passengerPhone.fill(phone);
    }

    async continueToPayment() {
    await this.continueToPaymentButton.click();
    }

    async enterPaymentDetails(cardNumber, expiryDate, cvv) {
    await this.cardNumber.fill(cardNumber);
    await this.expiryDate.fill(expiryDate);
    await this.cvv.fill(cvv);
    }

    async confirmBooking() {
    await this.confirmBookingButton.click();
    }
}