import { PENDING_TASK } from './pendingTask';
import { COMPLETED_TASK } from './completedTask';
import { HEADER } from './header';
import { CHECK } from './check';
import { TRASH } from './trash';
import { EDIT } from './edit';
import { CHECKED } from './checked';
import { SEARCH } from './search';
import { CLOSE } from './close';
import { SAVE } from './save';

export const icons = {
  completedTask: COMPLETED_TASK,
  pendingTask: PENDING_TASK,
  header: HEADER,
  check: CHECK,
  trash: TRASH,
  edit: EDIT,
  checked: CHECKED,
  search: SEARCH,
  close: CLOSE,
  save: SAVE,
};

export type SvgIconTypes = keyof typeof icons;
