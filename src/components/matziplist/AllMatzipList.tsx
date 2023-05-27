import { Spinner, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Scroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Restaurant from "../../components/kakomap/Restaurant";
import { Store } from "../../models/Store";

const RestaurantContainer = styled.div`
  width: 100%;
  height: 60%;
  margin-left: 15px;
  margin-right: 15px;
`;

const MatzipListContainer = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const pageRef = useRef<number>(1);

  const [isClicked, setIsClicked] = useState<boolean>(false); //사용자가 찜했는지 여부를 받아와 변수 초기화 필요
  useEffect(() => {}, [isClicked]);

  const navigate = useNavigate();
  const showStoreDetail = (storeId: number) => {
    navigate(
      {
        pathname: "../matzipDetail",
        search: `?storeId=${storeId}`,
      },
      {
        state: storeId,
      }
    );
    navigate(0);
  };

  // useEffect(() => {
  //   const setStoreList = async () => {
  //     let storeList: Store[] = await getStoreList(pageRef.current, 10);
  //     setStores([...stores, ...storeList]);
  //     console.log("hi!");
  //     console.log(storeList);
  //   };

  //   setStoreList();
  // }, []);

  const [clickedMap, setClickedMap] = useState<Map<number, boolean>>(new Map());

  const getCategory = (category: string): string => {
    let types: string[] = category.split(" > ");

    if (types.length === 2) {
      return types[1];
    }

    if (types[1] === "퓨전요리") {
      if (category.includes("한식")) {
        return "한식";
      } else {
        return "일식";
      }
    }

    if (category.includes("닭강정")) {
      return "양식";
    }

    switch (types[1]) {
      case "간식":
      case "패스트푸드":
        return types[2];
      case "치킨":
        return "양식";
      case "아시아음식":
        return "아시아음식(" + types[2] + ")";
      case "뷔페":
        return "한식";
      case "술집":
        return "주점";
    }

    return types[1];
  };

  const scrollable = useRef<boolean>(true);

  const getNextStore = () => {
    axios
      .get(`https://dishcovery.site/api/store?page=${pageRef.current}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("Authorization"),
        },
      })
      .then((response) => {
        pageRef.current = pageRef.current + 1;
        console.log(response.data);
        setStores([...stores, ...response.data.dtoList]);
      });
  };

  const fetchData = () => {
    setTimeout(() => {
      getNextStore();
    }, 2000);
  };

  useEffect(() => {
    getNextStore();
  }, []);

  return (
    <>
      <Stack mt="35px"></Stack>
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
      <Stack mb="45px" />
    </>
  );
};

export default MatzipListContainer;
