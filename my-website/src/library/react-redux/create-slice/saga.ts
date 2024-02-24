import { takeLatest } from "redux-saga/effects";

function* increaseCounter() {
  try {
    console.log("Saga: increaseCounter");
  } catch (error) {}
}

function* decreaseCounter() {
  try {
    console.log("Saga: decreaseCounter");
  } catch (error) {}
}

function* mySaga() {
  yield takeLatest("counter/increaseCounter", increaseCounter);
  yield takeLatest("counter/decreaseCounter", decreaseCounter);
}

export default mySaga;
