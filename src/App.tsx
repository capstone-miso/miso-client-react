import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import theme from "./constants/theme";
import Matziplist from "./pages/matziplist";
import RestaurantMap from './pages/RestaurantMap';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/restaurant-map" element={<RestaurantMap />}></Route>
          <Route path="/matzipList" element={<Matziplist />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;