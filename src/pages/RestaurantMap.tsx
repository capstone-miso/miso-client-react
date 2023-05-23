import KakaoMap from '../components/kakomap/KakaoMap'
import { useEffect, useState, useRef } from "react"
import Sheet from 'react-modal-sheet';
import { Store } from "../models/Store";
import RestaurantList from '../components/kakomap/RestaurantList';
import { Image } from "@chakra-ui/react";
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const Title = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: x-large;
`

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`

export default function RestaurantMap(){
  const [isOpen, setOpen] = useState(true);
  const windowSize = useRef([window.innerWidth, window.innerHeight])
  let tempStores:Store[]=[]
  const [stores,setStoreList]=useState<Store[]>(tempStores);
  const currentSnapPoint = useRef<number>(1)

  const getSnapPoints = (): any => {
    let snapPoints = []
    snapPoints.push(windowSize.current[1]*0.9)
    snapPoints.push(windowSize.current[1]*0.8)
    snapPoints.push(windowSize.current[1]*0.2)

    return snapPoints
  }

  const snapPoints = getSnapPoints()

  const showMapzipList = () => {
    if (isOpen){
      setOpen(false)
    }
    else{
      setOpen(true)
    }
  }

  return (
    <Container>

      <Title
        onClick={showMapzipList}>
          <Image
            w="50px"
            h="30px"
            src="https://ifh.cc/g/Q55dgG.png"
            alt="선"
          />
        맛집 지도
      </Title>

      <MapContainer
        onClick={showMapzipList}>
        <KakaoMap 
        stores={stores}
        setStoreList={setStoreList}
        />
      </MapContainer>

      <Sheet 
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={ snapPoints }
        initialSnap={ snapPoints.length -1}
        onSnap={snapIndex =>
            console.log('> Current snap point index:', snapIndex)
          }>
          <Sheet.Container>
            <Sheet.Header/>
            <Sheet.Content>
              <RestaurantList
              stores={stores} />
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop
            style={{background: "transparent"}} />
        </Sheet>

    </Container>
  )
}