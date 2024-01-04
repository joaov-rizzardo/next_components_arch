import { ReactNode, forwardRef } from "react";
import NextLink from "next/link";
import Text from "../Text/Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypografyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";

interface LinkProps {
  href: string;
  children: ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypografyVariants;
  colorVariant?:
    | "primary"
    | "accent"
    | "neutral"
    | "positive"
    | "warning"
    | "negative";
  colorVariantEnabled?: boolean;
}

const Link = forwardRef(
  (
    {
      href,
      children,
      colorVariant,
      styleSheet,
      colorVariantEnabled,
      ...props
    }: LinkProps,
    ref
  ) => {
    const isExternalLink = href.startsWith("http");
    const theme = useTheme();

    const currentColorSet = {
      color: theme.colors[colorVariant].x500,
      hover: {
        color: theme.colors[colorVariant].x400,
      },
      focus: {
        color: theme.colors[colorVariant].x600,
      },
    };

    const linkProps = {
      ref,
      children,
      href,
      tag: "a",
      styleSheet: {
        textDecoration: "none",
        ...(colorVariantEnabled && {
          color: currentColorSet.color,
        }),
        hover: {
          ...styleSheet?.hover,
          ...(colorVariantEnabled && {
            color: currentColorSet.hover.color,
          }),
        },
        focus: {
          ...styleSheet?.focus,
          ...(colorVariantEnabled && {
            color: currentColorSet.focus.color,
          }),
        },
        ...styleSheet,
      },
      ...props,
    };

    if (isExternalLink) {
      return (
        <Text
          {...{
            target: "_blank",
            ...linkProps,
          }}
        />
      );
    }
    return (
      <NextLink href={href} passHref legacyBehavior>
        <Text {...linkProps}>{children}</Text>
      </NextLink>
    );
  }
);

Link.defaultProps = {
  colorVariant: "primary",
  colorVariantEnabled: true,
};

export default Link;
