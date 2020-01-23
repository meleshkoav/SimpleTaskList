import Button from "components/Button";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { deleteTask, updateTask } from "redux/actions";
import { getTasks } from "redux/selectors";
import { ITask } from "types";
import "./TaskEdit.scss";

const TaskEdit: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id = "" } = useParams();
  const idNum = parseInt(id);

  const tasks = useSelector(getTasks);
  const [task, setTask] = useState<ITask | undefined>();
  const [title, setTitle] = useState(task ? task.title : "");

  useEffect(() => {
    const task = tasks.filter(item => item.id === idNum)[0];
    if (task) {
      setTask(task);
      setTitle(task.title);
    }
  }, [tasks, idNum]);

  const goToList = useCallback(() => {
    history.push("/items");
  }, [history]);

  const handleDelete = useCallback(() => {
    dispatch(deleteTask(idNum));
    goToList();
  }, [dispatch, goToList, idNum]);

  const handleUpdate = useCallback(() => {
    const newTask: ITask = {
      id: idNum,
      title
    };
    dispatch(updateTask(newTask));
    goToList();
  }, [dispatch, idNum, title, goToList]);

  const isChanded = task && task.title !== title;

  return (
    <div className="task-edit">
      <div className="header">
        <h1>Задача №{id}</h1>
        <Button text="Удалить" type="green" onClick={handleDelete} />
      </div>
      {task && (
        <div className="editor">
          Краткое описание
          <input value={title} onChange={e => setTitle(e.target.value)}></input>
        </div>
      )}
      <Button
        text={isChanded ? "Сохранить" : "Вернуться к списку"}
        onClick={isChanded ? handleUpdate : goToList}
      />
    </div>
  );
};

export default TaskEdit;
