import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Chart from "../charts/ApexChart";
import PriceChart from "../charts/PriceChart";
import TimeChart from "../charts/TimeChart";
const Statistics = () => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="330px"
      h="1060px"
      mt="6"
      mb="20px"
    >
      <Stack>
        <CardBody h="900px">
          <Heading size="md" mb="2">
            키워드
          </Heading>
          <Text as="b" fontSize="sm">
            #봄에많이찾는 #점심에많이가는 #가성비맛집
          </Text>
          <Chart />
          <TimeChart />
          <PriceChart />
          {/* <Doughnut /> */}
        </CardBody>
      </Stack>
    </Card>
  );
};

export default Statistics;
