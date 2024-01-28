import { Stack, Text } from "@chakra-ui/react";

import { Accordion } from "@/components";
import { ReactHookForm } from "@/library/react-hook-form";
import { ReactRedux, ReactReduxCreateReducer } from "@/library/react-redux";
import { Zod } from "@/library/zod";

export function ReactLibrary() {
  const libraryItems = [
    {
      key: "React Redux",
      AccordionTitle: "React Redux",
      AccordionPanel: (
        <>
          <ReactRedux />
          <ReactReduxCreateReducer />
        </>
      ),
    },
    {
      key: "React Hook Form",
      AccordionTitle: "React Hook Form",
      AccordionPanel: <ReactHookForm />,
    },
    {
      key: "Zod",
      AccordionTitle: "Zod",
      AccordionPanel: <Zod />,
    },
  ];

  return (
    <Stack>
      <Text variant="title">React Library</Text>

      <Accordion accordionList={libraryItems} />
    </Stack>
  );
}
