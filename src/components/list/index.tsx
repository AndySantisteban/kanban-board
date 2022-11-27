import { useContext } from "react";
import { TaskContext } from "../../context/tasks.context";
import { status } from "../../models/task.model";
import { Title } from "../../utils/title.utilities";
import { TaskItem } from "../task/task";

interface Props {
  status: status;
}
export const List = ({ status }: Props) => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="layout__col">
      <h3>{Title(status)}</h3>
      {tasks
        ?.filter((item) => item.status === status)
        ?.map((item) => {
          return (
            <div style={{ marginBottom: "10px" }}>
              <TaskItem item={item} />
            </div>
          );
        }) ?? []}
    </div>
  );
};
