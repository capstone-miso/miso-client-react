import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { storeDetail } from "../../pages/MatzipDetail";
import Chart from "../charts/ApexChart";
import AttandenceChart from "../charts/AttandenceChart";
import PriceChart from "../charts/PriceChart";
import TimeChart from "../charts/TimeChart";
const Statistics = ({ storeData }: { storeData: storeDetail | null }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="330px"
      mt="6"
      mb="20px"
    >
      <Stack>
        <CardBody h="900px">
          <Heading size="md" mb="2">
            키워드
          </Heading>
          {storeData?.keywords.map((keyword) => (
            <Text as="b" fontSize="sm">
              #{keyword}
            </Text>
          ))}
          <Chart storeData={storeData} />
          <TimeChart storeData={storeData} />
          <PriceChart storeData={storeData} />
          <AttandenceChart storeData={storeData} />
        </CardBody>
      </Stack>
    </Card>
  );
};

export default Statistics;
