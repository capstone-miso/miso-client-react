import { Spinner, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Scroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Restaurant from "../bestrestaurant/RestaurantRanking";
import { Store } from "../../models/Store";
import 'react-dropdown/style.css';
import '../DropDown.css'
import Dropdown from 'react-dropdown';

const RestaurantContainer = styled.div`
  width: 100%;
  height: 60%;
`;

const MatzipListContainer = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const pageRef = useRef<number>(1);

  const options = [
    '거리순', '좋아요순', '방문순','매출순'
  ];
  const defaultOption = options[0];

  const [sortType,setSortType]=useState<string>("distance")
  const getStore = () => {
    axios
      .get(
        `https://dishcovery.site/api/store?&page=${pageRef.current}&sort=${sortType}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("Authorization"),
          },
        }
      )
      .then((response) => {
        if(pageRef.current==1){
          setStores(response.data.dtoList)
        }
        else{
        setStores([...stores, ...response.data.dtoList]);
        }
        pageRef.current = pageRef.current + 1;
      });
  };

  const fetchData = () => {
    setTimeout(() => {
      getStore();
    }, 2000);
  };

  const handleDropDownChange=(type:string)=>{
    if(type=="거리순"){
      setSortType("distance")
    }
    else if(type=="좋아요순"){
      setSortType("preference")
    }
    else if(type=="방문순"){
      setSortType("visit")
    }
    else{
      setSortType("sales")
    }
  }

  useEffect(()=>{
    pageRef.current=1
    getStore()
  },[sortType])
  

  const scrollable = useRef<boolean>(true);

  return (
    <>
      <Stack mt="55px"></Stack>
      <div style={{display:"flex",justifyContent:"right"}}>
          <Dropdown className="sort_select_dropdown" onChange={(selected)=>(handleDropDownChange(selected.value))} options={options} value={defaultOption} placeholder="Select an option" />
        </div>
      <RestaurantContainer>
        <Scroll
          dataLength={stores.length} //반복되는 컴포넌트 개수
          next={fetchData} //스크롤이 바닥에 닿은 경우 -> 데이터 추가
          hasMore={scrollable.current} //추가 데이터 유무
          loader={
            <h4
              style={{
                textAlign: "center",
                padding: "10px 0 10px 0",
              }}
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="orange.300"
                size="xl"
              />
            </h4>
          } //로딩 스피너
          endMessage={
            <h4
              style={{
                textAlign: "center",
                padding: "10px 0 10px 0",
              }}
            >
              End...
            </h4>
          }
          scrollableTarget={RestaurantContainer}
          style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}
        >
          {stores.map((store, index) => (
            <Restaurant
              key={`${store.id}-${index}`}
              {...stores[index]}
              store={store}
              ranking={index+1}
            />
          ))}
        </Scroll>
      </RestaurantContainer>
      <Stack mb="45px" />
    </>
  );
};

export default MatzipListContainer;
