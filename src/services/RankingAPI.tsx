import axios from "axios";
import { API } from "../config";
import { Store, StoreRanking } from "../models/Store";

export const getStoreRank = async (
  keyWord: string,
  page: number,
  size: number
): Promise<Store[]> => {
  const stores = await axios.get(API.RANK_PAGE, {
    params: {
      keyword: keyWord,
      page: page,
      size: size,
    },
  });

  return stores.data.dtoList;
};

export const getStoreRanking = async (
  keyWord: string,
  page: number,
  size: number
): Promise<StoreRanking> => {
  const stores = await axios.get(API.RANK_PAGE, {
    params: {
      keyword: keyWord,
      page: page,
      size: size,
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
