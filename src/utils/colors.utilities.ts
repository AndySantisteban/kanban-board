import { status } from "../models/task.model";

export const changeStyles = (value: status) => {
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
