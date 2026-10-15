import { test, expect } from '@playwright/test';
import { FlightBookingPage } from '../../pages/FlightBookingPage';

test('TC004 Select Travel Class', async ({ page }) => {

    const flightBookingPage = new FlightBookingPage(page);

    await page.goto('https://www.qapractice.com/flight-booking-scenarios');

    await flightBookingPage.selectTravelClass('Business');

    await expect(flightBookingPage.travelClass).toHaveValue('Business');
});