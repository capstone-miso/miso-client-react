import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <Flex
      w={["100%", "100%", "390px"]}
      h="804px"
      flexGrow="1"
      overflow="auto"
      flexDir="column"
      alignItems="center"
    >
      {children}
    </Flex>
  );
}
