import { Key } from "@mui/icons-material";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



const Header = () => {
  // if (
  //   window.location.pathname === "/login" ||
  //   window.location.pathname === "/signup"
  // )
    
const navigate= useNavigate();
const token = localStorage.getItem('jwt-token')
console.log(localStorage.getItem('jwt-token'));


  const logoutAction = (e) => {
    navigate("/")
    localStorage.removeItem('jwt-token')


  };




  return (
    <HeaderStyle className="header">
      <NavLeft>
        <HeaderTitle>Show me your space</HeaderTitle>
      </NavLeft>
      <NavRight>
        <ButtonRight className="button is-white">Post</ButtonRight>
        <ButtonRight 
        onClick={() => { navigate('/signup') }} className="button is-white">Signup</ButtonRight>
        <ButtonRight className="button is-white"
        onClick={() => { navigate('/login') }}>Login</ButtonRight>
        <ButtonRight className="button is-white"
        onClick={logoutAction}>Logout</ButtonRight>
      </NavRight>
    </HeaderStyle>
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

export default Header;
