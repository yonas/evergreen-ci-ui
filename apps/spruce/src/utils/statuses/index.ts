import { TaskStatus } from "@evg-ui/lib/types/task";
import { failedTaskStatuses, finishedTaskStatuses } from "constants/task";
import { getCurrentStatuses } from "./getCurrentStatuses";
import { groupStatusesByUmbrellaStatus } from "./groupStatusesByUmbrellaStatus";
import { sortTasks } from "./sort";

export { sortTasks, groupStatusesByUmbrellaStatus, getCurrentStatuses };

export const isFinishedTaskStatus = (status: string): boolean =>
  finishedTaskStatuses.includes(status as TaskStatus);

export const isFailedTaskStatus = (taskStatus: string) =>
  failedTaskStatuses.includes(taskStatus as TaskStatus);
