import { Map, ZoomControl, MarkerClusterer } from "react-kakao-maps-sdk"
import { useState, useEffect, useRef } from "react"
import RestaurantMarker from "./RestaurantMarker"
import Button from '@material-ui/core/Button';
import axios, { AxiosResponse } from "axios";
import { Store, Location } from "../../models/Store";
import { atom, useRecoilState } from 'recoil';

const CurrentLocation = atom<Location>({
  key: 'CurrentLocation',
  default: {
    center: {
      lat: 37.549605785399,
      lng: 127.075150292867
    },
    errMsg: "",
    isLoading: false
  },
});

export default function KakaoMap({stores,setStoreList,setCurrentAddress,sortType}:{stores:Store[],setStoreList:Function,setCurrentAddress:Function,sortType:string}){
  const kakaoMap = {
    width: "100%",
    height: "100%"
  }
  const [level, setLevel] = useState<number>(3)
  let [currentLocation, setCurrentLocation] =useRecoilState<Location>(CurrentLocation)
  const mapRef = useRef<any>()

  const onClusterclick = (_target: any, cluster: any) => {
    const map = mapRef.current
    map.setLevel(level - 2, {anchor: cluster.getCenter()});
  }

  const [isClickSearch,setIsClickSearch]=useState<boolean>(false)
  const [selectedTap,setSelectedTap]=useState<String>(" 전 체 ")

  useEffect(()=>{
    insertStores(0)
  },[sortType])

  const LocateCurrentPosition = () => {
    setCurrentLocation((prev) => ({ 
            ...prev,
            isLoading: true
          }))
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation((prev) => ({ 
            ...prev,
            center: {
              lat: position.coords.latitude,   //위도
              lng: position.coords.longitude   //경도
            },
            isLoading: false
          }))
        },
        (err) => {
          setCurrentLocation((prev) => ({ 
            ...prev,
            errMsg: err.message,
            isLoading: false
          }))
        }
      )
    }else{
      setCurrentLocation((prev) => ({ 
        ...prev,
        errMsg: "현재 위치를 불러올 수 없습니다.",
        isLoading: false
      }))
    }
  }

  const detectLevel=(map:kakao.maps.Map)=>{
    if(map.getLevel()>2){
      setSelectedIndex(-1)
    }
  }


  const insertStores=async (type:number)=>{
    const items=await getStores(type)
    setStoreList(items)
  }

  const getStores= async(type:number):Promise<Store[]>=>{
    setIsClickSearch(false)
    setStoreList([])
    const pages:number[]=[]
    for(var i=1;i<=level;i++){
      pages.push(i)
    }
    const promises=pages.map((page)=>searchStore(type,page))
    const result=await Promise.all(promises)
    const items:Store[]=[]
    result.forEach(element => {
      element.forEach(item=>{
        items.push(item)
      })
    });
    return items
  }

  const searchStore= async (type:number,page:number):Promise<Store[]>=>{
    let lat=currentLocation.center.lat
    let lng=currentLocation.center.lng
    let category=""
    if (type===0){
      category=""
    }
    else if (type===1){
      category="식당"
    }
    else if(type===2){
      category="디저트"
    }
    try{const response= await axios.get("https://dishcovery.site/api/store",{
      params:{
        page:page,
        lat:lat,
        lon:lng,
        category:category,
        sort:sortType
      },
      headers:{
        Authorization:"Bearer " + localStorage.getItem("Authorization") 
      }
    })
    return response.data.dtoList
    } catch(e){
      return []
    }
  }

  const [selectedIndex,setSelectedIndex]=useState<number>(-1)

  return(
    <>
      <Map
        style={kakaoMap}
        center={currentLocation.center}
        level = {3}
        onZoomChanged={(map) => {setLevel(map.getLevel())
          detectLevel(map)}
        }
        onCreate={(map)=>(
          new kakao.maps.services.Geocoder().coord2Address(map.getCenter().getLng(),map.getCenter().getLat(),(result)=>{
            setCurrentAddress(result[0].address.address_name)
          })
        )}
        onDragEnd={(map)=>(
          new kakao.maps.services.Geocoder().coord2Address(map.getCenter().getLng(),map.getCenter().getLat(),(result)=>{
            setCurrentAddress(result[0].address.address_name)
          })
        )}
        ref={mapRef}
        onCenterChanged={(map) => setCurrentLocation({
          center: {
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          },
          errMsg: "",
          isLoading: false
        })}
      >
        <ZoomControl />

        <MarkerClusterer
          averageCenter={true} // 평균 위치를 클러스터 마커 위치로 설정
          minLevel={6}         // 클러스터 할 지도의 최소 레벨
          disableClickZoom={true}
          onClusterclick={onClusterclick}
          styles={[{ // calculator 각 사이 값 마다 적용될 스타일을 지정한다
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            // fontSize: '0px',
            width : '50px',
            height : '50px',
            background: 'url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png") no-repeat',
            positon: 'getCenter'
          }]}
        >
          {stores.map((store, index) => (
            <RestaurantMarker
              key={`${store.id}`}
              {...stores[index]}
              store={store}
              setCurrentLocation={setCurrentLocation}
              level={level}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              mapRef={mapRef.current}
              />
          ))}

        </MarkerClusterer>
        
      </Map>
      
      <div
        style={{position: "fixed", top: "9%", left: "2%", zIndex: "10"}}>
        {currentLocation.isLoading===true ?
          <Button
            variant="contained"
            onClick={LocateCurrentPosition}
            startIcon={<img src={"./current-location.png"} alt="cafeImage" width="30px"/>}
            style={{background: "orange", fontWeight: "700", borderRadius: "50px"}}>
            이동중입니다...
          </Button>
          :
          <Button 
          variant="contained"
          onClick={LocateCurrentPosition}
          startIcon={<img src={"./current-location.png"} alt="cafeImage" width="30px"/>}
          style={{background: "white", fontWeight: "700", borderRadius: "50px"}}>
          내 위치로
        </Button>
        }
      </div>
      {
        isClickSearch ?
          <>
        <div style={{position: "fixed", top: "9%", left: "71%", zIndex: "10"}}>
        <Button
          variant="contained"
          onClick={()=>setIsClickSearch(false)}
          style={{backgroundColor:"orange",height:"42px",fontWeight: "700", borderRadius: "50px"}}>
          &nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;
        </Button>
      </div>

      <div style={{position: "fixed", top: "16%", left: "71%", zIndex: "10"}}>
        <Button
          variant="contained"
          onClick={()=>
            {insertStores(0)
            setSelectedTap(" 전 체 ")}}
          style={{backgroundColor:"white",height:"42px",fontWeight: "700", borderRadius: "50px"}}>
          &nbsp;전&nbsp;체&nbsp;
        </Button>
      </div>
      <div style={{position: "fixed", top: "23%", left: "71%", zIndex: "10"}}>
        <Button
          variant="contained"
          onClick={()=>{
            insertStores(1)
            setSelectedTap("음식점")}}
          style={{backgroundColor:"white",height:"42px",fontWeight: "700", borderRadius: "50px"}}>
          음식점
        </Button>
      </div>
      <div style={{position: "fixed", top: "30%", left: "71%", zIndex: "10"}}>
        <Button
          variant="contained"
          onClick={()=>{setSelectedTap(" 카 페 ")
          insertStores(2)
        }}
          style={{backgroundColor:"white",height:"42px",fontWeight: "700", borderRadius: "50px"}}>
          &nbsp;카&nbsp;페&nbsp;
        </Button>
      </div></>
        :
        <div style={{position: "fixed", top: "9%", left: "71%", zIndex: "10"}}>
        <Button
          variant="contained"
          onClick={()=>setIsClickSearch(true)}
          style={{backgroundColor:"white",height:"42px",fontWeight: "700", borderRadius: "50px"}}>
          {selectedTap}
        </Button>
      </div>
      }

      {/* <button 
        // colorScheme='blue'
        style={{position: "fixed", top: "9%", left: "2%", width: "30%", zIndex: "10"}}
        onClick={LocateCurrentPosition}>
        leftIcon={<Image src={"./cafe.png"} alt="cafeImage" layout="fill"/>}
          현재 위치
      </button> */}
    </>
  )
}
