import { Map, ZoomControl, MarkerClusterer } from "react-kakao-maps-sdk"
import { useState, useEffect, useRef } from "react"
import RestaurantMarker from "./RestaurantMarker"
import { Button } from "@chakra-ui/react"

export interface Store{
  name: string,
  lat: number,
  lon: number,
  address: string,
  phone: string,
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

export default function KakaoMap(){
  const kakaoMap = {
    width: "100%",
    height: "100%"
  }

  const [level, setLevel] = useState<number>(3)

  let [currentLocation, setCurrentLocation] =
    useState<Location>({
      center: {
        lat: 37.27019987550703,
        lng: 127.63534848763183
      },
      errMsg: "",
      isLoading: true
    })

  const mapRef = useRef<any>()

  const onClusterclick = (_target: any, cluster: any) => {
    const map = mapRef.current
    map.setLevel(level - 2, {anchor: cluster.getCenter()});
  }

  let stores: Store[] = 
    [
      {
        name: "보승회관",
        lat: 37.5539147125513,
        lon: 127.077390878728,
        address: "서울 광진구 능동로 267",
        phone: "070-5030-5424",
        sector: "음식점"
      },
      {
        name: "카레당",
        lat: 37.55265374492164,
        lon: 127.07673319398943,
        address: "서울 광진구 능동로 251",
        phone: "02-464-4022",
        sector: "음식점"
      },
      {
        name: "비밀 군자점",
        lat: 37.5538530201804,
        lon: 127.078035889182,
        address: "서울 광진구 능동로 268",
        phone: "010-2480-3330",
        sector: "제과,베이커리"
      },
      {
        name: "이이요",
        lat: 37.555185919524014,
        lon: 127.07890418373962,
        address: "서울 광진구 능동로32길 6",
        phone: "02-3437-2225",
        sector: "음식점"
      },
      {
        name: "한촌설렁탕 군자점",
        lat: 37.5529383510837,
        lon: 127.076900976702,
        address: "서울 광진구 군자동 242",
        phone: "02-468-4200",
        sector: "음식점"
      },
      {
        name: "소사면옥",
        lat: 37.55400798942731,
        lon: 127.07803944590441,
        address: "서울 광진구 능동 283-7",
        phone: "02-447-0904",
        sector: "음식점"
      },
      {
        name: "군자돈까스",
        lat: 37.55450602563902,
        lon: 127.07836476861877,
        address: "서울 광진구 능동 282-6",
        phone: "02-6402-0010",
        sector: "음식점"
      }
    ]


  const LocateCurrentPosition = () => {
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

  useEffect(() => {
    LocateCurrentPosition()
  }, [])
  
  return(
    <>
      <Map
        style={kakaoMap}
        center={currentLocation.center}
        level = {3}
        onZoomChanged={(map) => setLevel(map.getLevel())}
        ref={mapRef}
        onCenterChanged={(map) => setCurrentLocation({
          center: {
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          },
          errMsg: "",
          isLoading: true
        })}
      >
        <ZoomControl />

        <MarkerClusterer
          averageCenter={true} // 평균 위치를 클러스터 마커 위치로 설정
          minLevel={6}         // 클러스터 할 지도의 최소 레벨
          disableClickZoom={true}
          onClusterclick={onClusterclick}
          styles={[{ // calculator 각 사이 값 마다 적용될 스타일을 지정한다
            // width : '50px', 
            // height : '50px',
            // background: '#f2c4ff',
            // borderRadius: '50px',
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
              key={`${store.lat}-${store.lon}, ${setCurrentLocation}`} 
              {...stores[index]}/>
          ))}

        </MarkerClusterer>
        
      </Map>

      <Button 
        colorScheme='blue'
        style={{position: "fixed", bottom: "15%", right: "0", width: "30%", zIndex: "10"}}
        onClick={LocateCurrentPosition}>
        {/* leftIcon={<Image src={cafeIcon} alt="cafeImage" layout="fill"/>}> */}
          현재 위치
      </Button>
    </>
  )
}