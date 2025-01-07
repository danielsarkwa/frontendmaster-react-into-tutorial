import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  { // this is for the old tests that depends on the testing-library
    extends: "./vite.config.js",
    test: {
      include: ["**/*.node.test.{js,jsx}"],
      name: "happy-dom",
      environment: "happy-dom",
    },
  },
  { // this is for the new tests that depends on the vitest-browser-react
    extends: "./vite.config.js",
    test: {
      setupFiles: ["vitest-browser-react"],
      include: ["**/*.browser.test.{js,jsx}"],
      name: "browser",
      browser: {
        provider: "playwright",
        enabled: true,
        name: "firefox", // you can use chromium or webkit here too
      },
    },
  },
]);
