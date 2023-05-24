import { useState, useEffect, useRef } from "react"
import { Store } from "../../models/Store";
import styled from 'styled-components'
import HeartIcon from "../../assets/heart.png"
import EmptyHeartIcon from "../../assets/emptyheart.png"

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 40px;
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
      return HeartIcon  
    }
    
    return EmptyHeartIcon
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

  return(
    <Container>
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
              { getCategory(store.category) }
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

          {store.phone != "" &&
          <Content>
            <ImageContainer>
              <ContentImage src="./phone-icon.png" />
            </ImageContainer>
            <div>
              { store.phone }
            </div>
          </Content>}
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