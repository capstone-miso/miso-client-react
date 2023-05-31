import axios from 'axios'
import { API } from '../config'
import { Store, StoreRanking, SubKeyword } from "../models/Store"

export const getStoreRanking = async (
  keyWord: string,
  page: number,
  size: number,
  sort: string
): Promise<StoreRanking> => {
  if(localStorage.getItem("Authorization")){
    const stores = await axios.get(API.ALL_LIST_PAGE, {
      params: {
        keyword: keyWord,
        page: page,
        size: size,
        sort: sort
      },
      headers:{
        Authorization:"Bearer "+localStorage.getItem("Authorization")
      }
    });
    return stores.data;
  }
  else{
    const stores = await axios.get(API.ALL_LIST_PAGE, {
      params: {
        keyword: keyWord,
        page: page,
        size: size,
        sort: sort
      },
    });
    return stores.data;
  }
};

export const getNextStoreRanking = async (
  pageUrl: string
): Promise<StoreRanking> => {
  if(localStorage.getItem("Authorization")){
    const stores = await axios.get(pageUrl,{
      headers:{
        Authorization:"Bearer "+localStorage.getItem("Authorization")
      }
    });
  return stores.data;
  }
  else{
    const stores = await axios.get(pageUrl);
  return stores.data;
  }
};