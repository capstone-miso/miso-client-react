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
  FormControl,
  FormLabel,
  Heading,
  Image,
  Stack,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";


const PersonalPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogOut,setIsLogOut]=useState(false)
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);
  const logOutCancelRef= React.useRef<HTMLButtonElement | null>(null);
  const navigate=useNavigate()

  const logOut=()=>{
    localStorage.removeItem("Authorization")
    localStorage.removeItem("RefreshToken")
    navigate({
      pathname:"../"
    })
  }

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
              <Card w="330px" p="15px" m="10px">
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    푸시 알림 수신
                  </FormLabel>
                  <Switch ml="160px" id="email-alerts" />
                </FormControl>
              </Card>
              <Card w="330px" p="15px" m="10px " onClick={()=>setIsLogOut(true)}>
                <Text >로그아웃</Text>
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
        <AlertDialogContent zIndex="9999">
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
        onClose={()=>setIsLogOut(false)}
        isOpen={isLogOut}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent zIndex="9999">
          <AlertDialogHeader>로그아웃 하시겠습니까?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogFooter>
            <Button ref={logOutCancelRef} onClick={()=>setIsLogOut(false)}>
              취소
            </Button>
            <Button colorScheme="orange" ml={3} onClick={()=>logOut()}>
              확인
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PersonalPage;
