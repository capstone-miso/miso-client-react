import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import SimilarAgainListTable from "./SimilarAgainListTable";

function SimilarAgainListContainer() {
  return (
    <>
      <Flex direction="column" alignContent="center" alignItems="center">
        <Header title="비슷한 또갈집" />
        <Flex
          justifyContent="center"
          justifyItems="center"
          alignContent="center"
          alignItems="center"
        >
          <Stack maxW="390px" mt="85px">
            <SimilarAgainListTable />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default SimilarAgainListContainer;
