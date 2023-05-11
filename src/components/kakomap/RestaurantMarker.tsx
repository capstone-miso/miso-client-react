import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk"
import { Store, Location } from './KakaoMap'
import { useState, useEffect } from "react"
import styled from 'styled-components'

const Label = styled.div`
    margin-top: 10px;
    color: black;
    font-weight: 700;
    background-color: white;
  `

export default function RestaurantMarker({ store, currentLocation, setCurrentLocation }: { store: Store, currentLocation: Location, setCurrentLocation: Function }){

  const [isClicked, setIsClicked] = useState(false)

  const getMarkerImage = (sector: string): string => {
    if (sector == "음식점"){
      return "/restaurant.png"
    }
    else if (sector == "제과,베이커리"){
      return "/cafe.png"
    }
    
    return "/location.png"
  }

  useEffect(() => {
    setCurrentLocation(() => ({ 
      center: {
        lat: store.lat,   //위도
        lng: store.lon   //경도
      },
      errMsg: "",
      isLoading: false
    }))
  }, [isClicked])


  return (

    <>
      <MapMarker
        position={{ lat: store.lat, lng: store.lon }}
        onClick={() => setIsClicked(true)}
        image={{
          src: getMarkerImage(store.sector), 
          size: {
            width: 50,
            height: 50,
          }, 
          options: {
            offset: {
              x: 30,
              y: 70,
            },
          },
        }}>
      </MapMarker>
      
      {isClicked && (
        <CustomOverlayMap 
          position={{ lat: store.lat, lng: store.lon }}
        >
          <div className="Label">
            <span className="left"></span>
            <span className="center">{store.name}</span>
            <span className="right"></span>
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
}