export interface Store {
  id: number;
  storeName: string;
  address: string;
  phone: string;
  lat: number;
  lon: number;
  category: string;
  keywords: string[];
  preferenceCount: number;
  sector: string;
  mainImage: string;
  preference: boolean;
}

export interface StoreRanking {
  page: number;
  size: number;
  total: number;
  start: number;
  end: number;
  prev: boolean;
  next: boolean;
  prevPage: string;
  nextPage: string;
  dtoList: Store[];
}

export interface Location {
  center: {
    lat: number;
    lng: number;
  };
  errMsg: string;
  isLoading: boolean;
}

export interface MarkerLocation {
  location: any;
  setLocation: any;
}

export interface SubKeyword {
  korean: string;
  english: string;
}
