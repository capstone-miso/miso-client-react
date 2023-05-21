import { useState, useEffect, useRef } from "react"
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

export default function RestaurantList({stores}:{stores:Store[]}){
  let location = "광진구 군자동"


  return(
    <Container>
      <District>
        {location}
      </District>

      <RestaurantContainer>
        {stores.map((store, index) => (
          <Restaurant
            key={`${store.id}`}
            {...stores[index]}
            store={store}/>
        ))}
      </RestaurantContainer>
      
    </Container>
  )
}