import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfterEntering from "./AfterEntering";
import "./App.css";
import theme from "./constants/theme";
import Main from "./pages/main";
import MuchAgainList from "./pages/muchAgainList";
import OauthDetection from "./pages/OauthDetection";
import SimilarAgainList from "./pages/similarAgainList";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AfterEntering />} />
          <Route path="/" element={<Main />} />
          <Route
            path="/similaragainList"
            element={<SimilarAgainList />}
          ></Route>
          <Route path="/muchagainList" element={<MuchAgainList />}></Route>
          <Route path="/auth" element={<OauthDetection />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
