import styled from 'styled-components'
import Restaurant from '../components/kakomap/Restaurant'
import { Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { getStoreRank } from "../services/RankAPI"
import { Store } from "../models/Store"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  `

const BackButton = styled.div`
  height: 5%;
  display: felx;
  align-items: center;
  padding: 10px 0 0 10px;
`

const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: felx;
  justify-content: center;
  align-items: center;
`

const MainTitle = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  display: felx;
  justify-content: center;
  align-items: end;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: orange;
`

const SubTitle = styled.div`
  font-size: 1em;
  display: felx;
  justify-content: center;
  align-items: top;
`

const ScrollingWrapper = styled.div`
  height: 10%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar{
    display:none;
  }
  padding: 0 10px;
  display: felx;
  justify-content: center;
`

const ButtonContainer = styled.div`
  padding: 10px 10px 10px 0;
  display: inline-block;
`

const RestaurantContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 0 10px 0 10px;
`

export default function BestRestaurants(){

  const [clickeButtonIndex, setClickeButtonIndex] = useState<number>(0)
  
  let [stores, setStores] = useState<Store[]>([]);
  let categoryType: string = "가격대";
  let categories: string[] = [];

  const setRankType = () => {
    switch(categoryType){
      case '가격대':
        categories = ["8,000원 이하", "15,000원 이하", "25,000원 이하", "25,000원 이상"]
        break;
      case '계절':
        categories = ["봄", "여름", "가을", "겨울"]
        break;
      case '참석인원':
        categories = ["5명 이하", "10명 이하", "20명 이하", "20명 이상"]
        break;
      default:
        categories = ["아침", "점심", "저녁"]
        break;
    }
  }

  setRankType()
  
  useEffect(() => {
    const test = async () => {
      setStores(await getStoreRank('WINTER', 0, 10))
    }
    test()
  }, [])
  
  return(
    <Container>
      <BackButton>
        <img src="./back-button.png" style={{width: "30px"}}/>
      </BackButton>

      <TitleContainer>
        <div>
          <MainTitle>#{categoryType}</MainTitle>
          <SubTitle>{categoryType}로 찾아보는 맛집</SubTitle>
        </div>
      </TitleContainer>

    <ScrollingWrapper >
      {categories.map((category, index) => (
        <ButtonContainer
          key={index}>
          <Button
            variant='outline'
            borderRadius='3xl'
            _hover={{ bg: 'orange', textColor: 'white', borderColor: 'orange' }}
            bg={index == clickeButtonIndex ? 'orange' : 'white'}
            borderColor={index == clickeButtonIndex ? 'orange' : '#b3b3b3'}
            fontWeight='semibold'
            onClick={() => setClickeButtonIndex(index)}
            textColor={index == clickeButtonIndex ? 'white' : 'black'}>
            {category}
          </Button>
        </ButtonContainer>
      ))}
    </ScrollingWrapper>

      <RestaurantContainer>
        {stores.map((store, index) => (
          <Restaurant
            key={`${store.lat}-${store.lon}`}
            {...stores[index]}
            store={store}/>
        ))}
      </RestaurantContainer>
    </Container>
  )

}