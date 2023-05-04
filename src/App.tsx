import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import theme from "./constants/theme";
import Matziplist from "./pages/matziplist";
import RestaurantMap from "./RestaurantMap";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<RestaurantMap />}></Route>
          <Route path="/matzipList" element={<Matziplist />}></Route>
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
