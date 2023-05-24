import { Card, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { storeDetail } from "../../pages/MatzipDetail";
import SimpleImageSlider from "react-simple-image-slider";
import ImageSlider from "./ImageSlider";
// api 정보 반영
function BasicInformation({storeData}:{storeData:storeDetail|null}) {

  const config = {
    responseType: 'blob',
    headers: {
    }
  };
  console.log(storeData?.images)

  return (
    <>
      
      <Stack>
        {/* <SimpleImageSlider
          width="330px"
          height="250px"
          images={storeData?.images? storeData.images:[]}
          //images={images}
          navSize={30}
          autoPlay={true}
          showBullets={true}
          showNavs={true}
        /> */}
        {/* <Image referrerPolicy="no-referrer" src="https://postfiles.pstatic.net/MjAyMzAxMDRfMjcy/MDAxNjcyNzk4MjY3NzYz.4-n7-LZtLvygq06mBhS7s9rHsAaicaeOZLsYLer5_jwg.qj1N8N5vRzee-rHi0yqQizwW4icLYLOLT7g77yHYxJkg.JPEG.nemcon/IMG_5908.JPG?type=w966"
        width="330px"
        height="250px"/> */}
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
            <Heading size="lg">{storeData?.storeName}</Heading>
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
              {storeData?.onInfo.map((info)=>(
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
              {storeData?.offInfo.map((info)=>(
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
