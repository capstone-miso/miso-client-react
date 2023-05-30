import { Card, CardHeader, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import styled from 'styled-components';

type HeaderProps = {
  title: string;
};

const Rectangle = styled.div`
  width: 7px;
  height: 30px;
  margin: 0px 5px 0px 0px;
  background: orange;
`

const Header = ({ title }: HeaderProps) => {
  return (
    <Card
      variant="unstyled"
      // bgColor="blue"
      w="390px"
      h="85px"
      zIndex="1"
      display="left"
      direction="row"
      position="fixed"
    >
      <CardHeader>
        <Flex flex="1" alignItems="center" flexWrap="wrap" mt="25px" ml="20px">
          <Rectangle />
          <Heading style={{fontSize: "30px", fontFamily: "Noto_Sans_KR_Bold"}}>{title}</Heading>
        </Flex>
      </CardHeader>
    </Card>
  );
};

export default Header;
