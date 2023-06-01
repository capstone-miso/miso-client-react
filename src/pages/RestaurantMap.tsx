import { Image } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Sheet from "react-modal-sheet";
import styled from "styled-components";
import KakaoMap from "../components/kakomap/KakaoMap";
import RestaurantList from "../components/kakomap/RestaurantList";
import { Store } from "../models/Store";
import Header from "../components/Header"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-family: "Noto_Sans_KR_Bold";
  z-index:100;
`;

const Rectangle = styled.div`
  width: 7px;
  height: 1em;
  margin: 0px 5px 0px 0px;
  background: orange;
  margin: 0 5px 0 20px;
`

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function RestaurantMap() {
  const [isOpen, setOpen] = useState(true);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let tempStores: Store[] = [];
  const [stores, setStoreList] = useState<Store[]>(tempStores);
  const [currentAddress, setCurrentAddress] = useState<string>("");
  const currentSnapPoint = useRef<number>(1);
  const [sortType,setSortType]=useState<string>("distance")

  const getSnapPoints = (): any => {
    let snapPoints = [];
    snapPoints.push(windowSize.current[1] * 0.9);
    snapPoints.push(windowSize.current[1] * 0.8);
    snapPoints.push(windowSize.current[1] * 0.2);

    return snapPoints;
  };

  const snapPoints = getSnapPoints();

  const showMapzipList = () => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <Container>
      <Title onClick={showMapzipList}>
        <Header title={"맛집 지도"}/>
      </Title>

      <MapContainer onClick={showMapzipList}>
        <KakaoMap
          stores={stores}
          setStoreList={setStoreList}
          setCurrentAddress={setCurrentAddress}
          sortType={sortType}
        />
      </MapContainer>

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={ snapPoints }
        initialSnap={ snapPoints.length -1}
        onSnap={snapIndex =>
            console.log('> Current snap point index:', snapIndex)
          }
        style={{ marginBottom: "45px",zIndex:10 }}>
          <Sheet.Container>
            <Sheet.Header/>
            <Sheet.Content 
              disableDrag={true}>
              <RestaurantList
              stores={stores}
              currentAddress={currentAddress}
              setSortType={setSortType} />
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop
            style={{background: "transparent"}} />

        <Sheet.Backdrop style={{ background: "transparent" }} />
      </Sheet>
    </Container>
  );
}
