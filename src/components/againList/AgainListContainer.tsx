import { Flex, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import AgainListCard from "./AgainListCard";
import axios from "axios";
import { Store } from "../../models/Store";

function AgainListContainer() {
  interface AgainButton {
    id: number;
    title: string;
    content: string;
    url: string;
    again: Again[];
    stores:Store[]
  }

  interface Again {
    id: number;
    image: string;
    name: string;
  }
  const [myAgainList,setMyAgainList]=useState<Store[]>([])
  const [famousAgainList,setFamousAgainList]=useState<Store[]>([])
  const [similarAgainList,setSimilarAgainList]=useState<Store[]>([])

  const getMyAgainStores=()=>{
    axios.get("https://dishcovery.site/api/preference",{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("Authorization")
      }
    }).then((response)=>{
        setMyAgainList(response.data.dtoList)
    })
  }

  const getMuchAgainStores=()=>{
    axios.get("https://dishcovery.site/api/preference/famous",{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("Authorization")
      }
    }).then((response)=>{
        setFamousAgainList(response.data.dtoList)
    })
  }

  const getSimilarAgainStores=()=>{
    axios.get("https://dishcovery.site/api/preference/similar",{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("Authorization")
      }
    }).then((response)=>{
        setSimilarAgainList(response.data.dtoList)
    })
  }

  useEffect(()=>{
    getMuchAgainStores();
    getMyAgainStores();
    getSimilarAgainStores();
  },[])

  const getMyAgainButton=():Again[]=>{
    let again:Again[]=[]
    myAgainList.map((store,index)=>{
      if(index<3){
        again.push({id:index,image:store.mainImage,name:store.storeName})
      }
    })
    return again
  }

  const getSimilarButton=():Again[]=>{
    let again:Again[]=[]
    similarAgainList.map((store,index)=>{
      if(index<3){
        again.push({id:index,image:store.mainImage,name:store.storeName})
      }
    })
    return again
  }

  const getFamousButton=():Again[]=>{
    let again:Again[]=[]
    famousAgainList.map((store,index)=>{
      if(index<3){
        again.push({id:index,image:store.mainImage,name:store.storeName})
      }
    })
    return again
  }

  const againButtonList: AgainButton[] = [
    {
      id: 0,
      title: "내가 또갈집",
      content: "좋아요 표시한 또갈집 목록을 확인해보세요!",
      url: "/myAgainList",
      again: getMyAgainButton(),
      stores:myAgainList
    },
    {
      id: 1,
      title: "많이 또갈집",
      content: "가장 인기있는 또갈집 목록을 확인해보세요!",
      url: "/muchAgainList",
      again:getFamousButton(),
      stores:famousAgainList
    },
    {
      id: 2,
      title: "비슷한 또갈집",
      content: "내가 또갈집과 비슷한 카테고리의 또갈집을 추천해드려요!",
      url: "/similarAgainList",
      again: getSimilarButton(),
      stores: similarAgainList
    },
  ];

  return (
    <>
      <Flex direction="column" alignContent="center" alignItems="center">
        <Header title="또갈집" />
        <Flex
          justifyContent="center"
          justifyItems="center"
          alignContent="center"
          alignItems="center"
        >
          <Stack maxW="390px" mt="85px" mb="50px">
            {againButtonList.map((AgainButton) => (
              <AgainListCard
                key={AgainButton.id}
                title={AgainButton.title}
                content={AgainButton.content}
                url={AgainButton.url}
                again={AgainButton.again}
                stores={AgainButton.stores}
              />
            ))}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

export default AgainListContainer;
