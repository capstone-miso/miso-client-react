import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfterEntering from "./AfterEntering";
import "./App.css";
import theme from "./constants/theme";
import Main from "./pages/Main";
import MuchAgainList from "./pages/MuchAgainList";
import OauthDetection from "./pages/OauthDetection";
import SimilarAgainList from "./pages/SimilarAgainList";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AfterEntering />} />
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<OauthDetection />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
