"use client";

import * as S from "./home.styles";

import { Add, Cancel, Settings } from "@mui/icons-material";
import { Button, Stack, Typography, styled } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Typography variant="h3" component="p">
        Button Component
      </Typography>

      <Stack direction="row" gap={5} mt={2} mb={3}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<Settings />}
        >
          Settings
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="medium"
          startIcon={<Add />}
        >
          Add
        </Button>
        <Button variant="text" color="info" size="small" startIcon={<Cancel />}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "skyblue",
            color: "#555",
            "&:hover": {
              background: "lightblue",
            },
          }}
        >
          Custom Style Button
        </Button>
        <S.CustomButton>Create Button Component</S.CustomButton>
      </Stack>
    </div>
  );
}
