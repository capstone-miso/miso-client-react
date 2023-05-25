import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfterEntering from "./AfterEntering";
import "./App.css";
import theme from "./constants/theme";
import Main from "./pages/main";
import AgainList from "./pages/againList";
import Matziplist from "./pages/matziplist";
import RestaurantMap from './pages/RestaurantMap';
import BestRestaurants from './pages/BestRestaurants';
import MuchAgainList from "./pages/muchAgainList";
import MyAgainList from "./pages/myAgainList";
import SimilarAgainList from "./pages/similarAgainList";
import MatzipDetail from "./pages/MatzipDetail";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AfterEntering />} />
          <Route path="/" element={<Main />} />
          <Route path="/restaurant-map" element={<RestaurantMap />}></Route>
          <Route path="/best-restaurants" element={<BestRestaurants />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/matzipList" element={<Matziplist />}></Route>
          <Route path="/matzipDetail" element={<MatzipDetail />}></Route>
          <Route path="/againList" element={<AgainList />}></Route>
          <Route path="/myagainList" element={<MyAgainList />}></Route>
          <Route
            path="/similaragainList"
            element={<SimilarAgainList />}
          ></Route>
          <Route path="/muchagainList" element={<MuchAgainList />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
