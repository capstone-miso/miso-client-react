import { Card, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

// api 정보 반영
function BasicInformation() {
  interface Information {
    id: number;
    mainImage: string;
    storeName: string;
    category: string;
    address: string;
    phone: string;
    onInfo: string;
  }

  const detailInformation: Information[] = [
    {
      id: 0,
      mainImage: "https://ifh.cc/g/1F285t.jpg",
      storeName: "대원칼국수",
      category: "한식",
      address: "서울 광진구 자양로18길 56 거송빌딩",
      phone: "02-454-3112",
      onInfo: "매일 11:00 - 20:00",
    },
  ];

  return (
    <>
      {detailInformation.map((Information) => (
        <Stack>
          <Image
            key={Information.id}
            w="330px"
            h="250px"
            src={Information.mainImage}
            alt={Information.storeName}
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
              <Heading size="lg">{Information.storeName}</Heading>
              <Text color="gray.600" fontSize="xs">
                {Information.category}
              </Text>
              <Stack direction="row">
                <Image
                  src="https://ifh.cc/g/1NbN0R.png"
                  alt="위치"
                  mt="0.5"
                  boxSize="15px"
                />
                <Text fontSize="sm">{Information.address}</Text>
              </Stack>
              <Stack direction="row">
                <Image
                  boxSize="15px"
                  src="https://ifh.cc/g/ZtPNRC.png"
                  alt="전화"
                  mt="0.5"
                />
                <Text fontSize="sm">{Information.phone}</Text>
              </Stack>
              <Stack direction="row">
                <Image
                  boxSize="15px"
                  src="https://ifh.cc/g/jOK0yJ.png"
                  alt="운영시간"
                  mt="0.5"
                />
                <Text fontSize="sm">{Information.onInfo}</Text>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      ))}
    </>
  );
}

export default BasicInformation;
