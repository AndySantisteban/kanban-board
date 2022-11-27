import { status } from "../models/task.model";

export const Title = (value: status) => {
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
