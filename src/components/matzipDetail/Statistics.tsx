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
          <Text fontSize="xs" mb="5px">
            공무원 업무추진비내역을 바탕으로 추출한 키워드
          </Text>
          {storeData?.keywords.map((keyword) => (
            <Text as="b" color="white" fontSize="sm" backgroundColor="orange" padding="2px" pl="5px" pr="5px" mr="3px" borderRadius="4px">
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
