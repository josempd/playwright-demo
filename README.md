# playwright-demo

## [Documentation](https://playwright.dev)

Playwright is a Node.js library to automate [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

Headless execution is supported for all the browsers on all platforms.

## Usage

- [Getting started](https://playwright.dev/docs/intro)

## Quick setup

To install playwright you should have previously installed node.js and npm.

From the documentation we can see that the installation would be the as follows:

`npm init playwright@latest`

Following the install process we will enable typescript and github actions for playwright, and the tests directory will be called ``tests`` for now.

## reporters

We have set reports to be **html** as recommended by playwright, but also added **list** reports for the terminal and **junit** style reports that will be shown in `test-reports/TEST-e2e.xml` for future integration.

## media output

We have setup screenshots on test failures and videos on test failures in the `media` directory

## running the tests

To run our tests we should use: `npx playwright test`

## workflows

We have created several workflows for multiple outputs:

### html reports

The html reports are specific reports made by playwright with a nice html view.

### junit reports

The junit reports have an xml output that can be used by several resources where it can be easily read.

### manual workflow

We can do a manual workflow of the tests in GitHub Actions to run it from there: https://github.com/josempd/playwright-demo/actions/workflows/playwright_manual.yml

