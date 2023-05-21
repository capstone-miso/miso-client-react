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
    again: Again[];
  }

  interface Again {
    id: number;
    image: string;
    name: string;
  }

  const againButtonList: AgainButton[] = [
    {
      id: 0,
      title: "내가 또갈집",
      content: "좋아요 표시한 또갈집 목록을 확인해보세요!",
      url: "/myAgainList",
      again: [
        { id: 0, image: "https://ifh.cc/g/vcwjFd.jpg", name: "시홍쓰" },
        { id: 1, image: "https://ifh.cc/g/oKLQGh.jpg", name: "대원칼국수" },
        { id: 2, image: "https://ifh.cc/g/8KxBlw.jpg", name: "보승회관" },
      ],
    },
    {
      id: 1,
      title: "많이 또갈집",
      content: "가장 인기있는 또갈집 목록을 확인해보세요!",
      url: "/muchAgainList",
      again: [
        { id: 0, image: "https://ifh.cc/g/vcwjFd.jpg", name: "시홍쓰" },
        { id: 1, image: "https://ifh.cc/g/oKLQGh.jpg", name: "대원칼국수2" },
        { id: 2, image: "https://ifh.cc/g/8KxBlw.jpg", name: "보승회관" },
      ],
    },
    {
      id: 2,
      title: "비슷한 또갈집",
      content: "내가 또갈집과 비슷한 카테고리의 또갈집을 추천해드려요!",
      url: "/similarAgainList",
      again: [
        { id: 0, image: "https://ifh.cc/g/vcwjFd.jpg", name: "시홍쓰" },
        { id: 1, image: "https://ifh.cc/g/oKLQGh.jpg", name: "대원칼국수3" },
        { id: 2, image: "https://ifh.cc/g/8KxBlw.jpg", name: "보승회관" },
      ],
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
              again={AgainButton.again}
            />
          ))}
        </Stack>
      </Flex>
    </>
  );
}

export default AgainListContainer;
