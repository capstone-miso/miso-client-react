import { Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Scroll from "react-infinite-scroll-component";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Restaurant from "../components/kakomap/Restaurant";
import { Store } from "../models/Store";

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
  border-bottom: 2px solid orange;
  margin-bottom: 20px;
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
  margin-top: 10px;
  margin-bottom: 10px;
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

export default function CategoryRestaurants() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryType = searchParams.get("type");
  const [stores, setStores] = useState<Store[]>([]);

  const pageRef = useRef<number>(1);
  const scrollable = useRef<boolean>(true);

  const navigate = useNavigate();
  const onClickBackButton = () => {
    navigate(-1);
  };

  const getStore = () => {
    axios
      .get(
        `https://dishcovery.site/api/store?category=${categoryType}&page=${pageRef.current}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Authorization"),
          },
        }
      )
      .then((response) => {
        pageRef.current = pageRef.current + 1;
        console.log(response.data);
        setStores([...stores, ...response.data.dtoList]);
      });
  };

  const fetchData = () => {
    setTimeout(() => {
      getStore();
    }, 2000);
  };

  useEffect(() => {
    getStore();
  }, [searchParams]);

  return (
    <Container>
      <BackButton>
        <img
          src="./back-button.png"
          style={{ width: "30px" }}
          onClick={onClickBackButton}
        />
      </BackButton>

      <TitleContainer>
        <div>
          <MainTitle>{categoryType}</MainTitle>
          <SubTitle>
            <span style={{ color: "orange", fontWeight: "bold" }}>공무원</span>
            들이 찾는{" "}
            <span style={{ color: "orange", fontWeight: "bold" }}>
              {categoryType}
            </span>{" "}
            맛집
          </SubTitle>
        </div>
      </TitleContainer>

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
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="orange.300"
                size="xl"
              />
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {stores.map((store, index) => (
            <Restaurant
              key={`${store.id}-${index}`}
              {...stores[index]}
              store={store}
            />
          ))}
        </Scroll>
      </RestaurantContainer>
    </Container>
  );
}
