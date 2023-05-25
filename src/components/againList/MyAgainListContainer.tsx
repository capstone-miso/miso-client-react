import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import MyAgainListTable from "./MyAgainListTable";

function MyAgainListContainer() {
  return (
    <>
      <Flex direction="column" alignContent="center" alignItems="center">
        <Header title="내가 또갈집" />
        <Flex
          justifyContent="center"
          justifyItems="center"
          alignContent="center"
          alignItems="center"
        >
          <Stack maxW="390px" mt="85px">
            <MyAgainListTable />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default MyAgainListContainer;
