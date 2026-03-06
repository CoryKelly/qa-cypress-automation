const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  env: {
        apiUrl: 'http://localhost:3000',
      },
  e2e: {
      baseUrl: 'http://localhost:5173',
      video: true,
      screenshotOnRunFailure: true
  },
});
