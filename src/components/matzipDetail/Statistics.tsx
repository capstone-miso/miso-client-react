import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Statistics = () => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="330px"
      h="990px"
      mt="6"
    >
      <Stack>
        <CardBody h="900px">
          <Heading size="md" mb="2">
            키워드
          </Heading>
          <Text as="b" fontSize="sm">
            #봄에많이찾는 #점심에많이가는 #가성비맛집
          </Text>
          {/* <Doughnut /> */}
        </CardBody>
      </Stack>
    </Card>
  );
};

export default Statistics;
