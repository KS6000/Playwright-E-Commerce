import { test, expect } from '@playwright/test';
import { FlightBookingPage } from '../../pages/FlightBookingPage';

test('TC006 Search flights', async ({ page }) => {

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

});