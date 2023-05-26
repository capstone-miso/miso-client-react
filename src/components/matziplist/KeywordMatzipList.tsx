import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import "./ImageWithText.css";

function KeywordMatzipList() {
  interface KeywordType {
    id: number;
    type: string;
    image: string;
  }

  const keywordButton: KeywordType[] = [
    { id: 0, type: "#가격대", image: "https://ifh.cc/g/8p8xlh.jpg" },
    { id: 1, type: "#계절별", image: "https://ifh.cc/g/rGhZLW.jpg" },
    { id: 2, type: "#시간대", image: "https://ifh.cc/g/BTDtGn.jpg" },
    { id: 3, type: "#방문자", image: "https://ifh.cc/g/B9G4KN.jpg" },
  ];

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
            <div key={KeywordType.id}>
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
                  <h1>{KeywordType.type}</h1>
                </div>
              </div>
            </div>
          ))}
        </Stack>
      </Flex>
      <Stack mb="60px" />
    </>
  );
}

export default KeywordMatzipList;
