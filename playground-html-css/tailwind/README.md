# TAILWIND

- [TAILWIND](#tailwind)
  - [1. Resources](#1-resources)
  - [2. How to setup?](#2-how-to-setup)
    - [a. Install library](#a-install-library)
    - [b. Config](#b-config)
      - [tailwind.config.js](#tailwindconfigjs)
      - [style-tailwind.css](#style-tailwindcss)
      - [package.json](#packagejson)
  - [3. Styles](#3-styles)
    - [Responsive Design](#responsive-design)
      - [How to custom breakpoints?](#how-to-custom-breakpoints)
      - [How to set specific breakpoint directly to element class?](#how-to-set-specific-breakpoint-directly-to-element-class)
    - [Container \& Spacing](#container--spacing)
    - [How to reuse style in Tailwind?](#how-to-reuse-style-in-tailwind)
    - [How to custom your style?](#how-to-custom-your-style)
      - [Using directive](#using-directive)
      - [Extend and Override theme](#extend-and-override-theme)
      - [Reference other values \& default values](#reference-other-values--default-values)
  - [4. Advanced](#4-advanced)
    - [How to combine multiple css files?](#how-to-combine-multiple-css-files)

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

#### style-tailwind.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* or */

@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
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

## 3. Styles

- For `spacing`, `size`, 1rem = 16px = `[x]-4` = `[w|h]-4`
- For `typography`, 1rem = 16px = `text-base`
- for `border`, 1rem = 16px = `rounded-2xl`

### Responsive Design

[Responsive Design](https://tailwindcss.com/docs/responsive-design)

```html
<!-- Breakpoints 
    sm (640px)	    min-width: 640px;
    md (768px)	    min-width: 768px;
    lg (1024px)	    min-width: 1024px;
    xl (1280px)	    min-width: 1280px;
    2xl (1536px)	  min-width: 1536px; 
-->
```

#### How to custom breakpoints?

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
};
```

#### How to set specific breakpoint directly to element class?

- If you need to use a one-off breakpoint that doesn’t make sense to include in your theme, use the `min` or `max` modifiers to generate a custom breakpoint on the fly using any arbitrary value.

```html
<div class="min-[320px]:text-center max-[600px]:bg-sky-300">
  <!-- ... -->
</div>
```

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

### How to reuse style in Tailwind?

- [Reusing Style](https://tailwindcss.com/docs/reusing-styles)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
  }
}
```

### How to custom your style?

- [Reusing Style](https://tailwindcss.com/docs/reusing-styles)
- [Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles)
- [Theme](https://tailwindcss.com/docs/theme)

#### Using directive

```css
// main.css

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
  /* ... */
}

@layer components {
  .btn-primary {
    @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
  }
  .card {
    background-color: theme("colors.white");
    border-radius: theme("borderRadius.lg");
    padding: theme("spacing.6");
    box-shadow: theme("boxShadow.xl");
  }
  .select2-dropdown {
    @apply rounded-b-lg shadow-md;
  }
  .select2-search {
    @apply border border-gray-300 rounded;
  }
  /* ... */
}

@layer utilities {
  .content-auto {
    content-visibility: auto;
  }
}
```

```html
<div class="lg:dark:content-auto">
  <!-- ... -->
</div>
```

#### Extend and Override theme

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Override default theme
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    // Extend default theme
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
```

#### Reference other values & default values

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      // ...
    },
    spacing: {
      // ...
    },
    backgroundSize: ({ theme }) => ({
      auto: "auto",
      cover: "cover",
      contain: "contain",
      ...theme("spacing"),
    }),
    fill: ({ theme }) => ({
      gray: theme("colors.gray"),
    }),
  },
};
```

```js
// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
```

## 4. Advanced

### How to combine multiple css files?

- [Using with preprocessors](https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports)

`yarn add -D postcss-import`

```js
// postcss.config.js

module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

```css
/* components/button.css */

.btn {
  padding: theme("spacing.4") theme("spacing.2");
  /* ... */
}
```

```css
/* main.css */

@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@import "./components/button.css";
```
