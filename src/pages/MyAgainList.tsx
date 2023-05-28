import React from "react";
import { useLocation } from "react-router-dom";
import CommonAgainListContainer from "../components/againList/CommonAgainListContainer";
import MyAgainListTable from "../components/againList/MyAgainListTable";

function MyAgainList() {
  const location = useLocation();
  const stores = location.state.stores;

  return (
    <>
      <CommonAgainListContainer
        stores={stores}
        title="내가 또갈집"
        Component={MyAgainListTable}
      />
    </>
  );
}

export default MyAgainList;
