import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { deleteTask } from "redux/actions";
import { ITask } from "../../../types";
import Button from "../../Button";
import "./ListRow.scss";

export interface IListProps {
  task: ITask;
}

const ListRow: React.FC<IListProps> = ({ task }) => {
  const { id, title } = task;

  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();

  const handleEdit = useCallback(() => {
    const newLocation = `${location.pathname}/${id}`;
    history.push(newLocation);
  }, [location, history, id]);

  const handleDelete = useCallback(() => {
    dispatch(deleteTask(id));
  }, [dispatch, id]);

  return (
    <div className="row">
      <div className="table-cell row-id">{id}</div>
      <div className="table-cell row-title">{title}</div>
      <div className="table-cell row-buttons">
        <Button type="green" text="Р" onClick={handleEdit} />
        <Button type="red" text="У" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default ListRow;
