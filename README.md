# Dgshahr tailwind plugin

A tailwind plugin with Dgshahr theme

## Run Locally

Install dependencies

```bash
  yarn
```

And After you are done editing

```bash
  yarn build
```

Then change current version in `package.json` and run

```bash
  npm publish
```

## Usage

**for version 4.1:**

In your `main css file` file

```css
@import "tailwindcss";
@plugin "@dgshahr/dg-theme-tailwind-plugin";
```

**for version 3.4.17:**

In `tailwind.config.js` file

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [require("@dgshahr/dg-theme-tailwind-plugin")],
};
```
