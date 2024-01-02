import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ReactNode } from "react";

interface BoxProps {
  children?: ReactNode;
  tag?: "main" | "div" | "article" | "section" | "ul";
  styleSheet?: StyleSheet;
}

export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {
  const componentTag = tag || "div";
  return (
    <BaseComponent as={componentTag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
