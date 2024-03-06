"use client";

import { Mail, Notifications } from "@mui/icons-material";
import * as S from "./navbar.styles";

import PetsIcon from "@mui/icons-material/Pets";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky">
      <S.StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Home
        </Typography>
        <PetsIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <S.Search>
          <InputBase placeholder="Search..." />
        </S.Search>
        <S.Icons>
          <Badge badgeContent={4} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary">
            <Notifications />
          </Badge>
          <Avatar
            src="https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Happi"
            sx={{
              width: "30px",
              height: "30px",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => setOpen(true)}
          />
        </S.Icons>
        <S.UserBox
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => setOpen(true)}
        >
          <Avatar
            src="https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Happi"
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
          <Typography variant="body1">Happi</Typography>
        </S.UserBox>
      </S.StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        // transformOrigin={{
        //   vertical: "top",
        //   horizontal: "right",
        // }}
        slotProps={{
          paper: {
            style: {
              transform: "translateX(-10px) translateY(10px)",
            },
          },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

<Typography
  variant="h6"
  sx={{
    display: {
      xs: "none",
      sm: "block",
    },
  }}
>
  Home
</Typography>;
