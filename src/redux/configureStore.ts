import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Tasks } from "./reducers";

export const configureStore = () => {
  const store = createStore(Tasks, applyMiddleware(thunk));

  return store;
};
