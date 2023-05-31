import { Flex, Spinner, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import Scroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { Store } from "../../models/Store";
import Restaurant from "../kakomap/Restaurant";

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

const RestaurantContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 10px 0 10px;
`;

function MyAgainListTable({ stores }: { stores: Store[] }) {
  const [storeList, setStoreList] = useState<Store[]>([...stores]);
  const pageRef = useRef<number>(2);
  const scrollable = useRef<boolean>(true);

  const getStore = () => {
    axios
      .get(`https://dishcovery.site/api/preference?page=${pageRef.current}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Authorization"),
        },
      })
      .then((response) => {
        pageRef.current = pageRef.current + 1;
        console.log(response.data);
        setStoreList([...storeList, ...response.data.dtoList]);
      });
  };

  const fetchData = () => {
    setTimeout(() => {
      getStore();
    }, 2000);
  };

  return (
    <>
      <Flex
        maxW="100%"
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        alignItems="center"
      >
        <Stack maxW="100%">
          <ScrollingWrapper></ScrollingWrapper>

          <RestaurantContainer>
            <Scroll
              dataLength={storeList.length} //반복되는 컴포넌트 개수
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
            >
              {storeList.map((store, index) => (
                <Restaurant
                  key={`${store.id}-${index}`}
                  {...stores[index]}
                  store={store}
                />
              ))}
            </Scroll>
          </RestaurantContainer>
        </Stack>
      </Flex>
    </>
  );
}

export default MyAgainListTable;
