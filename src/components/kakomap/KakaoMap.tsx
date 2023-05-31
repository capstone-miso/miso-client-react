import Button from "@material-ui/core/Button";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Map, MarkerClusterer } from "react-kakao-maps-sdk";
import { atom, useRecoilState } from "recoil";
import { Location, Store } from "../../models/Store";
import { Parking } from "../../models/Parking";
import RestaurantMarker from "./RestaurantMarker";
import ParkingMarker from "./ParkingMarker";
import { getParkingLocation } from "../../services/ParkingAPI";
import zIndex from '@material-ui/core/styles/zIndex';

const CurrentLocation = atom<Location>({
  key: "CurrentLocation",
  default: {
    center: {
      lat: 37.549605785399,
      lng: 127.075150292867,
    },
    errMsg: "",
    isLoading: false,
  },
});

export default function KakaoMap({
  stores,
  setStoreList,
  setCurrentAddress,
  sortType,
}: {
  stores: Store[];
  setStoreList: Function;
  setCurrentAddress: Function;
  sortType: string;
}) {
  const kakaoMap = {
    width: "100%",
    height: "100%",
  };
  const [level, setLevel] = useState<number>(3);
  let [currentLocation, setCurrentLocation] =
    useRecoilState<Location>(CurrentLocation);
  const mapRef = useRef<any>();

  const onClusterclick = (_target: any, cluster: any) => {
    const map = mapRef.current;
    map.setLevel(level - 2, { anchor: cluster.getCenter() });
  };

  const [isClickSearch, setIsClickSearch] = useState<boolean>(false);
  const [selectedTap, setSelectedTap] = useState<String>(" 전 체 ");
  
  const [isClickParking, setIsClickParking] = useState<boolean>(false);
  const [parking, setParking] = useState<Parking[]>([]);

  const [isClickDong, setIsClickDong] = useState<boolean>(false);
  const [selectedDong, setSelectedDong] = useState<String>(" 동 별 ");

  useEffect(() => {
    insertStores(0);
  }, [sortType]);

  const LocateCurrentPosition = () => {
    setCurrentLocation((prev) => ({
      ...prev,
      isLoading: true,
    }));
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, //위도
              lng: position.coords.longitude, //경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setCurrentLocation((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setCurrentLocation((prev) => ({
        ...prev,
        errMsg: "현재 위치를 불러올 수 없습니다.",
        isLoading: false,
      }));
    }
  };

  const detectLevel = (map: kakao.maps.Map) => {
    if (map.getLevel() > 2) {
      setSelectedIndex(-1);
    }
  };

  const insertStores = async (type: number) => {
    const items = await getStores(type);
    setStoreList(items);
  };

  const getStores = async (type: number): Promise<Store[]> => {
    setIsClickSearch(false);
    setStoreList([]);
    const pages: number[] = [];
    for (var i = 1; i <= level; i++) {
      pages.push(i);
    }
    const promises = pages.map((page) => searchStore(type, page));
    const result = await Promise.all(promises);
    const items: Store[] = [];
    result.forEach((element) => {
      element.forEach((item) => {
        items.push(item);
      });
    });
    return items;
  };

  const searchStore = async (type: number, page: number): Promise<Store[]> => {
    let lat = currentLocation.center.lat;
    let lng = currentLocation.center.lng;
    let category = "";
    if (type === 0) {
      category = "";
    } else if (type === 1) {
      category = "식당";
    } else if (type === 2) {
      category = "디저트";
    }
    if(localStorage.getItem("Authorization")){
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
    else{
      try{const response= await axios.get("https://dishcovery.site/api/store",{
        params:{
          page:page,
          lat:lat,
          lon:lng,
          category:category,
          sort:sortType
        }
      })
      return response.data.dtoList
      } catch(e){
        return []
      }
    }
  }

  const insertParking = async () => {
    const items = await getParkingLocation(currentLocation);
    setParking(items);
  };

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return (
    <>
      <Map
        style={kakaoMap}
        center={currentLocation.center}
        level={3}
        onZoomChanged={(map) => {
          setLevel(map.getLevel());
          detectLevel(map);
        }}
        onCreate={(map) =>
          new kakao.maps.services.Geocoder().coord2Address(
            map.getCenter().getLng(),
            map.getCenter().getLat(),
            (result) => {
              setCurrentAddress(result[0].address.address_name);
            }
          )
        }
        onDragEnd={(map) =>
          new kakao.maps.services.Geocoder().coord2Address(
            map.getCenter().getLng(),
            map.getCenter().getLat(),
            (result) => {
              setCurrentAddress(result[0].address.address_name);
            }
          )
        }
        ref={mapRef}
        onCenterChanged={(map) =>
          setCurrentLocation({
            center: {
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            },
            errMsg: "",
            isLoading: false,
          })
        }
      >

        <MarkerClusterer
          averageCenter={true} // 평균 위치를 클러스터 마커 위치로 설정
          minLevel={6} // 클러스터 할 지도의 최소 레벨
          disableClickZoom={true}
          onClusterclick={onClusterclick}
          styles={[
            {
              // calculator 각 사이 값 마다 적용될 스타일을 지정한다
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              // fontSize: '0px',
              width: "50px",
              height: "50px",
              background:
                'url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png") no-repeat',
              positon: "getCenter",
            },
          ]}
        >

          {parking.map((parking, index) => (
            <ParkingMarker
              key={`${index}`}
              lat={parking.lat}
              lon={parking.lon}
            />
          ))}

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
        style={{position: "fixed", top: "105px", left: "20px", zIndex: "10"}}>
        {currentLocation.isLoading===true ?
          <Button
            variant="contained"
            onClick={LocateCurrentPosition}
            startIcon={<img src={"./current-location.png"} alt="cafeImage" width="30px"/>}
            style={{background: "orange", fontWeight: "700", borderRadius: "50px", fontFamily: "Noto_Sans_KR_Regular"}}>
            이동중입니다...
          </Button>
          :
          <Button 
          variant="contained"
          onClick={LocateCurrentPosition}
          startIcon={<img src={"./current-location.png"} alt="cafeImage" width="30px"/>}
          style={{background: "white", fontWeight: "700", borderRadius: "50px", fontFamily: "Noto_Sans_KR_Regular"}}>
          내 위치로
        </Button>
        }
      </div>
      {
        isClickParking ?
        <div style={{position: "fixed", top: "105px", right: "100px", zIndex: "10"}}>
          <Button
            variant="contained"
            onClick={() => {
              setParking([])
              setIsClickParking(false)}}
            style={{backgroundColor:"#0476e0", color: "white", height:"42px",fontWeight: "700", borderRadius: "50px", fontFamily: "Noto_Sans_KR_Regular"}}>
            &nbsp;주차장&nbsp;
          </Button>
        </div>
        :
        <div style={{position: "fixed", top: "105px", right: "100px", zIndex: "10"}}>
          <Button
            variant="contained"
            onClick={() => {
              insertParking() 
              setIsClickParking(true)}}
            style={{backgroundColor:"white",height:"42px",fontWeight: "700", borderRadius: "50px", fontFamily: "Noto_Sans_KR_Regular"}}>
            &nbsp;주차장&nbsp;
          </Button>
        </div>
      }

      {
        isClickSearch ?
          <>
        <div style={{position: "fixed", top: "105px", right: "20px", zIndex: "10"}}>
        <Button
          variant="contained"
          onClick={()=>setIsClickSearch(false)}
          style={{backgroundColor:"orange",height:"42px",fontWeight: "700", borderRadius: "50px"}}>
          &nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;
        </Button>
      </div>

      <div style={{position: "fixed", top: "157px", right: "20px", zIndex: "10"}}>
        <Button
          variant="contained"
          onClick={()=>
            {insertStores(0)
            setSelectedTap(" 전 체 ")}}
          style={{backgroundColor:"white",height:"42px",fontWeight: "700", borderRadius: "50px", fontFamily: "Noto_Sans_KR_Regular"}}>
          &nbsp;전&nbsp;체&nbsp;
        </Button>
      </div>
      <div style={{position: "fixed", top: "209px", right: "20px", zIndex: "10"}}>
        <Button
          variant="contained"
          onClick={()=>{
            insertStores(1)
            setSelectedTap("음식점")}}
          style={{backgroundColor:"white",height:"42px",fontWeight: "700", borderRadius: "50px", fontFamily: "Noto_Sans_KR_Regular"}}>
          음식점
        </Button>
      </div>
      <div style={{position: "fixed", top: "261px", right: "20px", zIndex: "10"}}>
        <Button
          variant="contained"
          onClick={()=>{setSelectedTap(" 카 페 ")
          insertStores(2)
        }}
          style={{backgroundColor:"white",height:"42px",fontWeight: "700", borderRadius: "50px", fontFamily: "Noto_Sans_KR_Regular"}}>
          &nbsp;카&nbsp;페&nbsp;
        </Button>
      </div></>
        :
        <div style={{position: "fixed", top: "105px", right: "20px", zIndex: "10"}}>
        <Button
          variant="contained"
          onClick={()=>setIsClickSearch(true)}
          style={{backgroundColor:"white",height:"42px",fontWeight: "700", borderRadius: "50px", fontFamily: "Noto_Sans_KR_Regular"}}>
          {selectedTap}
        </Button>

        </div>
      }
    </>
  );
}
