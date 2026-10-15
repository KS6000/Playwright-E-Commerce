import { test, expect } from '@playwright/test';
import { FlightBookingPage } from '../../pages/FlightBookingPage';

test('TC003 Enter Passengers', async ({ page }) => {

    const flightBookingPage = new FlightBookingPage(page);

    await page.goto('https://www.qapractice.com/flight-booking-scenarios');

    await flightBookingPage.enterPassengers('2');

    await expect(flightBookingPage.passengers).toHaveValue('2');

});