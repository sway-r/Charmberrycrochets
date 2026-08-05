import fs from "node:fs";
import path from "node:path";

/**
 * Server-only check for whether a /public image referenced in siteConfig
 * actually exists on disk yet. Lets components fall back to a placeholder
 * instead of rendering a broken image while the owner is filling in photos.
 */
export function imageExists(src?: string): boolean {
  if (!src) return false;
  try {
    const filePath = path.join(process.cwd(), "public", src);
    return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}
