export enum status {
  "backlog",
  "in progress",
  "testing",
  "rejected",
  "ready for deploy",
  "done",
}
export interface Task {
  id: string;
  title: string;
  description: string;
  status: status;
}
