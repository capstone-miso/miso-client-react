import axios from "axios";

const OauthDetection=()=>{
    let code = new URL(window.location.href).searchParams.get("code");
    axios.get("https://dishcovery.site/login/oauth2/code/kakao?code="+code).then((response)=>{
        console.log(response)
    })
    return(
        <div>{code}</div>
    )
}
export default OauthDetection