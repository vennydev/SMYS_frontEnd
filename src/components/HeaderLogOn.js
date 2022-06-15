import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";

const HeaderLogOn = () => {
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
              navigate("/post");
            }}
          >
            Board
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
            onClick={() => {
              alert("로그아웃!");
            }}
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

export default HeaderLogOn;
