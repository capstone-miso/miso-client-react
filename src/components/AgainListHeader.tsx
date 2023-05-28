import { Card, CardHeader, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../assets/back-button.png";

const MainTitle = styled.div`
  margin-top: -65px;
  margin-left: -20px;
  font-size: 1.5em;
  font-weight: 700;
  justify-content: center;
  align-items: end;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: orange;
`;

type HeaderProps = {
  title: string;
};

const AgainListHeader = ({ title }: HeaderProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <Card
      variant="unstyled"
      // bgColor="blue"
      w="390px"
      h="85px"
      zIndex="1"
      display="left"
      direction="row"
      position="fixed"
    >
      <CardHeader>
        <Image
          mt="30px"
          ml="10px"
          boxSize="20px"
          src={BackButton}
          alt="뒤로가기"
          onClick={handleGoBack}
        />
        <Flex
          flex="1"
          alignItems="center"
          justifyItems="center"
          justifyContent="center"
          flexWrap="wrap"
          mt="25px"
          ml="10px"
        >
          <MainTitle>{title}</MainTitle>
        </Flex>
      </CardHeader>
    </Card>
  );
};

export default AgainListHeader;
