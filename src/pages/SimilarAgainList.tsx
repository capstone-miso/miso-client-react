import React from "react";
import { useLocation } from "react-router-dom";
import CommonAgainListContainer from "../components/againList/CommonAgainListContainer";
import SimilarAgainListTable from "../components/againList/SimilarAgainListTable";

function SimilarAgainList() {
  const location = useLocation();
  const stores = location.state.stores;
  return (
    <>
      <CommonAgainListContainer
        stores={stores}
        title="비슷한 또갈집"
        Component={SimilarAgainListTable}
      />
    </>
  );
}

export default SimilarAgainList;
