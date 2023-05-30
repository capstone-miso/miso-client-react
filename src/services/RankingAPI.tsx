import axios from 'axios'
import { API } from '../config'
import { Store, StoreRanking, SubKeyword } from "../models/Store"

export const getStoreRanking = async (
  keyWord: string,
  page: number,
  size: number,
  sort: string
): Promise<StoreRanking> => {
  const stores = await axios.get(API.RANK_PAGE, {
    params: {
      keyword: keyWord,
      page: page,
      size: size,
      sort: sort
    },
  });

  console.log("가게 랭킹: ", stores.data);
  return stores.data;
};

export const getNextStoreRanking = async (
  pageUrl: string
): Promise<StoreRanking> => {
  const stores = await axios.get(pageUrl);
  return stores.data;
};