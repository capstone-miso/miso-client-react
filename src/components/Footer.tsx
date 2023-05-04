import { Flex } from "@chakra-ui/react";
import { FooterButton } from "./FooterButton";

export const Footer = () => {
  return (
    <Flex
      w={["100%", "100%", "390px"]}
      alignItems="center"
      mb="0"
      display={["flex", "flex", "none"]}
    >
      <FooterButton />
      <FooterButton />
      <FooterButton />
      <FooterButton />
    </Flex>
  );
};
