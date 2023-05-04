import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk"
import { Store } from './KakaoMap'
import { useState, useEffect } from "react"
import styled from 'styled-components'

export default function RestaurantMarker(store: Store, setCurrentLocation: Location){

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

  const Label = styled.div`
    margin-top: 10px;
    color: black;
    font-weight: 700;
    background-color: white;
  `

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
          <div className="label">
            <span className="left"></span>
            <span className="center">{store.name}</span>
            <span className="right"></span>
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
}