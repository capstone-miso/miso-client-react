import React from "react";
import MuchAgainListContainer from "../components/againList/MuchAgainListContainer";
import { useLocation} from "react-router-dom";
import { Store } from "../models/Store";

function MuchAgainList() {
  const location=useLocation();
  const stores=location.state.stores
  return (
    <>
      <MuchAgainListContainer stores={stores}/>
    </>
  );
}

export default MuchAgainList;
