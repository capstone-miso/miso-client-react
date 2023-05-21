import { useEffect, useRef } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    naver: any;
  }
}

const NaverLogin = () => {
  const naverRef = useRef<HTMLDivElement>(null);
  const { naver } = window;

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      // clientId: NAVER_CLIENT_ID,
      // callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 58 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  const userAccessToken = () => {
    window.location.href.includes("access_token") && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split("=")[1].split("&")[0];
    // Do something with the token
  };

  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  const handleNaverLogin = () => {
    (naverRef.current as HTMLDivElement)?.click();
  };

  return (
    <>
      <NaverIdLogin ref={naverRef} id="naverIdLogin" />
      <NaverLoginBtn onClick={handleNaverLogin}>
        <NaverIcon alt="navericon" />
        <NaverLoginTitle>네이버로 로그인</NaverLoginTitle>
      </NaverLoginBtn>
    </>
  );
};

const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled.button`
  display: flex;
  align-items: center;
  width: 360px;
  height: 56px;
  background-color: #03c75a;
  border-radius: 6px;
`;

const NaverIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background: url("/images/Login/navericon.png") no-repeat center;
  background-size: 30px;
`;

const NaverLoginTitle = styled.span`
  margin-left: 90px;
  color: ${({ theme }) => theme.White};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export default NaverLogin;
