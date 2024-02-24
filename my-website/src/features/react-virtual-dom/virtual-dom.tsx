import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

let interval: any;

export function VirtualDom() {
  const [time, setTime] = useState("");

  function startTimer() {
    const realDom = document.getElementById("real-dom");

    const updateDom = () => {
      var html = `
          <p class="css-egft4">Real DOM</p>
          <p>Timer is running</p>
          <p>Time: ${new Date().toLocaleTimeString()}</p>
      `;

      if (realDom) {
        realDom.innerHTML = html;
      }
    };

    interval = setInterval(() => {
      updateDom();
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }

  function stopTimer() {
    const realDom = document.getElementById("real-dom");

    clearInterval(interval);

    var html = `
    <div>
      <p class="css-egft4">Real DOM</p>
      <p>Timer stops</p>
    </div>
  `;
    if (realDom) {
      realDom.innerHTML = html;
    }
  }

  return (
    <Stack>
      <Box id="virtual-dom">
        <Text variant="heading-2">Virtual DOM</Text>
        <Flex gap="15px" mb="10px">
          <Button onClick={startTimer}>Enable timer</Button>
          <Button onClick={stopTimer}>Disable timer</Button>
        </Flex>
        <Text>Time: {time}</Text>
      </Box>

      <Box id="real-dom">
        <Text variant="heading-2">Real DOM</Text>
      </Box>
    </Stack>
  );
}
