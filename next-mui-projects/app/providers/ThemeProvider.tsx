"use client";

import { theme } from "@/app/theme";
import { ThemeProvider } from "@mui/material";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
