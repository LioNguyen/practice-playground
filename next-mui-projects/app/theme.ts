import { PaletteMode, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    myColor?: {
      main?: string;
      light?: string;
    };
  }
  interface PaletteOptions {
    myColor?: {
      main?: string;
      light?: string;
    };
  }
}

export const getTheme = (mode: PaletteMode | undefined) => {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
    palette: {
      mode,
      primary: {
        main: "#1B3C73",
        light: "#40679E",
      },
      myColor: {
        main: "#50727B",
        light: "#78A083",
      },
    },
  });
};
