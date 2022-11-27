import { useContext, useState } from "react";
import { VscClose } from "react-icons/vsc";
import { TaskContext } from "../../context/tasks.context";
import { status, Task } from "../../models/task.model";
import { enumToArray } from "../../utils/enumsToArray.utilities";

interface Props {
  item: Task;
}

export const TaskItem = ({ item }: Props) => {
  const { changeStatus, deleteTask } = useContext(TaskContext);
  const [value, setValue] = useState<number>(item.status);
  const Options: any[] = enumToArray(status);

  const changeStyles = (value: status) => {
    switch (value) {
      case status.backlog:
        return "task-backlog";
      case status["in progress"]:
        return "task-progress";
      case status.testing:
        return "task-testing";
      case status.rejected:
        return "task-rejected";
      case status["ready for deploy"]:
        return "task-ready";
      case status.done:
        return "task-done";
    }
  };

  return (
    <div className={"task " + changeStyles(item.status)}>
      <span className="end">
        <button
          onClick={() => {
            deleteTask(item.id);
          }}
          className="btn-icon"
        >
          <VscClose color="white" />
        </button>
      </span>
      <div className="task__title">
        <p className="task__title-text">
          <b>{item.title ?? ""} </b>
        </p>
        <select
          value={value}
          onChange={(e) => {
            setValue(Number(e.target.value));
            changeStatus(item.id, Number(e.target.value));
          }}
          className="select task__title-select"
        >
          {Options?.map((i) => {
            return (
              <option key={i.key} value={i.key}>
                {i.value}
              </option>
            );
          })}
        </select>
      </div>

      <div className="task__description">
        <small>
          {" "}
          <b>Description:</b> {item.description ?? ""}{" "}
        </small>
      </div>
    </div>
  );
};
