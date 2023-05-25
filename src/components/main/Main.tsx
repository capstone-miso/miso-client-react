import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import DishCovery from "../../assets/DishCovery.png";
import { Colors } from "../../constants/theme";
import KakaoButton from "./KakaoButton";

function Main() {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate("/test");
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
        <Image mt="230px" w="480px" src={DishCovery} alt="로고" />
        <KakaoButton />
        <Text
          mt="50px"
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
