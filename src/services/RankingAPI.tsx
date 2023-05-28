import axios from 'axios'
import { API } from '../config'
import { Store, StoreRanking, SubKeyword } from "../models/Store"


export const getStoreRanking = async (
  keyWord: string,
  page: number,
  size: number,
  sort: string
): Promise<StoreRanking> => {
  const stores = await axios.get(API.ALL_LIST_PAGE, {
    params: {
      keyword: keyWord,
      page: page,
      size: size,
      sort: sort
    },
  });

  return stores.data;
};

export const getNextStoreRanking = async (
  pageUrl: string
): Promise<StoreRanking> => {
  const stores = await axios.get(pageUrl);
  return stores.data;
};
