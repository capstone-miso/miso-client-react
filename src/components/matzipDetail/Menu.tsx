import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

function MatzipMenu() {
  interface Menu {
    id: number;
    menuName: string;
    price: string;
  }
  const menu: Menu[] = [
    { id: 0, menuName: "손칼국수", price: "8,000원" },
    { id: 1, menuName: "칼만두국", price: "9,000원" },
    { id: 2, menuName: "들깨칼국수", price: "9,000원" },
    { id: 3, menuName: "클로렐라만두-한판", price: "6,000원" },
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
          {menu.map((Menu) => (
            <Stack key={Menu.id}>
              <Text mt="8px" mb="-10px" as="b" fontSize="sm">
                {Menu.menuName}
              </Text>
              <Text color="gray.500" fontSize="xs">
                {Menu.price}
              </Text>
            </Stack>
          ))}
        </CardBody>
      </Stack>
    </Card>
  );
}

export default MatzipMenu;
