import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

type CardProps = {
  title: string;
  content: string;
};

const AgainListCard = ({ title, content }: CardProps) => {
  const again: [string, string][] = [
    ["https://ifh.cc/g/vcwjFd.jpg", "시홍쓰"],
    ["https://ifh.cc/g/oKLQGh.jpg", "대원칼국수"],
    ["https://ifh.cc/g/8KxBlw.jpg", "보승회관"],
  ];

  return (
    <>
      <Flex w="390px">
        <Card
          variant="unstyled"
          alignItems="left"
          alignSelf="center"
          display="left"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          w="390px"
          mt="20px"
          mb="20px"
          ml="10"
          mr="10"
        >
          <Stack>
            <CardBody>
              <Heading fontSize="lg">{title}</Heading>
              <Text fontSize="xs">{content}</Text>
              <Stack mt="2">
                <Card variant="unstyled" w="310px">
                  <Text
                    color="orange"
                    align="right"
                    alignItems="right"
                    alignSelf="right"
                    mb="1"
                  >
                    더보기
                  </Text>
                  <Card variant="unstyled" direction="row" w="390px">
                    {again.map(([imageUrl, store], index) => (
                      <Card
                        variant="unstyled"
                        alignItems="center"
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        w="95px"
                        h="115px"
                        mr="1"
                        ml="1"
                        key={index}
                      >
                        <Image
                          w="950px"
                          h="95px"
                          src={imageUrl}
                          alt="food"
                          borderRadius="lg"
                        />
                        <Text fontStyle="bold" fontSize="xs">
                          {store}
                        </Text>
                      </Card>
                    ))}
                  </Card>
                </Card>
              </Stack>
            </CardBody>
          </Stack>
        </Card>
      </Flex>
    </>
  );
};

export default AgainListCard;
