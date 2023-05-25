import { Stack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EmptyHeartIcon from "../../assets/emptyheart.png";
import HeartIcon from "../../assets/heart.png";
import { Store } from "../../models/Store";
import { getStoreList } from "../../services/StoreListApi";
import HorizontalLine from "../bestrestaurant/HorizontalLine";

const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const NameContainer = styled.div`
  padding: 0px 0px 10px 0px;
  display: flex;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
`;

const Content = styled.div`
  width: 100%;
  vertical-align: middle;
  display: inline-block;
`;

const ImageContainer = styled.div`
  float: left;
  padding: 0px 10px 0px 0px;
`;

const ContentImage = styled.img`
  height: 18px;
  vertical-align: middle;
`;

const HeartButtonContainer = styled.div`
  width: 20%;
  display: felx;
  justify-content: flex-end;
`;

const HeartButton = styled.img`
  height: 2.5rem;
`;

const MatzipListContainer = () => {
  const [storeList, setStoreList] = useState<Store[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const pageRef = useRef<number>(1);

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

  useEffect(() => {
    const setStoreList = async () => {
      let storeList: Store[] = await getStoreList(pageRef.current, 10);
      setStores([...stores, ...storeList]);
      console.log("hi!");
      console.log(storeList);
    };

    setStoreList();
  }, []);

  const [clickedMap, setClickedMap] = useState<Map<number, boolean>>(new Map());

  const toggleHeart = (storeId: number) => {
    const newClickedMap = new Map(clickedMap);
    newClickedMap.set(storeId, !newClickedMap.get(storeId));
    setClickedMap(newClickedMap);
  };

  const getHeartButtonIcon = (storeId: number) => {
    return clickedMap.get(storeId) ? HeartIcon : EmptyHeartIcon;
  };

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

  return (
    <>
      {stores.map((store, index) => (
        <Container key={`${store.id}`}>
          <img
            src={
              store.mainImage === null ? "/default-image.png" : store.mainImage
            }
            style={{
              objectFit: "cover",
              width: "100%",
              height: "15em",
              paddingBottom: "10px",
            }}
            onClick={() => showStoreDetail(store.id)}
          />

          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{ width: "80%" }}
              onClick={() => showStoreDetail(store.id)}
            >
              <NameContainer onClick={() => showStoreDetail(store.id)}>
                <Name>{store.storeName}&nbsp;</Name>
              </NameContainer>

              <Content>
                <ImageContainer>
                  <ContentImage src="./home-icon.png" />
                </ImageContainer>
                <div>{getCategory(store.category)}</div>
              </Content>

              <Content>
                <ImageContainer>
                  <ContentImage src="./location-icon.png" />
                </ImageContainer>
                <div>{store.address}</div>
              </Content>

              {store.phone !== "" && (
                <Content>
                  <ImageContainer>
                    <ContentImage src="./phone-icon.png" />
                  </ImageContainer>
                  <div>{store.phone}</div>
                </Content>
              )}
            </div>
            <HeartButtonContainer>
              <HeartButton
                src={getHeartButtonIcon(store.id)}
                alt="찜하기"
                onClick={() => toggleHeart(store.id)}
              />
            </HeartButtonContainer>
          </div>

          <div style={{ padding: "1rem 0 1.3rem 0" }}>
            <HorizontalLine />
          </div>
        </Container>
      ))}
      <Stack mb="45px" />
    </>
  );
};

export default MatzipListContainer;
