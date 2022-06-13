import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle className="header">
      <NavLeft>
        <HeaderTitle>Show me your space</HeaderTitle>
      </NavLeft>
      <NavRight>
        <ButtonRight className="button is-white">Post</ButtonRight>
        <ButtonRight className="button is-white">Signup</ButtonRight>
        <ButtonRight className="button is-white">Login</ButtonRight>
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
