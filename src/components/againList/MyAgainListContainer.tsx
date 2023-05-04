import { Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import MyAgainListTable from "./MyAgainListTable";

function MyAgainListContainer() {
  return (
    <>
      <Header title="내가 또갈집" />
      <Stack maxW="390px" mt="85px">
        <MyAgainListTable />
      </Stack>
    </>
  );
}

export default MyAgainListContainer;
