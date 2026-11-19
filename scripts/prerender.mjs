// Vloží předgenerované HTML úvodní stránky do dist/index.html,
// aby vyhledávače (Google i Seznam) viděly obsah bez spouštění JavaScriptu.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distIndex = path.join(root, "dist", "index.html");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const appHtml = render("/");

const template = readFileSync(distIndex, "utf8");
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error("Prerender: v dist/index.html chybí <div id=\"root\"></div>");
}
if (!appHtml || appHtml.length < 1000) {
  throw new Error("Prerender: vykreslené HTML je podezřele krátké");
}

writeFileSync(distIndex, template.replace(placeholder, `<div id="root">${appHtml}</div>`));
rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerender OK (${Math.round(appHtml.length / 1024)} kB HTML)`);
