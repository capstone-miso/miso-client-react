import { useState, useEffect, useRef } from "react"
import { Store } from './KakaoMap'
import styled from 'styled-components'

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


export default function Restaurant({ store }: { store: Store }){

  return(
    <Container>
      <NameContainer>
        <Name>{ store.name }&nbsp;</Name>
      </NameContainer>

      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MzFfMzQg%2FMDAxNTk4ODAyNzA5NzM4.ZEgHu39PEYbQ8Npcc6AvqGGoNmVOPpeG5PFfSKQSYi8g.dD3HWOAy289Zs3zbQA44rY1UNL0u4qclxt32iHPW1zEg.JPEG.950905_%2FIMG_3171.jpg&type=sc960_832" 
      style={{objectFit: "cover", width: "100%", height: "15em", paddingBottom: "10px"}}/>

      <Content>
        <ImageContainer>
          <ContentImage src="./home-icon.png" />
        </ImageContainer>
        <div>
          { store.sector }
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

    </Container>
  )             
}