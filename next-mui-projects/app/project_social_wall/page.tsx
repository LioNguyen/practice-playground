"use client";

import ThemeProvider from "@/app/providers/ThemeProvider";
import { getTheme } from "@/app/theme";
import { Box, PaletteMode, Stack } from "@mui/material";
import { useState } from "react";
import { Add, Feed, NavBar, RightBar, SideBar } from "./components";

function SocialWallPage() {
  const [mode, setMode] = useState<PaletteMode | undefined>("light");

  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default SocialWallPage;
