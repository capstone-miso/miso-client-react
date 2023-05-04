import {
  Card,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";

// for문 도는 방식으로 고쳐야함
function FoodMatzipList() {
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
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/rZHQ4y.png"
                  alt="집"
                />
                <Heading size="sm">한식</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/rZHQ4y.png"
                  alt="집"
                />
                <Heading size="sm">중식</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/rZHQ4y.png"
                  alt="집"
                />
                <Heading size="sm">일식</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/rZHQ4y.png"
                  alt="집"
                />
                <Heading size="sm">양식</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/rZHQ4y.png"
                  alt="집"
                />
                <Heading size="sm">기타</Heading>
              </Flex>
            </CardHeader>
          </Card>
        </Stack>
      </Flex>
    </>
  );
}

export default FoodMatzipList;
