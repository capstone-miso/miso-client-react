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
import { useNavigate } from "react-router-dom";
import { Store } from "../../models/Store";

interface Again {
  id: number;
  image: string;
  name: string;
}

type CardProps = {
  title: string;
  content: string;
  url: string;
  again: Again[];
  stores: Store[];
};

const AgainListCard = ({ title, content, url, again, stores }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = (stores: Store[]) => {
    navigate(url, {
      state: { stores: stores },
    });
  };

  return (
    <>
      <Flex
        // w="390px"
        maxW="100%"
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        alignItems="center"
      >
        <Card
          variant="unstyled"
          alignItems="left"
          alignSelf="center"
          display="left"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          // w="390px"
          maxW="100%"
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
                    onClick={() => handleClick(stores)}
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
