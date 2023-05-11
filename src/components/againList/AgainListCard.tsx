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
  interface Again {
    id: number;
    image: string;
    name: string;
  }

  const again: Again[] = [
    { id: 0, image: "https://ifh.cc/g/vcwjFd.jpg", name: "시홍쓰" },
    { id: 1, image: "https://ifh.cc/g/oKLQGh.jpg", name: "대원칼국수" },
    { id: 2, image: "https://ifh.cc/g/8KxBlw.jpg", name: "보승회관" },
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
                    {again.map((Again) => (
                      <Card
                        variant="unstyled"
                        alignItems="center"
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        w="95px"
                        h="115px"
                        mr="1"
                        ml="1"
                        key={Again.id}
                      >
                        <Image
                          w="950px"
                          h="95px"
                          src={Again.image}
                          alt="food"
                          borderRadius="lg"
                        />
                        <Text fontStyle="bold" fontSize="xs">
                          {Again.name}
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
