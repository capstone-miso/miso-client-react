import { Store } from "../../models/Store";
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

export default function RestaurantList({stores,currentAddress}:{stores:Store[],currentAddress:string}){


  return(
    <Container>
      <District>
        {currentAddress}
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