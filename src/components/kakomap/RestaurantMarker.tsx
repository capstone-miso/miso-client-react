import { MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk"
import { Store, Location } from "../../models/Store";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"

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
  const navigate=useNavigate()
  const showStoreDetail= (storeId:number) =>{
    navigate({
      pathname: "../matzipDetail",
      search: `?storeId=${storeId}`,
    },{
      state:storeId
    })
  }

  const getCategory = (category: string): string => {
    let types: string[] = category.split(' > ')
    
    if (types.length == 2) {
      return types[1]
    }

    if (types[1] == "퓨전요리"){
      if (category.includes("한식")) {
        return "한식"
      }
      else {
        return "일식"
      }
    }

    if (category.includes("닭강정")) {
      return "양식"
    }

    switch (types[1]){
      case "간식": case "패스트푸드":
        return types[2]
      case "치킨":
        return "양식"
      case "아시아음식":
        return "아시아음식(" + types[2] +  ")"
      case "뷔페":
        return "한식"
      case "술집":
        return "주점"
    }

    return types[1]
  }

  return (

    <>
      {level && level<=2 ? 

        selectedIndex===index?
        <CustomOverlayMap
          zIndex={100}
          position={{ lat: store.lat+0.0001*level, lng: store.lon }}
        >
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} onClick={()=>showStoreDetail(store.id)}>
            <div style={{height:"50px",display:"flex",flexDirection:"row",borderRadius:"20px",border:"1px solid orange",backgroundColor:"orange"}}>
              <div style={{width:"50px",height:"100%",justifyContent:"center",alignItems:"center",display:"flex"}}>
                <img style={{width:"40px",height:"40px",borderRadius:"60px", border:"2px solid white"}} src={store.mainImage===null?
                  "/default-image.png"
                :
                  store.mainImage
                }/>
              </div>
              <div style={{height:"40px",paddingTop:"2px"}}>
                <p style={{fontSize:"17px", fontWeight:"bold",color:"white"}}>{store.storeName}</p>
                <p style={{fontSize:"12px",fontWeight:"bold",color:"white"}}>{getCategory(store.category)}</p>
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
        // zIndex={1}
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
