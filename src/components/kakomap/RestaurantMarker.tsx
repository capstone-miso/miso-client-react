import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk"
import { Store, Location } from './KakaoMap'
import { useState, useEffect, Ref } from "react"
import styled from 'styled-components'
import { border } from "@chakra-ui/react"
import zIndex from "@material-ui/core/styles/zIndex"
import { relative } from "path"

const Label = styled.div`
  margin-top: 10px;
  color: black;
  font-weight: 700;
  background-color: white;
  `

export default function RestaurantMarker({ store, setCurrentLocation, level,index,selectedIndex,setSelectedIndex,mapRef }: { store: Store , setCurrentLocation: Function,level:number,index:number,selectedIndex:number, setSelectedIndex:Function,mapRef:kakao.maps.Map}){


  const getMarkerImage = (category: string): string => {
    if (category.includes("음식점")){
      return "/restaurant.png"
    }
    else if (category == "제과,베이커리"){
      return "/cafe.png"
    }
    
    return "/location.png"
  }


  return (

    <>
      
      {level && level<=2 ? 

        selectedIndex===index?
        <CustomOverlayMap 
          position={{ lat: store.lat+0.0001*level, lng: store.lon }}
        >
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"} }>
            <div onClick={()=>console.log(level)} style={{height:"50px",display:"flex",flexDirection:"row",borderRadius:"20px",border:"1px solid orange",backgroundColor:"orange"}}>
              <div style={{width:"50px",height:"100%",justifyContent:"center",alignItems:"center",display:"flex"}}>
                <img style={{width:"40px",height:"40px",borderRadius:"60px", border:"2px solid white"}} src={store.mainImage===null?
                  "/default-image.png"
                :
                  store.mainImage
                }/>
              </div>
              <div style={{height:"40px",paddingTop:"2px"}}>
                <p style={{fontSize:"17px", fontWeight:"bold",color:"white"}}>{store.storeName}</p>
                <p style={{fontSize:"12px",fontWeight:"bold",color:"white"}}>{store.category}</p>
              </div>
              <div style={{width:"20px"}}>
                
              </div>
            </div>
            <div style={{width:"0",height:"0",borderTop:"20px solid orange",borderLeft:"10px solid transparent",borderRight:"10px solid transparent"}}></div>
          </div>
        </CustomOverlayMap>
        :
        <MapMarker
        position={{ lat: store.lat, lng: store.lon }}
        onClick={() => {setCurrentLocation((prev: any) => ({ 
          center: {
            lat: store.lat,   //위도
            lng: store.lon   //경도
          },
          errMsg: "",
          isLoading: false
        }))
        setSelectedIndex(index)}}
        image={{
          src: getMarkerImage(store.category), 
          size: {
            width: 40,
            height: 40,
          }, 
        }}></MapMarker>
      :
      <MapMarker
        position={{ lat: store.lat, lng: store.lon }}
        onClick={() => {setCurrentLocation((prev: any) => ({ 
          center: {
            lat: store.lat,   //위도
            lng: store.lon   //경도
          },
          errMsg: "",
          isLoading: false
        }))
        setSelectedIndex(index)
        mapRef.setLevel(2)
      }}
        image={{
          src: getMarkerImage(store.category), 
          size: {
            width: 40,
            height: 40,
          }, 
        }}>

      </MapMarker>
      }
    </>
  );
}
