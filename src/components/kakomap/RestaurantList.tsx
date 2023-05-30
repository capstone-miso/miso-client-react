import styled from "styled-components";
import { Store } from "../../models/Store";
import Restaurant from "../bestrestaurant/RestaurantRanking";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../DropDown.css'
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 30px;
`;

const District = styled.div`
  width: 100%;
  height: 5%;
  font-weight: 700;
  font-size: 18px;
`;

const RestaurantContainer = styled.div`
  width: 100%;
  height: 92%;
`;
  const options = [
    '거리순', '좋아요순', '방문횟수순','매출순','최근방문순'
  ];
  const defaultOption = options[0];

export default function RestaurantList({stores,currentAddress,setSortType}:{stores:Store[],currentAddress:string,setSortType:Function}){

  const handleDropDownChange=(type:string)=>{
    if(type=="거리순"){
      setSortType("distance")
    }
    else if(type=="좋아요순"){
      setSortType("preference")
    }
    else if(type=="방문횟수순"){
      setSortType("visit")
    }
    else if(type=="매출순"){
      setSortType("cost")
    }
    else{
      setSortType("update")
    }
  }

  return(
    <Container>
      <District>
        {currentAddress}
      </District>
      <div style={{display:"flex",justifyContent:"left"}}>
          <Dropdown className="sort_select_dropdown" onChange={(selected)=>(handleDropDownChange(selected.value))} options={options} value={defaultOption} placeholder="Select an option" />
        </div>

      <RestaurantContainer>
        {stores.map((store, index) => (
          <Restaurant
            key={`${store.id}`}
            {...stores[index]}
            store={store}
            ranking={index+1}/>
        ))}
      </RestaurantContainer>
    </Container>
  );
}
