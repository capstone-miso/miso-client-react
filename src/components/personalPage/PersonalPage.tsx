import {
  AlertDialog,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { LoginAlert } from "../LoginAlert";

const PersonalPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogOut, setIsLogOut] = useState(false);
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);
  const logOutCancelRef = React.useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("RefreshToken");
    navigate({
      pathname: "../",
    });
  };

  const [isLogIn,setIsLogIn]=useState(false)
  useEffect(()=>{
    if(!localStorage.getItem("Authorization")){
      setIsLogIn(true)
    }
  },[])

  return (
    <>
      <Flex direction="column">
        <Header title="개인정보" />
        <Flex
          justifyContent="center"
          justifyItems="center"
          alignContent="center"
          alignItems="center"
        >
          <Stack maxW="390px" mt="85px">
            <Flex ml="10px">
              <Image
                boxSize="23px"
                src="https://ifh.cc/g/aS7Aw8.png"
                alt="사람"
                mt="1px"
              />
              <Heading ml="10px" fontSize="md">
                yxxngxix@gmail.com
              </Heading>
            </Flex>
            <Flex direction="column" alignContent="center" alignItems="center">
              <Card
                w="330px"
                p="15px"
                m="10px "
                onClick={() => setIsLogOut(true)}
              >
                <Text>로그아웃</Text>
              </Card>
              <Card w="330px" p="15px" m="10px" onClick={onOpen}>
                <Text>회원탈퇴</Text>
              </Card>
            </Flex>
          </Stack>
        </Flex>
      </Flex>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>정말 탈퇴하시겠습니까?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              취소
            </Button>
            <Button colorScheme="orange" ml={3}>
              확인
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={logOutCancelRef}
        onClose={() => setIsLogOut(false)}
        isOpen={isLogOut}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent zIndex="9999">
          <AlertDialogHeader>로그아웃 하시겠습니까?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogFooter>
            <Button ref={logOutCancelRef} onClick={() => setIsLogOut(false)}>
              취소
            </Button>
            <Button colorScheme="orange" ml={3} onClick={() => logOut()}>
              확인
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <LoginAlert 
      isLogIn={isLogIn}
      setIsLogIn={setIsLogIn}/>
    </>
  );
};

export default PersonalPage;
