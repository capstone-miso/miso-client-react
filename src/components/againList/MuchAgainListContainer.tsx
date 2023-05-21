import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import MuchAgainListTable from "./MuchAgainListTable";

function MuchAgainListContainer() {
  return (
    <>
      <Header title="많이 또갈집" />
      <Flex
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        alignItems="center"
      >
        <Stack maxW="390px" mt="85px">
          <MuchAgainListTable />
        </Stack>
      </Flex>
    </>
  );
}

export default MuchAgainListContainer;
