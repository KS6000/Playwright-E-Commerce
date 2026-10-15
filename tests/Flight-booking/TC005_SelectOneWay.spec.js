import { test, expect } from '@playwright/test';
import { FlightBookingPage } from '../../pages/FlightBookingPage';

test('TC005 Select One Way', async ({ page }) => {

    const flightBookingPage = new FlightBookingPage(page);

    await page.goto('https://www.qapractice.com/flight-booking-scenarios');

    await flightBookingPage.selectOneWay();

    await expect(flightBookingPage.oneWay).toBeChecked();
});
