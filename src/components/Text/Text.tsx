import { ReactNode, forwardRef } from "react";
import { ThemeTypografyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
  tag?: "p" | "li" | "h1" | "h2" | "h3" | "h4" | string;
  children: ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypografyVariants;
  ref: any;
}

const Text = forwardRef(
  ({ tag, styleSheet, variant, ...props }: TextProps, ref) => {
    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];
    return (
      <BaseComponent
        as={tag}
        styleSheet={{
          fontFamily: theme.typography.fontFamily,
          ...textVariant,
          ...styleSheet,
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.defaultProps = {
  tag: "p",
  variant: "body2",
};

export default Text;
