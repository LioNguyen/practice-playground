# TAILWIND

- [TAILWIND](#tailwind)
  - [1. Resources](#1-resources)
  - [2. How to setup?](#2-how-to-setup)
    - [a. Install library](#a-install-library)
    - [b. Config](#b-config)
      - [tailwind.config.js](#tailwindconfigjs)
      - [package.json](#packagejson)
  - [3. Some rules](#3-some-rules)
    - [Container \& Spacing](#container--spacing)

## 1. Resources

- [Tailwind CSS From Scratch | Learn By Building Projects](https://www.udemy.com/course/tailwind-from-scratch/)
- [Install Link](https://tailwindcss.com/docs/installation)
- [Webpack Link](https://webpack.js.org)

## 2. How to setup?

### a. Install library

```Shell
npm install -D tailwindcss
npx tailwindcss init

npx tailwindcss -i ./css/style-tailwind.css -o ./css/style.css --watch
```

### b. Config

#### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### package.json

```json
{
  "scripts": {
    "build": "tailwindcss -i ./css/style-tailwind.css -o ./css/style.css",
    "watch": "tailwindcss -i ./css/style-tailwind.css -o ./css/style.css --watch"
  }
}
```

```html
<!-- index.html  -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Tailwind</title>
  </head>
  <body>
    <!-- Your code here  -->
  </body>
</html>
```

## 3. Some rules

- For `spacing`, `size`, 1rem = 16px = `[x]-4` = `[w|h]-4`
- For `typography`, 1rem = 16px = `text-base`
- for `border`, 1rem = 16px = `rounded-2xl`

### Container & Spacing

```html
<!-- Breakpoints for Container 
    container	None	width: 100%;
    sm (640px)	    max-width: 640px;
    md (768px)	    max-width: 768px;
    lg (1024px)	    max-width: 1024px;
    xl (1280px)	    max-width: 1280px;
    2xl (1536px)	  max-width: 1536px; 
-->
```
