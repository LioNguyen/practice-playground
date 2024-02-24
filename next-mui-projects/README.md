# NEXT MUI PROJECTS

- [NEXT MUI PROJECTS](#next-mui-projects)
  - [1. Resources](#1-resources)
  - [2. How to setup?](#2-how-to-setup)
    - [a. Install library](#a-install-library)
    - [b. Install font](#b-install-font)
  - [3. Styles](#3-styles)
    - [Responsive Design](#responsive-design)
      - [How to custom breakpoints with typescript ?](#how-to-custom-breakpoints-with-typescript-)

## 1. Resources

- [Official Page](https://v5-0-6.mui.com/getting-started/usage/)
- [Material Icons](https://mui.com/material-ui/material-icons/)
- [Youtube | Project 1](https://youtu.be/fzxEECHnsvU?si=wSEQRVkIzXIceWNP)
- [Youtube | Project 2](https://youtu.be/E9BYc5_etOk?si=UiUF7e6If_oa2pSW)
- [Youtube | Project 3](https://youtu.be/uGnh1NnlEbQ?si=vRcxVnHnYrMYqIFZ)

## 2. How to setup?

### a. Install library

`yarn add @mui/material @emotion/react @emotion/styled`

`yarn add @mui/icons-material`

### b. Install font

- [Add font in NEXT](https://nextjs.org/docs/app/api-reference/components/font)

```jsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
```

## 3. Styles

### Responsive Design

- [MUI Breakpoints](https://v5-0-6.mui.com/customization/breakpoints/)
- xs, extra-small: 0px
- sm, small: 600px
- md, medium: 900px
- lg, large: 1200px
- xl, extra-large: 1536px

#### How to custom breakpoints with typescript ?

- [StackOverflow | Custom breakpoints with typescript](https://stackoverflow.com/questions/61925965/adding-custom-breakpoints-to-material-ui-with-typescript)

```js
// theme.ts

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
```
