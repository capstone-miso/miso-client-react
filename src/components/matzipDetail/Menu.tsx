import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { storeDetail } from "../../pages/MatzipDetail";

// api 정보 반영
function MatzipMenu({ storeData }: { storeData: storeDetail | null }) {
  interface Menu {
    mid: number;
    name: string;
    cost: string;
  }
  const menu: Menu[] = [
    { mid: 0, name: "손칼국수", cost: "8,000원" },
    { mid: 1, name: "칼만두국", cost: "9,000원" },
    { mid: 2, name: "들깨칼국수", cost: "9,000원" },
    { mid: 3, name: "클로렐라만두-한판", cost: "6,000원" },
  ];

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="330px"
    >
      <Stack>
        <CardBody>
          <Heading size="md" mb="2">
            대표메뉴
          </Heading>
          {storeData?.menuInfo.menuList.map((Menu, index) => (
            <Stack key={index}>
              <Text mt="8px" mb="-10px" as="b" fontSize="sm">
                {Menu.menu}
              </Text>
              <Text color="gray.500" fontSize="xs">
                {Menu.price}원
              </Text>
            </Stack>
          ))}
        </CardBody>
      </Stack>
    </Card>
  );
}

export default MatzipMenu;
