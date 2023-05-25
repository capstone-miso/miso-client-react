import { Flex } from "@chakra-ui/react";
import { Store } from "../../models/Store";
import { storeDetail } from "../../pages/MatzipDetail";
import BasicInformation from "./BasicInformation";
import MatzipMenu from "./Menu";
import SimilarSlider from "./SimilarSlider";
import MatzipStatistics from "./Statistics";

function MatzipDetailContainer({
  storeData,
  similarStores,
}: {
  storeData: storeDetail | null;
  similarStores: Store[];
}) {
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
      {
        similarStores.length==0?
        <></>
        :
        <SimilarSlider similarStores={similarStores}/>
      }
    </Flex>
  );
}

export default MatzipDetailContainer;
