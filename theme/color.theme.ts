import { palette } from './palette.theme';

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.purple,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.purpleDark,
  /**
   * The main tinting color, but light.
   */
  primaryLight: palette.purpleLight,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.greyLight,
  /**
   * The default color of text in many components.
   */
  text: palette.blackText,
  /**
   * The default color of text in many components.
   */
  dim: palette.greyLight,
  /**
   * Error messages and icons.
   */
  error: palette.error,
  /**
   * Info messages and icons.
   */
  info: palette.info,
  /**
   * Warning messages and icons.
   */
  warning: palette.warning,
  /**
   * Success messages and icons.
   */
  success: palette.success,
  /**
   * Disabled button.
   */
  disabled: palette.grey,
};
