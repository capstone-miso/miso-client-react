import {
  Card,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";

function FoodMatzipList() {
  interface FoodType {
    id: number;
    type: string;
  }

  const foodButton: FoodType[] = [
    { id: 0, type: "한식" },
    { id: 1, type: "중식" },
    { id: 2, type: "일식" },
    { id: 3, type: "양식" },
    { id: 4, type: "기타" },
  ];
  return (
    <>
      <Flex
        maxW="100%"
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        alignItems="center"
      >
        <Stack
          pt="45px"
          maxW="100%"
          spacing={4}
          direction="column"
          align="center"
        >
          {foodButton.map((FoodType) => (
            <Card key={FoodType.id} variant="elevated" w="350px">
              <CardHeader>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Image
                    boxSize="18px"
                    src="https://ifh.cc/g/rZHQ4y.png"
                    alt="집"
                  />
                  <Heading size="sm">{FoodType.type}</Heading>
                </Flex>
              </CardHeader>
            </Card>
          ))}
        </Stack>
      </Flex>
    </>
  );
}

export default FoodMatzipList;
