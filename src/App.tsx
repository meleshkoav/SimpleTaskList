import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store = configureStore();

const App: React.FC = () => {
  const content = <div className="App"></div>;

  return <Provider store={store}>{content}</Provider>;
};

export default App;
