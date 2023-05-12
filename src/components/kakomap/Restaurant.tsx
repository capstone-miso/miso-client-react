import { useState, useEffect, useRef } from "react"
import { Store } from './KakaoMap'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  `

const NameContainer = styled.div`
  padding: 0px 0px 10px 0px;
  display: flex;
  `

const Name = styled.div`
  font-weight: 700;
  color: #0B60DF;
  font-size: 20px;
  `

const Sector = styled.div`
  font-weight: 700;
  font-size: 16px;
  padding-top: 4px;
  `


export default function Restaurant({ store }: { store: Store }){

  return(
    <Container>
      <NameContainer>
        <Name>{ store.name }&nbsp;</Name>
        <Sector>{ store.sector }</Sector>
      </NameContainer>
      <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MzFfMzQg%2FMDAxNTk4ODAyNzA5NzM4.ZEgHu39PEYbQ8Npcc6AvqGGoNmVOPpeG5PFfSKQSYi8g.dD3HWOAy289Zs3zbQA44rY1UNL0u4qclxt32iHPW1zEg.JPEG.950905_%2FIMG_3171.jpg&type=sc960_832" style={{objectFit: "cover", width: "100%", height: "30%"}}/>
    </Container>
  )             
}