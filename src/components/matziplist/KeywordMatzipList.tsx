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
function KeywordMatzipList() {
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
                  src="https://ifh.cc/g/GZq5S6.png"
                  alt="집"
                />
                <Heading size="sm">#점심에많이가는</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/GZq5S6.png"
                  alt="집"
                />
                <Heading size="sm">#저녁에많이가는</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/GZq5S6.png"
                  alt="집"
                />
                <Heading size="sm">#가성비맛집</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/GZq5S6.png"
                  alt="집"
                />
                <Heading size="sm">#회식은이곳에서</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/GZq5S6.png"
                  alt="집"
                />
                <Heading size="sm">#봄에많이찾는</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/GZq5S6.png"
                  alt="집"
                />
                <Heading size="sm">#여름에많이찾는</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/GZq5S6.png"
                  alt="집"
                />
                <Heading size="sm">#가을에많이찾는</Heading>
              </Flex>
            </CardHeader>
          </Card>
          <Card key="elevated" variant="elevated" w="350px">
            <CardHeader>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Image
                  boxSize="18px"
                  src="https://ifh.cc/g/GZq5S6.png"
                  alt="집"
                />
                <Heading size="sm">#겨울에많이찾는</Heading>
              </Flex>
            </CardHeader>
          </Card>
        </Stack>
      </Flex>
    </>
  );
}

export default KeywordMatzipList;
