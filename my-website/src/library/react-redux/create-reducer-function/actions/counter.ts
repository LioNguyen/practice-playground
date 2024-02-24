import { DECREASE_COUNTER, INCREASE_COUNTER } from "../constants/counter";

interface PayloadType {
  id: string;
  text: string;
}

export const increaseCounter = ({ id, text }: PayloadType) => ({
  type: INCREASE_COUNTER,
  id,
  text,
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
});
