import styled from 'styled-components'
import Restaurant from '../components/bestrestaurant/RestaurantRanking'
import { Button } from "@chakra-ui/react"
import { useState, useEffect, useRef } from "react"
import { getStoreRanking, getNextStoreRanking } from "../services/RankingAPI"
import { Store, StoreRanking, SubKeyword } from "../models/Store"
import Scroll from 'react-infinite-scroll-component'
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

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
  padding: 1rem 1rem 45px 1rem;
`

export default function BestRestaurants(){
  const [clickedButtonIndex, setClickedButtonIndex] = useState<number>(0);  //선택한 조회 유형
  const [stores, setStores] = useState<Store[]>([]);

  const pageRef = useRef<number>(1);
  const scrollable = useRef<boolean>(false);  //페이지 마지막에 도달하는 경우 스크롤 중지

  let nextPage = useRef<string>("");  //다음 페이지(다음 10개의 맛집 리스트)에 대한 url

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

  const { state } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const keyword = useRef<string>(searchParams.get('keyword'))
  const subKeywords = useRef<SubKeyword[]>(state);

  useEffect(()  => {  //조회 카테고리 버튼 클릭시 -> 가게 목록을 처음부터 다시 불러옴
    const setStoreRank = async () => {
      let storeList: StoreRanking = await getStoreRanking(subKeywords.current[clickedButtonIndex].english, pageRef.current, 10)
      setStores(storeList.dtoList)

      console.log(storeList.total)

      if (storeList.total <= 10) {
        scrollable.current = false;
      }
      else {
        scrollable.current = true;
      }

      nextPage.current = storeList.nextPage   //다음에 불러올 맛집 목록 url
    }

    setStoreRank()

  }, [clickedButtonIndex])

  const navigate = useNavigate()
  
  const backToMatzipList = () => {
    navigate(-1)
  }

  return(
    <Container>
      <BackButton
        onClick={backToMatzipList}>
        <img src="./back-button.png" style={{width: "30px"}}/>
      </BackButton>

      <TitleContainer>
        <div>
          <MainTitle>#{keyword.current}</MainTitle>
          <SubTitle>{keyword.current}로 찾아보는 맛집</SubTitle>
        </div>
      </TitleContainer>

      <ScrollingWrapper >
        {subKeywords.current.map((subKeyword, index) => (
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
              {subKeyword.korean}
            </Button>
          </ButtonContainer>
        ))}
      </ScrollingWrapper>

      <RestaurantContainer>
        <Scroll
        dataLength={stores.length}   //반복되는 컴포넌트 개수
        next={fetchData}             //스크롤이 바닥에 닿은 경우 -> 데이터 추가
        hasMore={scrollable.current} //추가 데이터 유무
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