import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function FoodMatzipList() {
  interface FoodType {
    id: number;
    type: string;
    content: string;
    emoticon: string;
    image: string;
  }

  const foodButton: FoodType[] = [
    {
      id: 0,
      type: "한식",
      content: "지금 가장 인기있는 한식 맛집!",
      emoticon: "https://ifh.cc/g/vgVXTG.png",
      image: "https://ifh.cc/g/cGyT8Y.jpg",
    },
    {
      id: 1,
      type: "중식",
      content: "지금 가장 인기있는 중식 맛집",
      emoticon: "https://ifh.cc/g/AL8Wta.png",
      image: "https://ifh.cc/g/kBd9bO.jpg",
    },
    {
      id: 2,
      type: "일식",
      content: "지금 가장 인기있는 일식 맛집!",
      emoticon: "https://ifh.cc/g/rqvf1n.png",
      image: "https://ifh.cc/g/PNLQ7J.jpg",
    },
    {
      id: 3,
      type: "양식",
      content: "지금 가장 인기있는 양식 맛집!",
      emoticon: "https://ifh.cc/g/hH7Zld.png",
      image: "https://ifh.cc/g/ct1wsV.jpg",
    },
    {
      id: 4,
      type: "간식",
      content: "지금 가장 인기있는 간식 맛집!",
      emoticon: "https://ifh.cc/g/Otttna.png",
      image: "https://ifh.cc/g/JjAk23.jpg",
    },
    {
      id: 5,
      type: "기타",
      content: "다른 맛집은 또 뭐가 있을까?",
      emoticon: "https://ifh.cc/g/oh7zs2.png",
      image: "https://ifh.cc/g/t2HaNw.jpg",
    },
  ];
  return (
    <>
      {foodButton.map((FoodType) => (
        <Flex
          maxW="100%"
          justifyContent="center"
          justifyItems="center"
          alignContent="center"
          alignItems="center"
          key={FoodType.id}
        >
          <Stack pt="45px" maxW="100%" direction="column">
            <Image
              src={FoodType.image}
              alt="Green double couch with wooden legs"
            />
            <Flex>
              <Image
                mt="10px"
                ml="10px"
                src={FoodType.emoticon}
                alt={FoodType.type}
                w="40px"
                h="40px"
              />
              <Stack ml="10px">
                <Heading size="md" mt="9px" mb="-9px">
                  {FoodType.type}
                </Heading>
                <Text size="xs">{FoodType.content}</Text>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      ))}
    </>
  );
}

export default FoodMatzipList;
