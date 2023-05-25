import axios from "axios";
import { API } from "../config";
import { Store } from "../models/Store";

export const getStoreList = async (
  page: number,
  size: number
): Promise<Store[]> => {
  const stores = await axios.get(API.ALL_LIST_PAGE, {
    params: {
      page: page,
      size: size,
    },
  });

  return stores.data.dtoList;
};
