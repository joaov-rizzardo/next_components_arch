import { ThemeTypografyVariants } from "@src/theme/theme";
import Text from "../Text/Text";
import styled from "styled-components";
import { MouseEvent, ReactNode, useRef } from "react";
import { useRipple } from "react-use-ripple";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useRouter } from "next/router";

const StyledButton = styled(Text)<any>``;

export interface ButtonBaseProps {
  textVariant?: ThemeTypografyVariants;
  children: ReactNode;
  styleSheet?: StyleSheet;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  textVariant,
  children,
  styleSheet,
  href,
  ...props
}: ButtonBaseProps) {
  const ref = useRef();
  const isLink = Boolean(href);

  useRipple(ref, {
    animationLength: 600,
    rippleColor: "rgba(255,255,255, 0.7)",
  });

  const router = useRouter();
  const Tag = isLink ? "a" : "button";
  return (
    <StyledButton
      tag={Tag}
      href={href}
      ref={ref}
      styleSheet={{
        border: "0",
        backgroundColor: "transparent",
        color: "inherit",
        outline: "0",
        cursor: "pointer",
        textDecoration: "none",
        ...styleSheet,
      }}
      onClick={(event) => {
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event);
      }}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
