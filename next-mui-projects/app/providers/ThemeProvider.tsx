"use client";

import { ThemeProvider } from "@mui/material";
import React from "react";

export default function Provider({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: any;
}) {
  return <ThemeProvider theme={theme || {}}>{children}</ThemeProvider>;
}
