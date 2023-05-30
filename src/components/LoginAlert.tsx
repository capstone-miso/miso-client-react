import {
    AlertDialog,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button
  } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
export const LoginAlert=({isLogIn,setIsLogIn}:{isLogIn:boolean,setIsLogIn:Function})=>{
    const logOutCancelRef = React.useRef<HTMLButtonElement | null>(null);
    const navigate=useNavigate();
    return(
        <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={logOutCancelRef}
        onClose={() => setIsLogIn(false)}
        isOpen={isLogIn}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent zIndex="9999">
          <AlertDialogHeader>로그인시 가능한 기능입니다!</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogFooter>
            <Button colorScheme="orange" ml={3} onClick={() => navigate("../")}>
              로그인 하러 가기
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}