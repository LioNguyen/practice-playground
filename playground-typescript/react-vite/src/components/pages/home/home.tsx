import { Link, Stack, Text } from "@chakra-ui/react";

export function Home() {
  return (
    <Stack>
      <Text variant="title">Home Page</Text>
      <Link
        href="https://codesandbox.io/p/devbox/practice-javascript-2898w3?file=%2Fsrc%2Findex.js%3A6%2C1"
        isExternal
      >
        CodeSandBox | Javascript Playground
      </Link>
    </Stack>
  );
}
