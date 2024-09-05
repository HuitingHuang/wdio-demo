# wdio-demo

This project is created for practicing WDIO E2E testing.

The test scripts are located in <code>test/specs</code>

To run the tests: <br>
<code>npm run test</code>

To run specific tests by tags: <br>
<code>npm run test -- --mochaOpts.grep=@loginOHRM-error</code>

To run specific tests by file path: <br>
<code>npm run test -- --spec ./test/specs/loginTests/test.login.error/test.login.error.js</code>

To open report: <br>
<code>npm run report</code>
[@wdio/allure-reporter](https://github.com/webdriverio/webdriverio/tree/main/packages/wdio-allure-reporter) is applied to generated reports automatically(see the configuration file)

The report of test results will be shown in <code>allure-report/index.html</code> after running the tests

To rerun the failed tests: <br>
<code>npm run rerun</code>
This command basically only run the failed tests recorded in the <code>results/rerun</code> folder by [rerun service](https://github.com/webdriverio-community/wdio-rerun-service)
