import React from "react";
import { Route, Routes } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import PersonalPage from "./components/personalPage/PersonalPage";
import AgainList from "./pages/AgainList";
import BestRestaurants from "./pages/BestRestaurants";
import CategoryRestaurants from "./pages/CategoryRestaurants";
import MatzipDetail from "./pages/MatzipDetail";
import Matziplist from "./pages/MatzipList";
import MuchAgainList from "./pages/MuchAgainList";
import MyAgainList from "./pages/MyAgainList";
import RestaurantMap from "./pages/RestaurantMap";
import SimilarAgainList from "./pages/SimilarAgainList";

// 네비게이션 바 나오는 페이지만 모아둔 곳
function Entring() {
  return (
    <>
      <BottomNavigation />
      <Routes>
        <Route path="/restaurant-map" element={<RestaurantMap />} />
        <Route path="/matzipList" element={<Matziplist />} />
        <Route path="/matzipDetail" element={<MatzipDetail />} />
        <Route path="/againList" element={<AgainList />} />
        <Route path="/myagainList" element={<MyAgainList />} />
        <Route path="/similaragainList" element={<SimilarAgainList />} />
        <Route path="/personalpage" element={<PersonalPage />} />
        <Route path="/muchagainList" element={<MuchAgainList />}></Route>
        <Route path="/best-restaurants" element={<BestRestaurants />}></Route>
        <Route path="/categories" element={<CategoryRestaurants />}></Route>
      </Routes>
    </>
  );
}

export default Entring;
