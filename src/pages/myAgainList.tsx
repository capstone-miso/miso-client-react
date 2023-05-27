import React from "react";
import MyAgainListContainer from "../components/againList/MyAgainListContainer";
import { useLocation } from "react-router-dom";
import { Store } from "../models/Store";

function MyAgainList() {
  const location=useLocation();
  const stores=location.state.stores

  return (
    <>
      <MyAgainListContainer stores={stores}/>
    </>
  );
}

export default MyAgainList;
