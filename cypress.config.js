const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  viewportWidth: 1280,
  viewportHeight: 720,
  
  env: {
    mobile: {
      viewportWidth: 375,
      viewportHeight: 667,
      userAgent: 'mobile'
    },
    desktop: {
      viewportWidth: 1280,
      viewportHeight: 720,
      userAgent: 'desktop'
    }
  }
});