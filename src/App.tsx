import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import RestaurantMap from './RestaurantMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/test' element={<RestaurantMap />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;