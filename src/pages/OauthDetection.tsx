import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const OauthDetection=()=>{
    const [Authorization,setAuthorization] = useState(new URL(window.location.href).searchParams.get("Authorization"));
    const [RefreshToken,setRefreshToken] = useState(new URL(window.location.href).searchParams.get("Refresh-Token"));

    if(Authorization!==null&&RefreshToken!==null){
        localStorage.setItem("Authorization",Authorization)
    }
    if(RefreshToken!==null){
        localStorage.setItem("RefreshToken",RefreshToken)
    }
    const navigate=useNavigate()
    const showStoreDetail= () =>{
        navigate({
          pathname: "../restaurant-map",
        })
        localStorage.setItem("path","/restaurant-map")
      }

    axios.get("https://dishcovery.site/api/preference",
        {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("Authorization")
            }
        }
    ).then((response)=>{
        if (response.status===200){
            showStoreDetail()
        }
    })


    return(
        <ClipLoader
        color="orange"
        loading={true}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

    )
}
export default OauthDetection