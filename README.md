# ABN AMRO-Assignment

Web automation testing using Playwright

## Packages Used

* [Playwright](https://playwright.dev/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [Axe-Playwright](https://github.com/abhinaba-ghosh/axe-playwright)
* [Monocart Reporter](https://github.com/cenfun/monocart-reporter)

## Tools Used

* VS Code
* npm & node
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Setup for local execution
   
* Install all dependencies
  > `npm install`

* Install all Playwright dependencies
  > `npx playwright install --with-deps`  

## Test Execution

* Run All the tests:
  > `npm run test`

## Test Result

* Playwright Monocart Report is generated in `${PROJECT-ROOT}/e2e/results` (Need Live Server extension to open report from VS code)

## Project Details

* Used `Express` to make the app running in the server
* Login is done on everytime for each user with the same test code block
* Making use of dotenv package to store the secrets in .env file (Repository Variables are used to run in GitHub Actions)

### Playwright Directory

     All the tests files are under the `e2e` directory of the project

* `e2e/helpers` - contains constant values
* `e2e/pages/` - contains Page Object Model classes of the AUT
* `specs` contains below files:

    * `login.spec.ts` - contains all the functional automated tests
    * `performance.spec.ts` - contains the test to get performance metrics
    * `accessibility.spec.ts` - contains the accessibility test

## Test Details

* UI Tests:
  * **Total Tests** - `3` **Passing Tests** - `3` **Failed Tests** - `0`
  
* Performance Tests:
  * **Total Tests** - `1` **Passing Tests** - `1` **Failed Tests** - `0`
  
* Accessibility Tests:
  * **Total Tests** - `2` **Passing Tests** - `1` **Failed Tests** - `1`

## CI Details

* Github Actions are used for executing the tests.
* You can download the test report on selecting the runs in [here](https://github.com/vsgopinath/abn-assignment/actions/)

## References

* [Official Playwright Docs](https://playwright.dev/docs/intro)
* [Playwright Performance Metrics](https://anandhik.medium.com/performance-testing-in-playwright-64cdef431e2e)