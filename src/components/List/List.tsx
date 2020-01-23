import React from "react";
import { ITask } from "../../types";
import ListRow from "./ListRow";

export interface IListProps {
  data: ITask[];
}

const List: React.FC<IListProps> = ({ data }) => {
  if (!data.length) {
    return <div>н/д</div>;
  }

  return (
    <div className="list-container">
      {data.map(task => (
        <ListRow key={task.id} task={task} />
      ))}
    </div>
  );
};

export default List;
