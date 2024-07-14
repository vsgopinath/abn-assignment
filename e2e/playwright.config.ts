import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, ".env") });
let isHeadless = false;

const config: PlaywrightTestConfig = {
  timeout: 60000,
  use: {
    headless: isHeadless,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: [
    ["list", { printSteps: true }],
    ['monocart-reporter', {
      name: "My Test Report",
      outputFile: './e2e/results/monocart-report/report.html'
    }],
    ["html", {
      open: "never",
      outputFolder: './results/pw-report'
    }]
  ],
  projects: [
    {
      name: "firefox",
      use: {
        browserName: "firefox",
        baseURL: 'http://localhost:3000',
        headless: isHeadless
      },
    },
  ],
  webServer: {
    command: 'npm run app',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
};

export default config;