import { useContext } from "react";
import { TaskContext } from "../../context/tasks.context";
import { status } from "../../models/task.model";
import { TaskItem } from "../task/task";

interface Props {
  status: status;
}
export const List = ({ status }: Props) => {
  const { tasks } = useContext(TaskContext);

  const Title = (value: status) => {
    switch (value) {
      case 0:
        return "Backlog";
      case 1:
        return "In Progress";
      case 2:
        return "Testing";
      case 3:
        return "Rejected";
      case 4:
        return "Ready for deploy";
      case 5:
        return "Done";
      default:
        return "";
    }
  };

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
