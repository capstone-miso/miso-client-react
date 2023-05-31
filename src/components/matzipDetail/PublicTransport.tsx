import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { storeDetail } from "../../pages/MatzipDetail";
import { StaticMap, Map, MapMarker } from "react-kakao-maps-sdk";

interface Location{
  lat: number;
  lng: number;
}

// api 정보 반영
function MatzipMenu({ storeData }: { storeData: storeDetail | null }) {
  const [storeLocation, setStoreLocation] = useState<Location>({lat: 37.568338118683, lng: 126.97547642083})

  useEffect(() => {
    const lat = storeData?.lat || 37.568338118683
    const lon = storeData?.lon || 126.97547642083

    setStoreLocation({lat: lat, lng: lon})
  }, [storeData])

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="330px"
      mt="25px"
    >
      <Stack>
        <CardBody>
          <Heading size="md" mb="4">
            교통편
          </Heading>
          <Stack>
            <Stack direction="row">
            
            <Map // 지도를 표시할 Container
              center={{
                // 지도의 중심좌표
                lat: storeLocation.lat,
                lng: storeLocation.lng
              }}
              style={{
                // 지도의 크기
                width: "100%",
                height: "200px",
              }}
              level={3} // 지도의 확대 레벨
            >
              <MapMarker
                position={{ 
                  lat: storeLocation.lat,
                  lng: storeLocation.lng
                }}
                image={{
                  src: "./store-marker.png", 
                  size: {
                    width: 40,
                    height: 40,
                  }, 
                }}/>
              </Map>
            </Stack>
            <Stack direction="row">
              <Image
                boxSize="15px"
                src="https://ifh.cc/g/00oJP1.png"
                alt="지하철"
                mt="0.5"
              />
              {storeData?.storeInfo.findway.subway !== null && (
                <Text mt="8px" mb="-2px" fontSize="sm">
                  {storeData?.storeInfo.findway.subway.stationName !== null
                    ? storeData?.storeInfo.findway.subway.stationName
                    : ""}{" "}
                  {storeData?.storeInfo.findway.subway.exitNum}번 출구{" "}
                  {storeData?.storeInfo.findway.subway.distance}m
                </Text>
              )}
            </Stack>
            <Stack direction="row">
              <Image
                boxSize="15px"
                src="https://ifh.cc/g/NKzRnz.png"
                alt="버스"
                mt="0.5"
              />
              {storeData?.storeInfo.findway.bus !== null && (
                <Text mt="8px" mb="-2px" fontSize="sm">
                  {storeData?.storeInfo.findway.bus.busStopName} 정류장{" "}
                  {storeData?.storeInfo.findway.bus.distance}m
                  {storeData?.storeInfo.findway.bus.busNames.map((info) => (
                    <Text fontSize="sm">{info} </Text>
                  ))}
                </Text>
              )}
            </Stack>
            <Stack direction="row">
              <Image
                boxSize="15px"
                src="https://cdn-icons-png.flaticon.com/512/706/706401.png"
                alt="주차장"
                mt="0.5"
              />
              {storeData?.storeInfo.findway.parkingZone !== null && (
                <Text mt="8px" mb="-2px" fontSize="sm">
                  {storeData?.storeInfo.findway.parkingZone.parkingName}
                  <Text>{storeData?.storeInfo.findway.parkingZone.address}</Text>
                </Text>
              )}
            </Stack>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default MatzipMenu;
