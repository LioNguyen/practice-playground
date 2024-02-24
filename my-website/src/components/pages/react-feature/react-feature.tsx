import { Stack, Text } from "@chakra-ui/react";

import { ReactComponentLifeCycle, VirtualDom } from "@/features";
import { Accordion } from "@/components";

export function ReactFeatures() {
  const featureItems = [
    {
      key: "React Component Lifecycle",
      AccordionTitle: "React Component Lifecycle",
      AccordionPanel: <ReactComponentLifeCycle />,
    },
    {
      key: "Virtual DOM",
      AccordionTitle: "Virtual DOM",
      AccordionPanel: <VirtualDom />,
    },
  ];

  return (
    <Stack>
      <Text variant="title">React Features</Text>

      <Accordion accordionList={featureItems} />
    </Stack>
  );
}
