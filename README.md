# Playwright E-Commerce & Flight Booking Automation

[![Playwright Tests](https://github.com/KS6000/Playwright-E-Commerce/actions/workflows/playwright.yml/badge.svg)](https://github.com/KS6000/Playwright-E-Commerce/actions/workflows/playwright.yml)

A JavaScript-based test automation portfolio project using **Playwright** and the **Page Object Model (POM)** design pattern.

This project demonstrates automated end-to-end testing of E-Commerce and Flight Booking scenarios using the QA Practice website.

## Technologies Used

- **Playwright** – End-to-end test automation
- **JavaScript** – Programming language
- **Node.js and npm** – Project dependencies and execution
- **Page Object Model (POM)** – Reusable and maintainable test architecture
- **Visual Studio Code** – Development environment
- **Git and GitHub** – Version control
- **GitHub Actions** – Continuous Integration (CI)
- **Chromium, Firefox and WebKit** – Cross-browser testing

## E-Commerce Automation

The E-Commerce test suite covers 11 scenarios:

1. Homepage verification
2. E-Commerce page navigation
3. Product search
4. Add product to cart
5. Shopping cart verification
6. Proceed to checkout
7. Enter checkout details
8. Save address and continue to payment
9. Enter payment details
10. Place order
11. Verify successful order confirmation

## Flight Booking Automation

The Flight Booking test suite covers 14 scenarios:

1. Select departure and destination cities
2. Select travel dates
3. Select number of passengers
4. Select travel class
5. Select one-way journey
6. Search available flights
7. Select departure flight
8. Select return flight
9. Continue to passenger details
10. Enter passenger details
11. Continue to payment
12. Enter payment details
13. Confirm booking
14. Verify booking confirmation

## Test Execution Results

**Flight Booking: 42 tests passed**

All 14 Flight Booking test scenarios passed across three browsers:

- Chromium: 14 passed
- Firefox: 14 passed
- WebKit: 14 passed

These results were verified through local Playwright test execution.

## Project Structure

```text
Playwright-E-Commerce/
├── .github/
│   └── workflows/
├── Evidence E-Commerce/
│   └── Flight-Booking/
├── pages/
│   ├── Homepage.js
│   ├── PracticePage.js
│   ├── EcommercePage.js
│   └── FlightBookingPage.js
├── tests/
│   ├── Flight-booking/
│   └── TC001–TC011 E-Commerce tests
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/KS6000/Playwright-E-Commerce.git
```

Navigate into the project:

```bash
cd Playwright-E-Commerce
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

Run all Playwright tests:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Run Flight Booking tests:

```bash
npx playwright test tests/Flight-booking
```

Run tests in Firefox only:

```bash
npx playwright test --project=firefox
```

View the Playwright HTML report:

```bash
npx playwright show-report
```

## GitHub Actions CI/CD

The project includes a GitHub Actions workflow for automated Playwright test execution.

The workflow is configured to run when code changes are pushed to the repository, helping identify potential regression issues.

## Test Evidence

Screenshots of test implementations and successful execution results are stored in the `Evidence E-Commerce` directory, including the `Flight-Booking` subfolder.

The evidence includes the final Flight Booking execution result showing **42 passed tests**.

## Key Skills Demonstrated

- End-to-end automation testing
- Cross-browser testing
- JavaScript programming
- Page Object Model design
- Test assertions and validations
- Reusable page objects and test methods
- Test execution and debugging
- Git version control
- CI/CD integration
- Test documentation and evidence management

## Author

**KS6000**

[GitHub Profile](https://github.com/KS6000)

[LinkedIn Profile](https://www.linkedin.com/in/krishan-shura-1104661b7)

## Application Under Test

[QA Practice](https://www.qapractice.com)

This project was developed for automation testing practice, technical skill development and portfolio demonstration.
