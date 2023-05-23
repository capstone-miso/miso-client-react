import styled from 'styled-components'
import { Store } from '../components/kakomap/KakaoMap'
import Restaurant from '../components/kakomap/Restaurant'
import { Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { getApiData } from "../services/RankAPI"

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

  let stores: Store[] = 
    [
      // {
      //   name: "보승회관",
      //   lat: 37.5539147125513,
      //   lon: 127.077390878728,
      //   address: "서울 광진구 능동로 267",
      //   phone: "070-5030-5424",
      //   sector: "음식점"
      // },
      // {
      //   name: "카레당",
      //   lat: 37.55265374492164,
      //   lon: 127.07673319398943,
      //   address: "서울 광진구 능동로 251",
      //   phone: "02-464-4022",
      //   sector: "음식점"
      // },
      // {
      //   name: "비밀 군자점",
      //   lat: 37.5538530201804,
      //   lon: 127.078035889182,
      //   address: "서울 광진구 능동로 268",
      //   phone: "010-2480-3330",
      //   sector: "제과,베이커리"
      // },
      // {
      //   name: "이이요",
      //   lat: 37.555185919524014,
      //   lon: 127.07890418373962,
      //   address: "서울 광진구 능동로32길 6",
      //   phone: "02-3437-2225",
      //   sector: "음식점"
      // },
      // {
      //   name: "한촌설렁탕 군자점",
      //   lat: 37.5529383510837,
      //   lon: 127.076900976702,
      //   address: "서울 광진구 군자동 242",
      //   phone: "02-468-4200",
      //   sector: "음식점"
      // },
      // {
      //   name: "소사면옥",
      //   lat: 37.55400798942731,
      //   lon: 127.07803944590441,
      //   address: "서울 광진구 능동 283-7",
      //   phone: "02-447-0904",
      //   sector: "음식점"
      // },
      // {
      //   name: "군자돈까스",
      //   lat: 37.55450602563902,
      //   lon: 127.07836476861877,
      //   address: "서울 광진구 능동 282-6",
      //   phone: "02-6402-0010",
      //   sector: "음식점"
      // }
    ]

  const [clickeButtonIndex, setClickeButtonIndex] = useState<number>(0)
  let categoryType: string = "가격대"
  let categories: string[] = []

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

  setRankType();

  const test = async () => {
    const data = await getApiData();
    console.log(data)
  }
  test()

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