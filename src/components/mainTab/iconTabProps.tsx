import { SvgIconTypes } from '../svgIcon/icons';

export interface MainTabProps {
  tx: string;
  icon: SvgIconTypes;
  focused: boolean;
  text?: string;
}
