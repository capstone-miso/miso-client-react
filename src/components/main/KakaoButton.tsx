import { Image } from "@chakra-ui/react";
import KakaoButton from "../../assets/kakao_login_large_wide.png";

const SocialKakao = () => {

  // OAuth 요청 URL
  const dishcoveryKakaoUrl = `https://dishcovery.site/oauth2/authorization/kakao`
  const handleLogin = () => {
    window.location.href = dishcoveryKakaoUrl;
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
