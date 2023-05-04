import { Flex } from "@chakra-ui/react";
import { Container } from "../components/Container";
import HeadInfo from "../components/HeadInformation";

export type LayoutProps = {
  children?: React.ReactNode;
};

export type LayoutComponent = React.FC<LayoutProps>;

export const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Flex flexDir="column" h="100%" alignItems="center">
        <HeadInfo />
        <Container>{children}</Container>
        {/* <Footer /> */}
      </Flex>
    </>
  );
};
