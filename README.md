# Dg shahr tailwind plugin

A tailwind plugin with dg shahr theme

## Run Locally

Install dependencies

```bash
  yarn
```

Link package to node_modules and watch for compile tailwind

```bash
  yarn dev
```

And After you are done editing

```bash
  yarn build
```

Then change current version in `package.json` and run

```bash
  npm publish
```

## Usage/Examples

In `tailwind.config.js` file

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [require("@dgshahr/dg-theme-tailwind-plugin")],
};
```
