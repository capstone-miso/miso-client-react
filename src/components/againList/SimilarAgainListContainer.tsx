import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import SimilarAgainListTable from "./SimilarAgainListTable";
import { Store } from "../../models/Store";
function SimilarAgainListContainer({stores}:{stores:Store[]}) {
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
            <SimilarAgainListTable stores={stores} />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default SimilarAgainListContainer;
