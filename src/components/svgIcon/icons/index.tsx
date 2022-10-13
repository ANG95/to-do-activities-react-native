import { PENDING_TASK } from './pendingTask';
import { COMPLETED_TASK } from './completedTask';
import { HEADER } from './header';
import { CHECK } from './check';
import { TRASH } from './trash';
import { EDIT } from './edit';
import { CHECKED } from './checked';

export const icons = {
  completedTask: COMPLETED_TASK,
  pendingTask: PENDING_TASK,
  header: HEADER,
  check: CHECK,
  trash: TRASH,
  edit: EDIT,
  checked: CHECKED,
};

export type SvgIconTypes = keyof typeof icons;
