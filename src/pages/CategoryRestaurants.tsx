import styled from "styled-components";
import Restaurant from "../components/bestrestaurant/Restaurant";
import { Button } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { getStoreRanking } from "../services/RankingAPI";
import { Store, StoreRanking } from "../models/Store";
import Scroll from "react-infinite-scroll-component";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const BackButton = styled.div`
  height: 5%;
  display: felx;
  align-items: center;
  padding: 10px 0 0 10px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: felx;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  display: felx;
  justify-content: center;
  align-items: end;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: orange;
`;

const SubTitle = styled.div`
  font-size: 1em;
  display: felx;
  justify-content: center;
  align-items: top;
`;

const ScrollingWrapper = styled.div`
  height: 10%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 0 10px;
  display: felx;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  padding: 10px 10px 10px 0;
  display: inline-block;
`;

const RestaurantContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 10px 0 10px;
`;

export default function CategoryRestaurants({
  categoryType,
}: {
  categoryType: string;
}) {
  const [clickedButtonIndex, setClickedButtonIndex] = useState<number>(0); //선택한 조회 유형
  const [stores, setStores] = useState<Store[]>([]);

  const pageRef = useRef<number>(1);
  const scrollable = useRef<boolean>(true);

  const fetchData = () => {
    if (stores.length >= 50) {
      scrollable.current = false;
      return;
    }

    setTimeout(() => {
      const setStoreRank = async () => {
        // const storeRanking: StoreRank = await getStoreRank('WINTER', pageRef.current, 10)
        // console.log(storeRanking)
        let storeList: Store[] = await getStoreRank(
          "WINTER",
          pageRef.current,
          10
        );
        setStores([...stores, ...storeList]);
      };

      setStoreRank();
    }, 2000);
  };

  useEffect(() => {
    const setStoreRank = async () => {
      let storeList: Store[] = await getStoreRank(
        "WINTER",
        pageRef.current,
        10
      );
      setStores([...stores, ...storeList]);
    };

    setStoreRank();
  }, []);

  return (
    <Container>
      <BackButton>
        <img src="./back-button.png" style={{ width: "30px" }} />
      </BackButton>

      <TitleContainer>
        <div>
          <MainTitle>{categoryType}</MainTitle>
          <SubTitle>{categoryType} 맛집</SubTitle>
        </div>
      </TitleContainer>

      <ScrollingWrapper></ScrollingWrapper>

      <RestaurantContainer>
        <Scroll
          dataLength={stores.length} //반복되는 컴포넌트 개수
          next={fetchData} //스크롤이 바닥에 닿은 경우 -> 데이터 추가
          hasMore={scrollable.current} //추가 데이터 유무
          loader={
            <h4
              style={{
                textAlign: "center",
                padding: "10px 0 10px 0",
              }}
            >
              Loading...
            </h4>
          } //로딩 스피너
          endMessage={
            <h4
              style={{
                textAlign: "center",
                padding: "10px 0 10px 0",
              }}
            >
              End...
            </h4>
          }
          scrollableTarget={RestaurantContainer}
        >
          {stores.map((store, index) => (
            <Restaurant
              key={`${store.id}-${index}`}
              {...stores[index]}
              store={store}
              ranking={index + 1}
            />
          ))}
        </Scroll>
      </RestaurantContainer>
    </Container>
  );
}
