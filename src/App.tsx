import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import theme from "./constants/theme";
import AgainList from "./pages/againList";
import MatzipDetail from "./pages/matzipDetail";
import Matziplist from "./pages/matziplist";
import MuchAgainList from "./pages/muchAgainList";
import MyAgainList from "./pages/myAgainList";
import SimilarAgainList from "./pages/similarAgainList";
import RestaurantMap from "./RestaurantMap";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<RestaurantMap />}></Route>
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
}

// function App() {
//   return (
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/test" element={<RestaurantMap />}></Route>
//     //   </Routes>
//     // </BrowserRouter>
//     <ChakraProvider theme={theme}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </ChakraProvider>
//   );
// }

export default App;
