import { Image } from "@chakra-ui/react";
import KakaoButton from "../../assets/kakao_login_large_wide.png";

const SocialKakao = () => {
  const Rest_api_key = "3faf877755ae0a70feb75a614cf2bbed"; // REST API KEY
  const redirect_uri = "https://dishcovery.site/login/oauth2/code/kakao"; // Redirect URI

  // OAuth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <Image
        w="340px"
        mt="300px"
        src={KakaoButton}
        alt="카카오로그인"
        onClick={handleLogin}
      />
    </>
  );
};

export default SocialKakao;
