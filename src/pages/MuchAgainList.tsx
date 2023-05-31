import React from "react";
import { useLocation } from "react-router-dom";
import CommonAgainListContainer from "../components/againList/CommonAgainListContainer";
import MuchAgainListTable from "../components/againList/MuchAgainListTable";

function MuchAgainList() {
  const location = useLocation();
  const stores = location.state.stores;
  return (
    <>
      <CommonAgainListContainer
        stores={stores}
        title="많이 또갈집"
        Component={MuchAgainListTable}
      />
    </>
  );
}

export default MuchAgainList;
