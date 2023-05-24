import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Scroll from 'react-infinite-scroll-component'

export default function InfiniteScroll() {
  const [items, setItems] = useState(Array.from({ length: 30}))

  const fetchData = () => {
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 10 })))
    }, 1500);
  }

  return(
    <Scroll
      dataLength={items.length}   //
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {items.map((i, index) => (
        <div key={index}>
          div-#{index + 1}
        </div>
      ))}
    </Scroll>
  )
}