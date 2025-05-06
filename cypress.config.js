const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a5c2j3',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
  },
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
