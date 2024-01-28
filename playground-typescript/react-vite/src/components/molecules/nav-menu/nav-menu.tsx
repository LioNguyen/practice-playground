import * as S from "./nav-menu.styles";

import { Link as ChakraLink, Flex } from "@chakra-ui/react";
import { NavLink as ReactRouterLink } from "react-router-dom";

import { navItems } from "@/constants";

export function NavMenu() {
  return (
    <S.Wrapper margin="15px 0">
      <Flex gap={5}>
        {navItems.map((item) => (
          <ChakraLink key={item.name} as={ReactRouterLink} to={item.href}>
            {item.name}
          </ChakraLink>
        ))}
      </Flex>
    </S.Wrapper>
  );
}
