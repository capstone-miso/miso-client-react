import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfterEntering from "./AfterEntering";
import "./App.css";
import theme from "./constants/theme";
import Main from "./pages/main";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AfterEntering />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
