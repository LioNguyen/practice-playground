import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Accordion as AccordionWrapper,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ListItem {
  key?: string;
  AccordionTitle: ReactNode | string;
  AccordionPanel: ReactNode | string;
}

export function Accordion({ accordionList }: { accordionList: ListItem[] }) {
  return (
    <AccordionWrapper
      allowToggle
      // allowMultiple
      // defaultIndex={[0]}
    >
      {accordionList.map((item) => (
        <AccordionItem key={item.key}>
          <AccordionButton>
            <Text variant="large-text" fontWeight={500}>
              {item.AccordionTitle}
            </Text>
            <AccordionIcon></AccordionIcon>
          </AccordionButton>
          <AccordionPanel>{item.AccordionPanel}</AccordionPanel>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
}
