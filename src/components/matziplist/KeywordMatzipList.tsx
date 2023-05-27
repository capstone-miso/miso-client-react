import { Flex, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { SubKeyword } from "../../models/Store"
import "./ImageWithText.css";

function KeywordMatzipList() {
  interface KeywordType {
    id: number;
    type: string;
    image: string;
  }

  const keywordButton: KeywordType[] = [
    { id: 0, type: "가격대", image: "https://ifh.cc/g/8p8xlh.jpg" },
    { id: 1, type: "계절별", image: "https://ifh.cc/g/rGhZLW.jpg" },
    { id: 2, type: "시간대", image: "https://ifh.cc/g/BTDtGn.jpg" },
    { id: 3, type: "방문자", image: "https://ifh.cc/g/B9G4KN.jpg" },
  ];

  const getSubKeyword = (buttonId: number): SubKeyword[] => {
    switch(buttonId){
      case 0:
        return [{korean: "8,000원 이하", english: "UNDER_COST_8000"}, {korean: "15,000원 이하", english: "UNDER_COST_15000"},
                {korean: "25,000원 이하", english: "UNDER_COST_25000"}, {korean: "25,000원 이상", english: "OVER_COST_25000"}]
      case 1:
        return [{korean: "봄", english: "SPRING"}, {korean: "여름", english: "SUMMER"},
                {korean: "가을", english: "FALL"}, {korean: "겨울", english: "WINTER"}, {korean: "사계절", english: "FOUR_SEASONS"}]
      case 2:
        return [{korean: "아침", english: "BREAKFAST"}, {korean: "점심", english: "LUNCH"},
                {korean: "저녁", english: "DINNER"}]
      default:
        return [{korean: "5인 이하", english: "UNDER_PARTICIPANTS_5"}, {korean: "10인 이하", english: "UNDER_PARTICIPANTS_10"},
                {korean: "20인 이하", english: "UNDER_PARTICIPANTS_20"}, {korean: "20인 이상", english: "OVER_PARTICIPANTS_20"}]
    }
  }
  
  const navigate = useNavigate()

  const showRestaurantRanking = (buttonId: number) =>{
    const subKeywords: SubKeyword[] = getSubKeyword(buttonId)

    navigate({
      pathname: "../best-restaurants",
      search: `?keyword=${keywordButton[buttonId].type}`,
    },{
      state: subKeywords
    })
  }

  return (
    <>
      <Flex
        maxW="100%"
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        alignItems="center"
      >
        <Stack
          pt="45px"
          maxW="100%"
          spacing={4}
          direction="column"
          align="center"
        >
          {keywordButton.map((KeywordType) => (
            <div 
              key={KeywordType.id}
              onClick={() => showRestaurantRanking(KeywordType.id)}>
              <div
                style={{
                  justifySelf: "center",
                  width: "390px",
                  height: "200px",
                  backgroundImage: `url(${KeywordType.image})`,
                  backgroundSize: "cover",
                  position: "relative",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  marginTop: "10px",
                  marginBottom: "10px",
                  maxWidth: "100%",
                  zIndex: "0",
                }}
              >
                <div className="banner-txt">
                  <h1>#{KeywordType.type}</h1>
                </div>
              </div>
            </div>
          ))}
        </Stack>
      </Flex>
      <Stack mb="45px" />
    </>
  );
}

export default KeywordMatzipList;