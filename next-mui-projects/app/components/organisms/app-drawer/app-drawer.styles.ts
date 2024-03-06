import { styled } from "@mui/material";
import Link from "next/link";

export const CustomLink = styled(Link, {
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "variant" && prop !== "sx",
})<{ isActive?: boolean }>(({ theme, isActive }) => ({
  textDecoration: isActive ? "underline" : "none",
}));
