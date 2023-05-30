import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { storeDetail } from "../../pages/MatzipDetail";

// api 정보 반영
function MatzipMenu({ storeData }: { storeData: storeDetail | null }) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="330px"
      mt="25px"
    >
      <Stack>
        <CardBody>
          <Heading size="md" mb="4">
            대중교통
          </Heading>
          <Stack>
            <Stack direction="row">
              <Image
                boxSize="15px"
                src="https://ifh.cc/g/00oJP1.png"
                alt="지하철"
                mt="0.5"
              />
              <Text mt="8px" mb="-2px" fontSize="sm">
                {storeData?.storeInfo.findway.subway.stationName}{" "}
                {storeData?.storeInfo.findway.subway.exitNum}번 출구 ~{" "}
                {storeData?.storeInfo.findway.subway.distance}m
              </Text>
            </Stack>
            <Stack direction="row">
              <Image
                boxSize="15px"
                src="https://ifh.cc/g/NKzRnz.png"
                alt="버스"
                mt="0.5"
              />
              <Text mt="8px" mb="-2px" fontSize="sm">
                {storeData?.storeInfo.findway.bus.busStopName} 정류장 ~{" "}
                {storeData?.storeInfo.findway.bus.distance}m
                {storeData?.storeInfo.findway.bus.busNames.map((info) => (
                  <Text fontSize="sm">{info} </Text>
                ))}
              </Text>
            </Stack>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default MatzipMenu;
