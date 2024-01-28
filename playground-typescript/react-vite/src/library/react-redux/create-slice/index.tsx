import {
  Button,
  Flex,
  Input,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { Provider } from "react-redux";

import {
  decreaseCounter,
  decreaseCounterByAmount,
  increaseCounter,
  increaseCounterByAmount,
} from "./counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import store from "./store";

export function ReactRedux() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const [amount, setAmount] = useState(5);
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const decreaseClick = () => {
    dispatch(decreaseCounter());
  };
  const increaseClick = () => {
    dispatch(increaseCounter());
  };
  const increaseByAmountClick = () => {
    dispatch(increaseCounterByAmount({ amount }));
  };
  const decreaseByAmountClick = () => {
    dispatch(decreaseCounterByAmount({ amount }));
  };

  return (
    <Stack marginBottom={10}>
      <Text variant="heading-2">React Redux: Counter</Text>
      <UnorderedList>
        <ListItem>Using createSlice: create actions + reducers</ListItem>
        <ListItem>Then, add slice into configureStore</ListItem>
      </UnorderedList>
      <Text fontSize="xl" fontWeight={500}>
        Counter: {counter}
      </Text>
      <Flex gap={5}>
        <Button onClick={decreaseClick}>Decrease</Button>
        <Button onClick={increaseClick}>Increase</Button>
      </Flex>
      <Flex gap={5}>
        <Button onClick={decreaseByAmountClick}>Decrease By Amount</Button>
        <Button onClick={increaseByAmountClick}>Increase By Amount</Button>
        <Input
          width={20}
          type="number"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
      </Flex>
    </Stack>
  );
}
