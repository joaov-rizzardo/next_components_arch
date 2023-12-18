import Box from "@src/components/Box";
import theme from "@src/theme/theme";

export default function HomeScreen() {
  return (
    <Box
      tag={"main"}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: {
          lg: "green",
          md: "red",
          sm: "blue",
          xl: "pink",
          xs: "yellow",
        },
      }}
    >
      Oi
    </Box>
  );
}
