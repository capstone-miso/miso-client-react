import { Heading, Stack,HStack, Box } from "@chakra-ui/react";
import { Store } from "../../models/Store";
import Restaurant from "../kakomap/Restaurant";

const SimilarSlider=({similarStores}:{similarStores:Store[]})=>{
    return(
        <div style={{width:"330px"}}>
            <Heading size="md" mb="2" style={{fontFamily: "Noto_Sans_KR_Bold"}}>
            비슷한 또갈집
            </Heading>
            <div style={{width:"100%",display:"flex",flexDirection:"row",overflowX:"scroll"}}>
            {similarStores.map((store, index) => (
                index < similarStores.length - 1 ?
                (<div style={{width:"330px", margin: "0 20px 0 0"}}>
                    <Restaurant
                        key={`${store.id}`}
                        {...similarStores[index]}
                        store={store}/>
                </div>)
                :
                (<div style={{width:"330px"}}>
                    <Restaurant
                        key={`${store.id}`}
                        {...similarStores[index]}
                        store={store}/>
                </div>)
        ))}
        </div>
        </div>
    )
};
export default SimilarSlider