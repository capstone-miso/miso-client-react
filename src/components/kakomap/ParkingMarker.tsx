import { MapMarker } from "react-kakao-maps-sdk"
import { Location } from "../../models/Store";

export default function RestaurantMarker({ lat, lon }: { lat: number, lon: number }){

  return (
    <>
      <MapMarker
      position={{ lat: lat, lng: lon }}
      image={{
        src: "./parking-marker.png", 
        size: {
          width: 40,
          height: 40,
        }, 
      }}>
      </MapMarker>
    </>
  );
}
