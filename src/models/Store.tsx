export interface Store{
  id: number,
  storeName: string,
  lat: number,
  lon: number,
  address: string,
  phone: string,
  category: string,
  keywords: string[],
  mainImage: string,
  preference: boolean,
  sector: string
}

export interface Location{
  center: {
    lat: number,
    lng: number,
  },
  errMsg: string,
  isLoading: boolean,
}

export interface MarkerLocation {
  location: any,
  setLocation: any
}