const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const postcssJs = require("postcss-js");
const { minify } = require("terser");

async function processCSS(dirPath) {
  const cssPath = path.join(dirPath, "index.css");
  const jsPath = path.join(dirPath, "index.js");

  try {
    // Read and parse CSS
    const css = fs.readFileSync(cssPath, "utf8");
    const root = postcss.parse(css);
    const jsObject = postcssJs.objectify(root);

    // Generate minified JS
    const jsContent = `export default ${JSON.stringify(jsObject)};`;
    const minified = await minify(jsContent, {
      format: {
        comments: false,
        beautify: false,
      },
    });

    fs.writeFileSync(jsPath, minified.code);
    console.log(`Successfully generated minified: ${jsPath}`);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

// Execute
const targetDir = process.argv[2];
if (!targetDir) {
  console.error("Usage: node css-to-js.js <directory-path>");
  process.exit(1);
}

processCSS(targetDir);
