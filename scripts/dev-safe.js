"use strict";

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const projectRoot = path.resolve(__dirname, "..");
const lockPath = path.join(projectRoot, ".dev-server.lock");
const nextDir = path.join(projectRoot, ".next");
const nextBin = require.resolve("next/dist/bin/next");

function isPidAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readExistingLock() {
  if (!fs.existsSync(lockPath)) {
    return null;
  }
  try {
    const raw = fs.readFileSync(lockPath, "utf8").trim();
    const parsed = JSON.parse(raw);
    if (typeof parsed.pid === "number") {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function writeLock() {
  const payload = {
    pid: process.pid,
    cwd: projectRoot,
    createdAt: new Date().toISOString()
  };
  fs.writeFileSync(lockPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

function clearLock() {
  try {
    fs.rmSync(lockPath, { force: true });
  } catch {
    // no-op
  }
}

const existing = readExistingLock();
if (existing && isPidAlive(existing.pid)) {
  process.stderr.write(
    `Another dev server is already running for this project (pid ${existing.pid}).\n`
  );
  process.stderr.write("Stop it first, or remove .dev-server.lock if it is stale.\n");
  process.exit(1);
}

clearLock();

try {
  fs.rmSync(nextDir, { recursive: true, force: true });
} catch {
  // best-effort cleanup
}

writeLock();

const args = [nextBin, "dev", ...process.argv.slice(2)];
const child = spawn(process.execPath, args, {
  cwd: projectRoot,
  stdio: "inherit",
  env: process.env
});

let shuttingDown = false;
function shutdown(signal) {
  if (shuttingDown) {
    return;
  }
  shuttingDown = true;
  clearLock();
  if (!child.killed) {
    child.kill(signal);
  }
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

child.on("exit", (code, signal) => {
  clearLock();
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
