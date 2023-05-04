import KakaoMap from '../components/kakomap/KakaoMap'
import { useRef } from 'react'
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import { useEffect, useState } from "react"
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const Title = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: x-large;
`

const KakaoMapContainer = styled.div`
  width: 100%;
  height: 90%;
`

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`

export default function RestaurantMap(){
  const sheetRef = useRef<BottomSheetRef>(null)

  const maxHeight = 50
  
  return (
    <>
      {/* <Container>
        <Title>
          맛집 지도
        </Title>
        <MapContainer>
          <KakaoMap />
        </MapContainer>
      </Container> */}
      <Container>
        
      <BottomSheet open ref={sheetRef}
      snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight]}
      style={{background: "red"}}>
        <button
          onClick={() => {
            // Full typing for the arguments available in snapTo, yay!!
            sheetRef.current!.snapTo(({ maxHeight }) => maxHeight)
          }}
        >
          Expand to full height
        </button>
      </BottomSheet>
      <div >도도도</div>

      </Container>
    </>
  )
}