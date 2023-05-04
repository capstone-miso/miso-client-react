import KakaoMap from '../components/kakomap/KakaoMap'
// import BottomSheet from '@/components/kakomap/bottom-sheet/BottomSheet'
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

  return (
    <>
      <Container>
        <Title>
          맛집 지도
        </Title>
        <MapContainer>
          <KakaoMap />
        </MapContainer>
      </Container>
      
      {/* <BottomSheet /> */}
    </>
  )
}