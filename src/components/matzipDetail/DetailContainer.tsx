import { Flex } from "@chakra-ui/react";
import BasicInformation from "./BasicInformation";
import MatzipMenu from "./Menu";
import MatzipStatistics from "./Statistics";

function MatzipDetailContainer() {
  return (
    <Flex
      justifyContent="center"
      justifyItems="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      pt="30px"
    >
      <BasicInformation />
      <MatzipMenu />
      <MatzipStatistics />
    </Flex>
  );
}

export default MatzipDetailContainer;
