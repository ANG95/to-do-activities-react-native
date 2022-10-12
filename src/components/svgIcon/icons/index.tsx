import { PENDING_TASK } from './pendingTask';
import { COMPLETED_TASK } from './completedTask';

export const icons = {
  completedTask: COMPLETED_TASK,
  pendingTask: PENDING_TASK,
};

export type SvgIconTypes = keyof typeof icons;
