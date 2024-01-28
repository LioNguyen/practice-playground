import { Action } from "@reduxjs/toolkit";

import { DECREASE_COUNTER, INCREASE_COUNTER } from "../constants/counter";

interface InitialState {
  value: number;
}

const initialState: InitialState = {
  value: 0,
};

export default function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case INCREASE_COUNTER: {
      return {
        ...state,
        value: state.value + 1,
      };
    }

    case DECREASE_COUNTER: {
      return {
        ...state,
        value: state.value - 1,
      };
    }

    default: {
      return state;
    }
  }
}
