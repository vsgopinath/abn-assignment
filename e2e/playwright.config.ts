import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, ".env") });
let isHeadless = true;

const config: PlaywrightTestConfig = {
  timeout: 60000,
  use: {
    headless: isHeadless,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: 'http://localhost:3000'
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
      name: "UI Tests",
      use: {
        browserName: "firefox"
      },
      testMatch: 'login.spec.ts'
    },
    {
      name: "Accessibility Tests",
      use: {
        browserName: "chromium",
      },
      testMatch: 'accessibility.spec.ts'
    },
    {
      name: "Performance Tests",
      use: {
        browserName: "chromium",
      },
      testMatch: 'performance.spec.ts'
    },
  ],
  webServer: {
    command: 'npm run app',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
};

export default config;