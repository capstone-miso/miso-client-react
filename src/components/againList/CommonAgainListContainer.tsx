import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { Store } from "../../models/Store";
import AgainListHeader from "../AgainListHeader";

type CommonAgainListContainerProps = {
  stores: Store[];
  title: string;
  Component: React.ComponentType<any>;
};

function CommonAgainListContainer({
  stores,
  title,
  Component,
}: CommonAgainListContainerProps) {
  return (
    <>
      <Flex direction="column" alignContent="center" alignItems="center">
        <AgainListHeader title={title} />
        <Flex
          justifyContent="center"
          justifyItems="center"
          alignContent="center"
          alignItems="center"
        >
          <Stack maxW="390px" mt="85px">
            <Component stores={stores} />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default CommonAgainListContainer;
