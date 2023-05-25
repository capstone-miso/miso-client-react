import styled from 'styled-components'
import Restaurant from '../components/bestrestaurant/Restaurant'
import { Button } from "@chakra-ui/react"
import { useState, useEffect, useRef } from "react"
import { getStoreRank, getStoreRanking, getNextStoreRanking } from "../services/RankingAPI"
import { Store, StoreRanking } from "../models/Store"
import Scroll from 'react-infinite-scroll-component'

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
  padding: 1rem 1rem 0 1rem;
`

export default function BestRestaurants(){
  const [clickedButtonIndex, setClickedButtonIndex] = useState<number>(0);  //선택한 조회 유형
  const [stores, setStores] = useState<Store[]>([]);

  const pageRef = useRef<number>(1);
  const scrollable = useRef<boolean>(true);

  let nextPage = useRef<string>("");

  const fetchData = () => {
    setTimeout(() => {
      const setStoreRank = async () => {
        const storeRanking: StoreRanking = await getNextStoreRanking(nextPage.current)  //이전 리스트 조회때 받아왔던 다음 페이지 url을 통해 맛집 목록을 가져옴
        
        const storeList: Store[] = storeRanking.dtoList
        nextPage.current = storeRanking.nextPage

        setStores([...stores, ...storeList])

        if (nextPage.current == null) {
          scrollable.current = false;
        }
      }
  
      setStoreRank()

    }, 2000);
  }

  let categoryType: string = "가격대";   //카테고리 페이지에서 넘어온 검색유형
  const categories = useRef<string[]>([]);

  const setRankType = () => {
    switch(categoryType){
      case '가격대':
        categories.current = ["UNDER_COST_8000", "UNDER_COST_15000", "UNDER_COST_25000", "OVER_COST_25000"]
        break;
      case '계절':
        categories.current = ["봄", "여름", "가을", "겨울"]
        break;
      case '참석인원':
        categories.current = ["5명 이하", "10명 이하", "20명 이하", "20명 이상"]
        break;
      default:
        categories.current = ["아침", "점심", "저녁"]
    }
  }

  setRankType()

  useEffect(()  => {  //조회 카테고리 버튼 클릭시 -> 가게 목록을 처음부터 다시 불러옴
    const setStoreRank = async () => {
      let storeList: StoreRanking = await getStoreRanking(categories.current[clickedButtonIndex], pageRef.current, 10)
      setStores(storeList.dtoList)

      nextPage.current = storeList.nextPage   //다음에 불러올 맛집 목록 url
      if (nextPage.current == null) {
        scrollable.current = false;
      }
    }

    setStoreRank()

  }, [clickedButtonIndex])

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
      {categories.current.map((category, index) => (
        <ButtonContainer
          key={index}>
          <Button
            variant='outline'
            borderRadius='3xl'
            _hover={{ bg: 'orange', textColor: 'white', borderColor: 'orange' }}
            bg={index == clickedButtonIndex ? 'orange' : 'white'}
            borderColor={index == clickedButtonIndex ? 'orange' : '#b3b3b3'}
            fontWeight='semibold'
            onClick={() => setClickedButtonIndex(index)}
            textColor={index == clickedButtonIndex ? 'white' : 'black'}>
            {category}
          </Button>
        </ButtonContainer>
      ))}
    </ScrollingWrapper>

      <RestaurantContainer>
        <Scroll
        dataLength={stores.length} //반복되는 컴포넌트 개수
        next={fetchData}          //스크롤이 바닥에 닿은 경우 -> 데이터 추가
        hasMore={scrollable.current}            //추가 데이터 유무
        loader={
          <h4 style={{ 
          textAlign: "center",
          padding: "10px 0 10px 0"}}>
            Loading...
          </h4>}   //로딩 스피너
        endMessage={
            <></>}
        scrollableTarget={RestaurantContainer}
        >
          {stores.map((store, index) => (
            <Restaurant
              key={`${store.id}-${index}`}
              {...stores[index]}
              store={store}
              ranking={index + 1}/>
          ))}
        </Scroll>
      </RestaurantContainer>
    </Container>
  )

}