"use client";

import * as S from "./app-drawer.styles";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

export const AppDrawer = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const drawerWidth = 200;

  const navigationList = [
    {
      key: "homePage",
      title: "Home Page",
      href: "/",
      isActive: pathname === "/",
    },
    {
      key: "socialWall",
      title: "Project Social Wall",
      href: "/project_social_wall",
      isActive: pathname === "/project_social_wall",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {navigationList.map((item, index) => (
              <ListItem key={item.key} disablePadding>
                <ListItemButton>
                  <S.CustomLink href={item.href} isActive={item.isActive}>
                    <ListItemText primary={item.title} />
                  </S.CustomLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      {children}
    </Box>
  );
};
