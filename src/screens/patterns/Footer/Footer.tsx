import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import { useTheme } from "styled-components";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "24px",
        paddingVertical: "24px",
        height: "120px",
        textAlign: "center",
      }}
    >
      <Text variant="body2">Feito popr João Victor Domingues</Text>
    </Box>
  );
}
