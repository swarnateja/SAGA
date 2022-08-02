import { applyMiddleware, createStore } from "redux";

// import { contactsReducer } from "./reducers/contacts";
import { mobileReducer } from "./reducers/mobile";
import createSagaMiddleware from "redux-saga";
import { watchUsers } from "./sagas/users.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  mobileReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchUsers);
