import Button from "components/Button";
import List from "components/List";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTask } from "redux/actions";
import { getTasks } from "redux/selectors";
import "./TaskList.scss";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(getTasks);

  const addTaskHandler = useCallback(() => {
    const title = window.prompt("Краткое описание");

    if (title) {
      dispatch(postTask(title));
    }
  }, [dispatch]);

  return (
    <div className="task-list">
      <div className="header">
        <h1>Список задач</h1>
        <Button text="Добавить" type="green" onClick={addTaskHandler} />
      </div>
      <List data={tasks} />
    </div>
  );
};

export default TaskList;
