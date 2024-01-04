import { ReactNode } from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, Variant, colorVariantBy } from "./colorVariantBy";
import { useTheme } from "@src/theme/ThemeProvider";
import { ButtonSize, buttonSize } from "./buttonSIze";

interface ButtonProps extends ButtonBaseProps {
  children: ReactNode;
  fullWidth?: boolean;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}
export default function Button({
  fullWidth,
  styleSheet,
  colorVariant,
  variant,
  children,
  size,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <ButtonBase
      styleSheet={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        ...buttonSize[size],
        ...colorVariantBy(theme, colorVariant, variant),
        ...(fullWidth && {
          alignSelf: "initial",
        }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  variant: "contained",
  size: "md",
  colorVariant: "primary",
};

Button.Base = ButtonBase;
