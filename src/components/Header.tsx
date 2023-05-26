import { Card, CardHeader, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

type HeaderProps = {
  title: string;
};

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
        <Flex flex="1" alignItems="center" flexWrap="wrap" mt="25px" ml="10px">
          <Image
            w="50px"
            h="40px"
            src="https://ifh.cc/g/Q55dgG.png"
            alt="선"
            ml="1px"
          />
          <Heading ml="-5">{title}</Heading>
        </Flex>
      </CardHeader>
    </Card>
  );
};

export default Header;
