import Box from "@src/components/Box/Box";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { ReactNode } from "react";

interface FeedProps {
  children: ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>Feed base</Text>
      {children}
    </Box>
  );
}

Feed.Header = () => {
  return (
    <Box styleSheet={{ color: "white" }}>
      <Image
        src={"https://github.com/joaov-rizzardo.png"}
        alt="Imagem de perfil do joão victor"
        styleSheet={{
          width: "128px",
          height: "128px",
          borderRadius: "100%",
        }}
      />
      <Icon name="youtube" />
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>Feed header</Text>
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
