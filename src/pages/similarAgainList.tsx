import React from "react";
import SimilarAgainListContainer from "../components/againList/SimilarAgainListContainer";
import { Store } from "../models/Store";
import { useLocation } from "react-router-dom";
function SimilarAgainList() {
  const location=useLocation();
  const stores=location.state.stores
  return (
    <>
      <SimilarAgainListContainer stores={stores}/>
    </>
  );
}

export default SimilarAgainList;
