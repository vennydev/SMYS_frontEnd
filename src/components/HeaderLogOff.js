import React from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useCallback } from "react";

const HeaderLogOff = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderStyle className="header">
        <NavLeft>
          <HeaderTitle
            onClick={() => {
              navigate("/main");
            }}
          >
            Show me your space
          </HeaderTitle>
        </NavLeft>
        <NavRight>
          <ButtonRight
            className="button is-white"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </ButtonRight>
          <ButtonRight
            className="button is-white"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </ButtonRight>
        </NavRight>
      </HeaderStyle>
      <Outlet />
    </>
  );
};



const HeaderLogOn = () => {
  const navigate = useNavigate();
  const [, updateState] = React.useState();
  const forceUpdate = useCallback(()=> updateState({}),[]);

  console.log("rendering...");

  const logoutAction = (e) => {
    alert("로그아웃 되셨습니다")
    
    localStorage.removeItem('jwt-token')
    window.location.replace("/main")
    
  };
  return (
    <>
      <HeaderStyle className="header">
        <NavLeft>
          <HeaderTitle
            onClick={() => {
              navigate("/main");
            }}
          >
            Show me your space
          </HeaderTitle>
        </NavLeft>
        <NavRight>
          <ButtonRight
            className="button is-white"
            onClick={() => {
              navigate("/post");
            }}
          >
            Post
          </ButtonRight>
          <ButtonRight
            className="button is-white"
            onClick={() => {
              navigate("/mypage");
            }}
          >
            MyPage
          </ButtonRight>
          <ButtonRight
            className="button is-white"
            onClick={logoutAction}
          >
            LogOut
          </ButtonRight>
        </NavRight>
      </HeaderStyle>
      <Outlet />
    </>
  );
};

const HeaderStyle = styled.div`
  padding: 15px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0 3px 7px -2px gray;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  font-family: "Kdam Thmor Pro", sans-serif;
`;

const NavLeft = styled.div`
  cursor: pointer;
  padding: 4px 7px;
`;

const NavRight = styled.div`
  display: Flex;
  gap: 20px;
`;

const ButtonRight = styled.div`
  font-size: 13px;
`;

export default HeaderLogOff;
export { HeaderLogOn };

