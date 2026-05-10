#!/usr/bin/env node

/**
 * Prerender all routes to static HTML for GitHub Pages deployment.
 * Starts `wrangler dev` (miniflare) to serve the SSR app, fetches each route,
 * and writes the HTML + client assets to dist/prerendered/.
 */

import { spawn } from "node:child_process";
import {
  writeFile,
  mkdir,
  cp,
  readFile,
  rm,
  readdir,
} from "node:fs/promises";
import { join, dirname } from "node:path";
import { existsSync } from "node:fs";

const ROUTES = [
  "/",
  "/about",
  "/skills",
  "/experience",
  "/certifications",
  "/publications",
  "/contact",
];

const PORT = 8799;
const BASE_URL = `http://localhost:${PORT}`;
const OUT_DIR = "dist/prerendered";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForServer(maxRetries = 40) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(`${BASE_URL}/`, {
        signal: AbortSignal.timeout(2000),
      });
      if (res.status < 500) return;
    } catch {
      // not ready yet
    }
    await sleep(1500);
  }
  throw new Error(`Server didn't respond within ${maxRetries * 1.5}s`);
}

async function main() {
  console.log("Starting wrangler dev for prerendering...");

  const server = spawn(
    "npx",
    ["wrangler", "dev", "--port", String(PORT), "--no-show-interactive-dev-session"],
    { stdio: "pipe", env: { ...process.env } },
  );

  let serverLog = "";
  server.stdout.on("data", (d) => {
    serverLog += d.toString();
  });
  server.stderr.on("data", (d) => {
    serverLog += d.toString();
  });

  // Exit if server process crashes
  server.on("exit", (code) => {
    if (code !== null && code !== 0) {
      console.error("Server exited with code", code);
      console.error(serverLog);
      process.exit(1);
    }
  });

  try {
    await waitForServer();
    console.log("Server ready\n");

    // Clean output dir
    if (existsSync(OUT_DIR)) await rm(OUT_DIR, { recursive: true });
    await mkdir(OUT_DIR, { recursive: true });

    // Fetch and save each route
    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`;
      process.stdout.write(`  ${route} `);
      const res = await fetch(url);
      const html = await res.text();

      const outPath =
        route === "/"
          ? join(OUT_DIR, "index.html")
          : join(OUT_DIR, route.slice(1), "index.html");

      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf-8");
      console.log(`✓  (${html.length} bytes)`);
    }

    // Copy all client assets (JS, CSS, fonts, images, PDFs, etc.)
    if (existsSync("dist/client")) {
      const entries = await readdir("dist/client");
      for (const entry of entries) {
        // Skip internal vite metadata
        if (entry === ".vite") continue;
        const src = join("dist/client", entry);
        const dest = join(OUT_DIR, entry);
        await cp(src, dest, { recursive: true });
      }
    }

    // SPA fallback — GitHub Pages serves 404.html for unknown paths
    const indexHtml = await readFile(join(OUT_DIR, "index.html"), "utf-8");
    await writeFile(join(OUT_DIR, "404.html"), indexHtml, "utf-8");

    // Disable Jekyll processing
    await writeFile(join(OUT_DIR, ".nojekyll"), "", "utf-8");

    console.log(`\n✅ Prerendered ${ROUTES.length} routes to ${OUT_DIR}/`);
  } finally {
    server.kill("SIGTERM");
    // Give it a moment to clean up
    await sleep(500);
  }
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
