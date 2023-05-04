import { Card, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function BasicInformation() {
  return (
    <>
      <Image
        w="330px"
        h="250px"
        src="https://ifh.cc/g/1F285t.jpg"
        alt="대원칼국수"
        borderRadius="lg"
      />
      <Card
        variant="unstyled"
        alignContent="left"
        alignItems="left"
        display="left"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        w="330px"
      >
        <Stack pl="4" mt="6" mb="6" spacing="1">
          <Heading size="lg">대원칼국수</Heading>
          <Text color="gray.600" fontSize="xs">
            한식
          </Text>
          <Stack direction="row">
            <Image
              src="https://ifh.cc/g/1NbN0R.png"
              alt="위치"
              mt="0.5"
              boxSize="15px"
            />
            <Text fontSize="sm">서울 광진구 자양로18길 56 거송빌딩</Text>
          </Stack>
          <Stack direction="row">
            <Image
              boxSize="15px"
              src="https://ifh.cc/g/ZtPNRC.png"
              alt="전화"
              mt="0.5"
            />
            <Text fontSize="sm">02-454-3112</Text>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default BasicInformation;
