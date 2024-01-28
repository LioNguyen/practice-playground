import {
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";

import { DebounceComponent, ThrottleComponent } from "@/techniques";

export function Techniques() {
  return (
    <Stack>
      <Text variant="title">Techniques</Text>
      <Tabs>
        <TabList>
          <Tab>Debounce</Tab>
          <Tab>Throttle</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DebounceComponent />
          </TabPanel>
          <TabPanel>
            <ThrottleComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
}
