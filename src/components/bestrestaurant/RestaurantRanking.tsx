import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EmptyHeartIcon from "../../assets/emptyheart.png";
import HeartIcon from "../../assets/heart.png";
import { Store } from "../../models/Store";
import axios from "axios";
import HorizontalLine from "./HorizontalLine";
import { LoginAlert } from "../LoginAlert";
const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  // &:hover {
  //   background-color: #0000004d;
  // }
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

const SubKeywordContainer = styled.div`
  padding-top: 10px;
  width: 100%;
`;

const SubKeyword = styled.span`
  color: orange;
  padding-right: 10px;
`;

const ImageContainer = styled.div`
  float: left;
  padding: 3px 10px 0px 0px;
`;

const ContentImage = styled.img`
  height: 18px;
  vertical-align: middle;
`;

const HeartButtonContainer = styled.div`
  width: 20%;
  display: felx;
  justify-content: flex-end;
  -webkit-tap-highlight-color: transparent;
`;

const HeartButton = styled.img`
  height: 2.5rem;
`;

export default function Restaurant({
  store,
  ranking,
}: {
  store: Store;
  ranking: number;
}) {
  const [isClicked, setIsClicked] = useState<boolean>(store.preference);; //사용자가 찜했는지 여부를 받아와 변수 초기화 필요
  useEffect(() => {}, [isClicked]);
  const [isLogIn,setIsLogIn]=useState(false)
  const clickHeart = () => {
    if(localStorage.getItem("Authorization")){
      if (!isClicked) {
        axios
          .post(
            `https://dishcovery.site/api/preference/${store.id}`,
            {},
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("Authorization"),
              },
            }
          )
          .then((res) => {
            if (res.status === 201) {
              setIsClicked(true);
            }
          });
      } else {
        axios
          .delete(`https://dishcovery.site/api/preference/${store.id}`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("Authorization"),
            },
          })
          .then((res) => {
            if (res.status === 200) {
              setIsClicked(false);
            }
          });
      }
    }
    else{
      setIsLogIn(true)
    }
  };

  const getHeartButtonIcon = () => {
    if (isClicked) {
      return HeartIcon;
    }

    return EmptyHeartIcon;
  };

  const getCategory = (category: string): string => {
    let types: string[] = category.split(" > ");

    if (types.length == 2) {
      return types[1];
    }

    if (types[1] == "퓨전요리") {
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

  return (
    <Container>
      <img
        referrerPolicy='no-referrer'
        src={store.mainImage === null ? "/default-image.png" : store.mainImage}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "15em",
          paddingBottom: "10px",
        }}
        onClick={() => showStoreDetail(store.id)}
      />

      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "80%" }} onClick={() => showStoreDetail(store.id)}>
          <NameContainer onClick={() => showStoreDetail(store.id)}>
            <Name>
              {ranking}. {store.storeName}&nbsp;
            </Name>
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

          {store.phone != "" && (
            <Content>
              <ImageContainer>
                <ContentImage src="./phone-icon.png" />
              </ImageContainer>
              <div>{store.phone}</div>
            </Content>
          )}

          <Content>
            <ImageContainer>
              <ContentImage src={EmptyHeartIcon} />
            </ImageContainer>
            <div>{store.preferenceCount}</div>
          </Content>
        </div>

        <HeartButtonContainer>
          <motion.button whileTap={{ scale: 0.9 }}>
            <HeartButton
              src={getHeartButtonIcon()}
              alt="찜하기" 
              onClick={() => clickHeart()}/>
          </motion.button>
        </HeartButtonContainer>
      </div>

      <SubKeywordContainer>
        {store.keywords.map(
          (keyword, index) =>
            index <= 3 && <SubKeyword key={index}>#{keyword}</SubKeyword>
        )}
      </SubKeywordContainer>

      <div style={{ padding: "1rem 0 1.3rem 0" }}>
        <HorizontalLine />
      </div>
      <LoginAlert 
      isLogIn={isLogIn}
      setIsLogIn={setIsLogIn}/>
    </Container>
    
  );
}
