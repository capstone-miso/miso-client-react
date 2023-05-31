import axios from 'axios'
import { API } from '../config'
import { Parking } from '../models/Parking';
import { Location } from "../models/Store";

export const getParkingLocation = async (
  location: Location
): Promise<Parking[]> => {
  const parking = await axios.get(API.PARKING, {
    params: {
      lon: location.center.lng,
      lat: location.center.lat
    }
  });

  return parking.data;
};