import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import DishCovery from "../../assets/DishCovery.png";
import { Colors } from "../../constants/theme";
import KakaoButton from "./KakaoButton";

function Main() {
  const navigate = useNavigate();

  const navigateToPage = () => {
    localStorage.removeItem("Authorization")
    navigate("/restaurant-map");
  };

  return (
    <Flex direction="column" alignContent="center" alignItems="center">
      <Flex
        w="390px"
        h="844px"
        direction="column"
        justify="center"
        align="center"
        background={Colors.orange[300]}
      >
        <Image mt="220px" w="480px" src={DishCovery} alt="로고" />
        <Text mt="5px" as="b" fontSize="md" color="white">
          공무원 업무 추진비 내역 기반
        </Text>
        <Text mt="-3px" as="b" fontSize="md" color="white">
          :: 로컬 맛집 추천 서비스 ::
        </Text>
        <KakaoButton />
        <Text
          mt="30px"
          as="b"
          fontSize="md"
          color="white"
          onClick={navigateToPage}
        >
          건너뛰기
        </Text>
      </Flex>
    </Flex>
  );
}

export default Main;
