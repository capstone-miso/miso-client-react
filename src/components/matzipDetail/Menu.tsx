import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

function MatzipMenu() {
  const menu: [string, string][] = [
    ["손칼국수", "8,000원"],
    ["칼만두국", "9,000원"],
    ["들깨칼국수", "9,000원"],
    ["클로렐라만두-한판", "6,000원"],
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
          {menu.map(
            ([menuName, menuPrice]: [string, string], index: number) => (
              <Stack key={index}>
                <Text mt="8px" mb="-10px" as="b" fontSize="sm">
                  {menuName}
                </Text>
                <Text color="gray.500" fontSize="xs">
                  {menuPrice}
                </Text>
              </Stack>
            )
          )}
        </CardBody>
      </Stack>
    </Card>
  );
}

export default MatzipMenu;
