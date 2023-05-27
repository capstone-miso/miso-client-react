import { Card, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { storeDetail } from "../../pages/MatzipDetail";
import ImageSlider from "./ImageSlider";
import styled from 'styled-components'
import axios from "axios";
import { useState } from "react";
import HeartIcon from "../../assets/heart.png"
import EmptyHeartIcon from "../../assets/emptyheart.png"
// api 정보 반영

const HeartButtonContainer = styled.div`
  width: 8%;
  display: felx;
  justify-content: flex-end;
  `

  const HeartButton = styled.img`
  height: 20%;
  `
function BasicInformation({ storeData }: { storeData: storeDetail | null }) {

  const [isClicked, setIsClicked] = useState<boolean|undefined>(storeData?.preference)
  useEffect(()=>{
    if(storeData?.preference===true){
      setIsClicked(true)
    }
  },[storeData?.preference])
  const getHeartButtonIcon = () => {
    if (isClicked){
      return HeartIcon  
    }
    
    return EmptyHeartIcon
  }

  const clickHeart=()=>{
    if(!isClicked){
      axios.post(`https://dishcovery.site/api/preference/${storeData?.id}`,
      {

      },
      {
        headers:{
          Authorization: "Bearer " + localStorage.getItem("Authorization")
        }
      }).then((res)=>{
        if(res.status===201){

          setIsClicked(true)
        }
      })
    }
    else{
      axios.delete(`https://dishcovery.site/api/preference/${storeData?.id}`,{
        headers:{
          Authorization: "Bearer " + localStorage.getItem("Authorization")
      }
      }).then((res)=>{
        if(res.status===200){

          setIsClicked(false)
        }
      })
    }
  }

  return (
    <>
      <Stack>
        <ImageSlider slides={storeData?.images} />
        <Card
          variant="unstyled"
          alignContent="left"
          alignItems="left"
          display="left"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          w="330px"
        >
          
          <Stack pl="4" mt="6" mb="6" spacing="1">
            <HStack>
            <Heading size="lg">{storeData?.storeName}</Heading>
            
            <HeartButtonContainer>  
          <HeartButton 
            src={getHeartButtonIcon()}
            alt="찜하기" 
            onClick={() =>clickHeart()}/>
        </HeartButtonContainer>

        </HStack>

            <Text color="gray.600" fontSize="xs">
              {storeData?.category}
            </Text>
            <Stack direction="row">
              <Image
                src="https://ifh.cc/g/1NbN0R.png"
                alt="위치"
                mt="0.5"
                boxSize="15px"
              />
              <Text fontSize="sm">{storeData?.address}</Text>
            </Stack>
            <Stack direction="row">
              <Image
                boxSize="15px"
                src="https://ifh.cc/g/ZtPNRC.png"
                alt="전화"
                mt="0.5"
              />
              <Text fontSize="sm">{storeData?.phone}</Text>
            </Stack>
            <Stack direction="row">
              <Image
                boxSize="15px"
                src="https://ifh.cc/g/jOK0yJ.png"
                alt="운영시간"
                mt="0.5"
              />
              <Stack>
                {storeData?.onInfo.map((info) => (
                  <Text fontSize="sm">{info}</Text>
                ))}
              </Stack>
            </Stack>
            <Stack direction="row">
              <Image
                boxSize="20px"
                src="https://cdn-icons-png.flaticon.com/512/1234/1234037.png"
                alt="휴무날"
                mt="0.5"
              />
              <Stack>
                {storeData?.offInfo.map((info) => (
                  <Text fontSize="sm">{info}</Text>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </>
  );
}

export default BasicInformation;
