"use strict";

const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const nextDir = path.join(projectRoot, ".next");

try {
  fs.rmSync(nextDir, { recursive: true, force: true });
  process.stdout.write("Cleaned .next cache\n");
} catch (error) {
  process.stderr.write(`Failed to clean .next: ${error.message}\n`);
  process.exit(1);
}
