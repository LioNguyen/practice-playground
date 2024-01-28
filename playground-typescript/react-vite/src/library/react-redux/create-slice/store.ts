import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
  console.log("customLogMiddleware ~ dispatching", action);
  let result = next(action);
  console.log("customLogMiddleware ~ next state", store.getState());
  return result;
};

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, logger, customLogMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
