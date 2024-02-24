# REACT REDUX

- [React Redux](https://react-redux.js.org/tutorials/quick-start)
- [Custom Middleware](https://redux.js.org/understanding/history-and-design/middleware#the-final-approach)
- [Redux Saga](https://redux-saga.js.org)

## How to setup?

- Flow: slice (including actions + reducers) -> store -> hook
- Using `createSlice`: create actions + reducers
- Then, add `slice` into `configureStore`

```js
// counterSlice.ts

import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCounter: (state) => {
      state.value += 1;
    },
    decreaseCounter: (state) => {
      state.value -= 1;
    },
  },
});

export const { decreaseCounter, increaseCounter } = counterSlice.actions;
export default counterSlice.reducer;
```

- Create store

```js
// store.ts

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

- Create hooks

```js
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

```

## How to use?

```js
import { Provider } from "react-redux";

import { decreaseCounter, increaseCounter } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import store from "./store";

function ReactRedux() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const decreaseClick = () => {
    dispatch(decreaseCounter());
  };
  const increaseClick = () => {
    dispatch(increaseCounter());
  };

  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={decreaseClick}>Decrease</button>
      <button onClick={increaseClick}>Increase</button>
    </div>
  );
}
```

## How to add middleware?

```js
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import counterReducer from "./counterSlice";
import mySaga from "./saga";

// Reducers
const rootReducers = combineReducers({
  counter: counterReducer,
});

// Middleware
const sagaMiddleware = createSagaMiddleware();

const customLogMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, logger, customLogMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

## How to add saga middleware?
