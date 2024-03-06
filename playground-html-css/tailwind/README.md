# TAILWIND

- [TAILWIND](#tailwind)
  - [Resources](#resources)
  - [3. Styles](#3-styles)
    - [How to reuse style in Tailwind?](#how-to-reuse-style-in-tailwind)
    - [How to custom your style?](#how-to-custom-your-style)
      - [Using directive](#using-directive)
      - [Extend and Override theme](#extend-and-override-theme)
      - [Reference other values \& default values](#reference-other-values--default-values)
  - [4. Advanced](#4-advanced)
    - [How to combine multiple css files?](#how-to-combine-multiple-css-files)

## Resources

- [Notion](https://www.notion.so/lio-nguyen/UI-Library-767b4b6e3de04f8688987d2c5eeeb905?pvs=4)

## 3. Styles

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
