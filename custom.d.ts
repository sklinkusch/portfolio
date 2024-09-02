/** @jsxImportSource theme-ui */
import { ThemeUIStyleObject } from 'theme-ui';

declare global {
  namespace react {
    interface Attributes {
      sx?: ThemeUIStyleObject;
    }
  }
}
