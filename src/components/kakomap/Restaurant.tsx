import { useState, useEffect, useRef } from "react"
import { Store } from './KakaoMap'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 0.5px solid black;
  border-radius:5px;
  &:hover {
    background-color: #0000004d;
  }
  `

const NameContainer = styled.div`
  padding: 0px 0px 10px 0px;
  display: flex;
  `

const Name = styled.div`
  font-weight: 700;
  color: #0B60DF;
  font-size: 18px;
  `

const Content = styled.div`
  width: 100%;
  vertical-align: middle;
  display: inline-block;
`

const ImageContainer = styled.div`
  float: left;
  padding: 0px 10px 0px 0px;
`

const ContentImage = styled.img`
  height: 18px;
  vertical-align: middle;
`

const HeartButtonContainer = styled.div`
  width: 20%;
  display: felx;
  justify-content: flex-end;
`

const HeartButton = styled.img`
  height: 50%;
`

export default function Restaurant({ store }: { store: Store }){
  const [isClicked, setIsClicked] = useState<boolean>(false)  //사용자가 찜했는지 여부를 받아와 변수 초기화 필요
  useEffect(() => {
    console.log(isClicked)
  }, [isClicked])

  const getHeartButtonIcon = () => {
    if (isClicked){
      return "./cafe.png"   //하트 아이콘으로 변경 예정
    }
    
    return "./restaurant.png"
  }

  const navigate=useNavigate()
  const showStoreDetail= (storeId:number) =>{
    navigate('../matzipDetail',{
      state:{
        storeId:storeId
      }
    })
  }

  return(
    <Container onClick={()=>showStoreDetail(store.id)}>
      <NameContainer>
        <Name>{ store.storeName }&nbsp;</Name>
      </NameContainer>

      <img src={store.mainImage===null?
      "/default-image.png"
      :
      store.mainImage
      }
      style={{objectFit: "cover", width: "100%", height: "15em", paddingBottom: "10px"}}/>
      
      <div style={{width: "100%", display: "flex"}}>
        <div style={{width: "80%"}}>      
          <Content>
            <ImageContainer>
              <ContentImage src="./home-icon.png" />
            </ImageContainer>
            <div>
              { store.category }
            </div>
          </Content>
          <Content>
            <ImageContainer>
              <ContentImage src="./location-icon.png" />
            </ImageContainer>
            <div>
              { store.address }
            </div>
          </Content>

          <Content>
            <ImageContainer>
              <ContentImage src="./phone-icon.png" />
            </ImageContainer>
            <div>
              { store.phone }
            </div>
          </Content>
        </div>
        
        <HeartButtonContainer>  
          <HeartButton 
            src={getHeartButtonIcon()}
            alt="찜하기" 
            onClick={() => setIsClicked(!isClicked)}/>
        </HeartButtonContainer>
      </div>
    </Container>
  )             
}