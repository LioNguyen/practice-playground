"use client";

import { Add, Cancel, Settings } from "@mui/icons-material";
import { Button, Typography, styled } from "@mui/material";

export default function Home() {
  // Only use styled in client side
  const CustomButton = styled(Button)(({ theme }) => ({
    background: theme.palette.myColor.light,
    color: "#555",
  }));
  return (
    <div>
      <Typography variant="h3" component="p">
        Button Component
      </Typography>
      <Button
        variant="contained"
        color="primary"
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
      <CustomButton>Create Button Component</CustomButton>
    </div>
  );
}
