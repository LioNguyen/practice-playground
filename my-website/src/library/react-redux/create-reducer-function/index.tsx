import {
  Button,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { Provider, useDispatch, useSelector } from "react-redux";

import { decreaseCounter, increaseCounter } from "./actions/counter";
import { selectCounter } from "./selector/counter";
import store from "./store";

export function ReactReduxCreateReducer() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  const decreaseClick = () => {
    dispatch(decreaseCounter());
  };
  const increaseClick = () => {
    dispatch(increaseCounter({ id: "lorem", text: "example" }));
  };

  return (
    <Stack marginBottom={10}>
      <Text variant="heading-2">React Redux: Counter</Text>
      <UnorderedList>
        <ListItem>Create reducer function with actions object</ListItem>
        <ListItem>Then, add reducer into configureStore</ListItem>
      </UnorderedList>
      <Text fontSize="xl" fontWeight={500}>
        Counter: {counter}
      </Text>
      <Flex gap={5}>
        <Button onClick={decreaseClick}>Decrease</Button>
        <Button onClick={increaseClick}>Increase</Button>
      </Flex>
    </Stack>
  );
}
