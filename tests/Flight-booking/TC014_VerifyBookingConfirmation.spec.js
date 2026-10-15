import { test, expect } from '@playwright/test';
import { FlightBookingPage } from '../../pages/FlightBookingPage';

test('TC014 Verify Booking Confirmation', async ({ page }) => {

    const flightBookingPage = new FlightBookingPage(page);

    await page.goto('https://www.qapractice.com/flight-booking-scenarios');

    await flightBookingPage.selectCities('London', 'New York');

    await flightBookingPage.selectDates('2026-11-05', '2026-11-19');

    await expect(flightBookingPage.departureDate).toHaveValue('2026-11-05');
    await expect(flightBookingPage.returnDate).toHaveValue('2026-11-19');

    await flightBookingPage.enterPassengers('2');

    await expect(flightBookingPage.passengers).toHaveValue('2');

    await flightBookingPage.selectTravelClass('Business');

    await expect(flightBookingPage.travelClass).toHaveValue('Business');

    await flightBookingPage.searchFlights();

    await flightBookingPage.selectFlight();

    await flightBookingPage.selectReturnFlight();

    await flightBookingPage.continueToPassengerDetails();

    await flightBookingPage.enterPassengerDetails(
    'John Smith',
    'john.smith@example.com',
    '07123456789'
    );

    await expect(flightBookingPage.passengerName).toHaveValue('John Smith');
    await expect(flightBookingPage.passengerEmail).toHaveValue('john.smith@example.com');
    await expect(flightBookingPage.passengerPhone).toHaveValue('07123456789');
    
    await flightBookingPage.continueToPayment();

    await flightBookingPage.enterPaymentDetails(
    '4111222233335555',
    '06/30',
    '876'
    );

    await expect(flightBookingPage.cardNumber).toHaveValue('4111222233335555');
    await expect(flightBookingPage.expiryDate).toHaveValue('06/30');
    await expect(flightBookingPage.cvv).toHaveValue('876');

    await flightBookingPage.confirmBooking();

    await expect(
    page.getByRole('heading', { name: 'Booking Confirmed!' })
    ).toBeVisible();

    await expect(
    page.getByText('john.smith@example.com')
    ).toBeVisible();

    await expect(
    page.getByText('Sky High Airlines (SH137)')
    ).toBeVisible();

    await expect(
    page.getByText('Sky High Airlines (SH237)')
    ).toBeVisible();

    await expect(
    page.getByText('Total paid (Business)')
    ).toBeVisible();

    await expect(
    page.getByText('Card ending ****5555')
    ).toBeVisible();
    
});