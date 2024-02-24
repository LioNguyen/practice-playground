# CHAKRA-UI

- [CHAKRA-UI](#chakra-ui)
  - [Resources?](#resources)
  - [How to install?](#how-to-install)
  - [How to extend theme?](#how-to-extend-theme)
    - [How to add new fonts?](#how-to-add-new-fonts)
    - [How to config custom theme?](#how-to-config-custom-theme)
    - [How to apply custom theme?](#how-to-apply-custom-theme)

## Resources?

- [Default Theme BreakPoint](https://chakra-ui.com/docs/styled-system/theme#breakpoints)
- [Default Theme Size](https://chakra-ui.com/docs/styled-system/theme#sizes)
- [Style Custom Component](https://chakra-ui.com/docs/styled-system/chakra-factory)

## How to install?

`yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion`

```js
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  );
}
```

## How to extend theme?

### How to add new fonts?

```js
// styles/fonts.tsx

import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap */

      /* latin */
      @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

export default Fonts;
```

### How to config custom theme?

```json
{
  "colors": {
    "default": {
      "body": "#fff",
      "title": "#333333",
      "titleDark": "#000000"
    }
  },
  "components": {
    "Text": {
      "variants": {
        "heading-1": {
          "color": "default.titleDark",
          "fontSize": { "base": "4xl", "sm": "5xl", "md": "6xl" },
          "fontWeight": 700,
          "margin": "15px 0"
        }
      }
    }
  },
  "styles": {
    "global": {
      "body": {
        "bg": "default.body",
        "color": "default.text",
        "fontFamily": "'Poppins', sans-serif",
        "margin": "auto",
        "scrollBehavior": "smooth",
        "transition": "all 0.4s ease-in-out"
      }
    }
  }
}
```

### How to apply custom theme?

```js
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";

import { Fonts, Theme } from "@/styles";

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  ...Theme,
});

// 3. Pass the `theme` prop to the `ChakraProvider`
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```
