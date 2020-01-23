import React, { useEffect } from "react";
import "./App.scss";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore } from "./redux/configureStore";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskList from "containers/TaskList";
import TaskEdit from "containers/TaskEdit";
import { getError } from "redux/selectors";
import { fetchTasks } from "redux/actions";

const store = configureStore();

const ErrorDisplay: React.FC = () => {
  const errMsg = useSelector(getError);

  useEffect(() => {
    if (errMsg) {
      window.alert(errMsg);
    }
  }, [errMsg]);

  return null;
};

const InitialTaskFetcher: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return null;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorDisplay />
        <InitialTaskFetcher />
        <div className="page">
          <div className="wrapper">
            <Switch>
              <Route exact path="/items">
                <TaskList />
              </Route>
              <Route path="/items/:id">
                <TaskEdit />
              </Route>
              <Redirect to="/items" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
