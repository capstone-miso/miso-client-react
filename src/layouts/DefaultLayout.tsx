import { Flex } from "@chakra-ui/react";
import { Container } from "../components/Container";

export type LayoutProps = {
  children?: React.ReactNode;
};

export type LayoutComponent = React.FC<LayoutProps>;

export const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Flex flexDir="column" h="100%" alignItems="center">
        <Container>{children}</Container>
        {/* <Footer /> */}
      </Flex>
    </>
  );
};
