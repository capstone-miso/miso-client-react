import { Store } from './KakaoMap'
import styled from 'styled-components'
import Restaurant from './Restaurant'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  `

const District = styled.div`
  width: 100%;
  height: 8%;
  font-weight: 700;
  font-size: 18px;
  `

const RestaurantContainer = styled.div`
  width: 100%;
  height: 92%;
  `

export default function RestaurantList(){
  let location = "광진구 군자동"

  let stores: Store[] = 
    [
      {
        name: "보승회관",
        lat: 37.5539147125513,
        lon: 127.077390878728,
        address: "서울 광진구 능동로 267",
        phone: "070-5030-5424",
        sector: "음식점"
      },
      {
        name: "카레당",
        lat: 37.55265374492164,
        lon: 127.07673319398943,
        address: "서울 광진구 능동로 251",
        phone: "02-464-4022",
        sector: "음식점"
      },
      {
        name: "비밀 군자점",
        lat: 37.5538530201804,
        lon: 127.078035889182,
        address: "서울 광진구 능동로 268",
        phone: "010-2480-3330",
        sector: "제과,베이커리"
      },
      {
        name: "이이요",
        lat: 37.555185919524014,
        lon: 127.07890418373962,
        address: "서울 광진구 능동로32길 6",
        phone: "02-3437-2225",
        sector: "음식점"
      },
      {
        name: "한촌설렁탕 군자점",
        lat: 37.5529383510837,
        lon: 127.076900976702,
        address: "서울 광진구 군자동 242",
        phone: "02-468-4200",
        sector: "음식점"
      },
      {
        name: "소사면옥",
        lat: 37.55400798942731,
        lon: 127.07803944590441,
        address: "서울 광진구 능동 283-7",
        phone: "02-447-0904",
        sector: "음식점"
      },
      {
        name: "군자돈까스",
        lat: 37.55450602563902,
        lon: 127.07836476861877,
        address: "서울 광진구 능동 282-6",
        phone: "02-6402-0010",
        sector: "음식점"
      }
    ]

  return(
    <Container>
      <District>
        {location}
      </District>

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