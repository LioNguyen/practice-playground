import { Wrap, chakra } from "@chakra-ui/react";

export const Wrapper = chakra(Wrap, {
  baseStyle: {
    a: {
      color: "default.text",
      transition: "all 0.2s ease-in-out",

      "&.active": {
        borderBottom: "1px solid",
        borderBottomColor: "default.titleDark",
        color: "default.titleDark",
      },
      "&:hover": {
        color: "default.titleDark",
        textDecoration: "none",
      },

      "&::after": {
        display: "block",
        content: '""',
        borderBottom: "1px solid",
        borderBottomColor: "default.titleDark",
        transform: "scaleX(0)",
        transformOrigin: "0% 50%",
        transition: "all 0.2s ease-in-out",
      },
      "&:hover::after": {
        transform: "scaleX(1)",
      },
      "&.active:hover::after": {
        transform: "scaleX(0)",
      },
    },
  },
});
