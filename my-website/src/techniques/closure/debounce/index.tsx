import { Container, Flex, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

function debounce(func: Function, delay: number) {
  let timeout: any;

  // Rest parameter
  return (...args: any[]) => {
    const callback = () => {
      // Spread operator
      func(...args);
      timeout = null;
    };

    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}

export function DebounceComponent() {
  const [timeoutValue, setTimeoutValue] = useState(500);
  const [inputValue, setInputValue] = useState("");

  const handleTimeoutChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeoutValue(+e.target.value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const inputChangeDebounce = debounce(handleInputChange, timeoutValue);

  return (
    <Container marginBottom={10}>
      <Text fontSize="5xl">Debounce</Text>

      {/* 1st method */}
      <Input onChange={inputChangeDebounce} />

      {/* 2nd method */}
      {/* <Input onChange={(e) => inputChangeDebounce(e)} /> */}

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

      <Flex gap={2} marginTop={2}>
        <Text fontWeight={500}>Input Value:</Text>
        <Text>{inputValue}</Text>
      </Flex>
    </Container>
  );
}
