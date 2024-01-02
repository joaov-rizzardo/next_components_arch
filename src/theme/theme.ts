import { typography } from "./defaults/typography";

const theme = {
  typography,
};

export type Theme = typeof theme;
export type ThemeTypografyVariants = keyof typeof theme.typography.variants;

export default theme;
