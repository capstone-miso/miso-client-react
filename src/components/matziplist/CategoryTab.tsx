import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import AllMatzipList from "./AllMatzipList";
import FoodMatzipList from "./FoodMatzipList";
import KeywordMatzipList from "./KeywordMatzipList";

export default function CategoryTab() {
  return (
    <>
      <Flex
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        alignItems="center"
      >
        <Tabs w="390px">
          <Header title="맛집리스트" />
          <TabList
            bg="white"
            mt="20"
            w="390px"
            h="50px"
            position="fixed"
            zIndex="9999"
          >
            <Tab color="orange.300" w="130px">
              전체
            </Tab>
            <Tab color="orange.300" w="130px">
              음식별
            </Tab>
            <Tab color="orange.300" w="130px">
              키워드별
            </Tab>
          </TabList>
          <TabPanels mt="20">
            <TabPanel>
              <AllMatzipList />
            </TabPanel>
            <TabPanel>
              <FoodMatzipList />
            </TabPanel>
            <TabPanel>
              <KeywordMatzipList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
