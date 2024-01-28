import { Button, Circle, Container, Flex, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

let shouldWait = false;
function throttle(func: Function, delay: number) {
  // Rest parameter
  return (...args: any[]) => {
    if (!shouldWait) {
      const callback = () => {
        shouldWait = false;
      };

      // Spread operator
      func(...args);
      shouldWait = true;
      setTimeout(callback, delay);
    }
  };
}

export function ThrottleComponent() {
  const [clickTime, setClickTime] = useState(0);
  const [timeoutValue, setTimeoutValue] = useState(1000);

  const handleTimeoutChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeoutValue(+e.target.value);
  };

  const handleClick = () => {
    setClickTime((prev) => prev + 1);
  };

  const handleClickThrottle = throttle(handleClick, timeoutValue);

  return (
    <Container marginBottom={10}>
      <Text fontSize="5xl">Throttle</Text>

      <Flex gap={2}>
        {/* 1st method */}
        <Button onClick={handleClickThrottle}>Click Me!</Button>

        {/* 2nd method */}
        {/* <Button onClick={(e) => handleClickThrottle(e)}>Click Me!</Button> */}

        <Circle bg="gray.100" size={10} fontWeight={500}>
          {clickTime}
        </Circle>
      </Flex>

      <Flex gap={2} marginTop={2} alignItems="center">
        <Text fontWeight={500}>Delay</Text>
        <Input
          type="number"
          width="80px"
          value={timeoutValue}
          onChange={handleTimeoutChange}
        />
        <Text>ms</Text>
      </Flex>
    </Container>
  );
}
