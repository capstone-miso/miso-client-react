import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import AgainListCard from "./AgainListCard";

function AgainListContainer() {
  interface AgainButton {
    id: number;
    title: string;
    content: string;
    url: string;
  }

  const againButtonList: AgainButton[] = [
    {
      id: 0,
      title: "내가 또갈집",
      content: "좋아요 표시한 또갈집 목록을 확인해보세요!",
      url: "/myAgainList",
    },
    {
      id: 1,
      title: "많이 또갈집",
      content: "가장 인기있는 또갈집 목록을 확인해보세요!",
      url: "/muchAgainList",
    },
    {
      id: 2,
      title: "비슷한 또갈집",
      content: "내가 또갈집과 비슷한 카테고리의 또갈집을 추천해드려요!",
      url: "/similarAgainList",
    },
  ];

  return (
    <>
      <Header title="또갈집" />
      <Flex
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        alignItems="center"
      >
        <Stack maxW="390px" mt="85px">
          {againButtonList.map((AgainButton) => (
            <AgainListCard
              key={AgainButton.id}
              title={AgainButton.title}
              content={AgainButton.content}
              url={AgainButton.url}
            />
          ))}
        </Stack>
      </Flex>
    </>
  );
}

export default AgainListContainer;
