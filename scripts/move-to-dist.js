const fs = require("fs");
const path = require("path");

// CONFIG
const sourceDir = path.resolve(__dirname, "../src");
const distDir = path.resolve(__dirname, "../dist");
const ignoredFolders = []; // Add folder names here to ignore

/**
 * Recursively walks through a directory and returns all JS files not in ignored folders.
 * @param {string} dir - The directory to walk.
 * @param {string[]} fileList - Accumulated list of JS file paths.
 * @returns {string[]} The list of JS file paths.
 */
function getAllJsFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredFolders.includes(entry.name)) {
        getAllJsFiles(fullPath, fileList);
      }
    } else if (entry.isFile() && fullPath.endsWith(".js")) {
      fileList.push(fullPath);
    }
  }

  return fileList;
}

/**
 * Copies JS files from source to destination while preserving folder structure.
 */
function copyJsFiles() {
  const jsFiles = getAllJsFiles(sourceDir);

  jsFiles.forEach((filePath) => {
    const relativePath = path.relative(sourceDir, filePath);
    const destinationPath = path.join(distDir, relativePath);
    const destinationDir = path.dirname(destinationPath);

    fs.mkdirSync(destinationDir, { recursive: true });
    fs.copyFileSync(filePath, destinationPath);
    console.log(`Copied: ${relativePath}`);
  });
}

// Run the copy process
copyJsFiles();
