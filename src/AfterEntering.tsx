import React from "react";
import { Route, Routes } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import AgainList from "./pages/againList";
import MatzipDetail from "./pages/matzipDetail";
import Matziplist from "./pages/matziplist";
import MuchAgainList from "./pages/muchAgainList";
import MyAgainList from "./pages/myAgainList";
import SimilarAgainList from "./pages/similarAgainList";
import RestaurantMap from "./RestaurantMap";
// 네비게이션 바 나오는 페이지만 모아둔 곳
function Entring() {
  return (
    <>
      <BottomNavigation />
      <Routes>
        <Route path="/test" element={<RestaurantMap />} />
        <Route path="/matzipList" element={<Matziplist />} />
        <Route path="/matzipDetail" element={<MatzipDetail />} />
        <Route path="/againList" element={<AgainList />} />
        <Route path="/myagainList" element={<MyAgainList />} />
        <Route path="/similaragainList" element={<SimilarAgainList />} />
        <Route path="/muchagainList" element={<MuchAgainList />}></Route>
      </Routes>
    </>
  );
}

export default Entring;
