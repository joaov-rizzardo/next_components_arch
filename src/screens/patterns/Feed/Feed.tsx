import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import { ReactNode } from "react";

interface FeedProps {
  children: ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: "-228px",
        width: "100%",
        maxWidth: "683px",
        borderRadius: "8px",
        paddingVertical: "40px",
        paddingHorizontal: "32px",
      }}
    >
      {children}
    </Box>
  );
}

Feed.Header = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: "24px",
      }}
    >
      <Box
        styleSheet={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Image
          src={"https://github.com/joaov-rizzardo.png"}
          alt="Imagem de perfil do joão victor"
          styleSheet={{
            width: { xs: "100px", md: "128px" },
            height: { xs: "100px", md: "128px" },
            borderRadius: "100%",
          }}
        />
        <Box>
          <Box
            styleSheet={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <Button fullWidth colorVariant="primary" size="xl">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xl">
              Buy me a coffee
            </Button>
          </Box>
          <Box
            styleSheet={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <Button fullWidth colorVariant="primary" size="xs">
              Newsletter
            </Button>
            <Button fullWidth colorVariant="neutral" size="xs">
              Buy me a coffee
            </Button>
          </Box>
        </Box>
      </Box>
      <Button.Base href={"https://github.com/joaov-rizzardo"}>
        <Text tag="h1" variant="heading4">
          João Victor
        </Text>
      </Button.Base>

      {/* 
      <Link href="https://youtube.com">
        <Icon name="youtube" />
      </Link>
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>Feed header</Text> */}
    </Box>
  );
};

Feed.Posts = () => {
  return (
    <Box>
      <Text>Feed Posts</Text>
    </Box>
  );
};
