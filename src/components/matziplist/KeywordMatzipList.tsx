import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import "./ImageWithText.css";

function KeywordMatzipList() {
  interface KeywordType {
    id: number;
    type: string;
  }

  const keywordButton: KeywordType[] = [
    { id: 0, type: "#점심에많이가는" },
    { id: 1, type: "#저녁에많이가는" },
    { id: 2, type: "#가성비맛집" },
    { id: 3, type: "#회식은이곳에서" },
    { id: 4, type: "#봄에많이찾는" },
    { id: 5, type: "#여름에많이찾는" },
    { id: 6, type: "#가을에많이찾는" },
    { id: 7, type: "#겨울에많이찾는" },
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
              <div className="banner">
                <div className="banner-txt">
                  <h1>{KeywordType.type}</h1>
                </div>
              </div>
            </div>
          ))}
        </Stack>
      </Flex>
    </>
  );
}

export default KeywordMatzipList;
