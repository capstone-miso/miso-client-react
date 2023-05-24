import { Flex } from "@chakra-ui/react";
import BasicInformation from "./BasicInformation";
import MatzipMenu from "./Menu";
import MatzipStatistics from "./Statistics";
import { useState } from "react";
import axios, { AxiosDefaults, AxiosResponse } from "axios";
import { storeDetail } from "../../pages/MatzipDetail";
import { Store } from "../kakomap/KakaoMap";
import SimilarSlider from "./SimilarSlider";


 function MatzipDetailContainer({storeData,similarStores}:{storeData:storeDetail|null,similarStores:Store[]}) {
  
  return (
    <Flex
      justifyContent="center"
      justifyItems="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      pt="30px"
    >
      <BasicInformation storeData={storeData}/>
      <MatzipMenu storeData={storeData}/>
      <MatzipStatistics storeData={storeData}/>
      <SimilarSlider similarStores={similarStores}/>
    </Flex>
  );
}

export default MatzipDetailContainer;
