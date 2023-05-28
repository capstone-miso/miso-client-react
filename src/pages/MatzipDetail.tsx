import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MatzipDetailPage from "../components/matzipDetail/DetailContainer";
import { Store } from "../models/Store";

export interface storeDetail {
  id: number;
  storeName: string;
  lat: number;
  lon: number;
  phone: string;
  address: string;
  category: string;
  sector: string;
  mainImage: string;
  preference: boolean;
  onInfo: string[];
  offInfo: string[];
  keywords: string[];
  images: string[];
  menus: {
    mid: number;
    name: string;
    cost: string;
    detail: string;
    menuImg: string;
  }[];
  visitedTime: {
    under8: number;
    hour9: number;
    hour10: number;
    hour11: number;
    hour12: number;
    hour13: number;
    hour14: number;
    hour15: number;
    hour16: number;
    hour17: number;
    hour18: number;
    hour19: number;
    hour20: number;
    hour21: number;
    after22: number;
  };
  keywordData: {
    totalVisited: number;
    totalCost: number;
    costPerPerson: number;
    totalParticipants: number;
    spring: number;
    summer: number;
    fall: number;
    winter: number;
    totalSeason: number;
    breakfast: number;
    lunch: number;
    dinner: number;
    totalMeal: number;
    smallGroup: number;
    mediumGroup: number;
    largeGroup: number;
    extraGroup: number;
    totalGroup: number;
    costUnder8000: number;
    costUnder15000: number;
    costUnder25000: number;
    costOver25000: number;
    costDistribution: number;
    highTotalVisited: number;
    highTotalCost: number;
    highTotalParticipants: number;
  };
}

export default function MatzipDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const storeId= searchParams.get("storeId");
  const [storeData, setData] = useState<storeDetail | null>(null);
  const [similarStores, setSimilarStores] = useState<Store[]>([]);
  console.log(storeId);


  const getStoreDetail=async (storeId:string|null)=>{
    const response:AxiosResponse = await axios.get(`https://dishcovery.site/api/store/${storeId}`,
    {
      headers:{
        Authorization:"Bearer " + localStorage.getItem("Authorization")
      }
    })
    setData(response.data)
  }

  const getSimilarStores=async (storeId:string|null)=>{
    const response:AxiosResponse = await axios.get(`https://dishcovery.site/api/store/${storeId}/similar`,
    {
      headers:{
        Authorization:"Bearer " + localStorage.getItem("Authorization")
      }
    })
    setSimilarStores(response.data)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // 부드럽게 스크롤링되도록 설정 (선택적)
    });
  };
  

  useEffect(() => {
    getStoreDetail(storeId);
    getSimilarStores(storeId);
    scrollToTop()
  }, [searchParams]);
  return (
    <>
      <MatzipDetailPage storeData={storeData} similarStores={similarStores} />
    </>
  );
}
