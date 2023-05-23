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