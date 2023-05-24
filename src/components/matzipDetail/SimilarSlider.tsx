import { Stack } from "@chakra-ui/react";
import { Store } from "../kakomap/KakaoMap";
import Restaurant from "../kakomap/Restaurant";

const SimilarSlider=({similarStores}:{similarStores:Store[]})=>{
    console.log(similarStores)
    return(
        <Stack>
            <Stack
        h="300px"
        width="330px"
        overflow="auto">
            {similarStores.map((store, index) => (
          <Restaurant
            key={`${store.id}`}
            {...similarStores[index]}
            store={store}/>
        ))}
        </Stack>
        </Stack>
    )
};
export default SimilarSlider