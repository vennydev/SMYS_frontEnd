import React from "react";
import styled from "styled-components";

import { SubmitInput } from "../pages/Login";

const Header2 = () => {
  return (
    <SubmitAll>
      <Button type="submit" value="전체" />
      <Button type="submit" value="실내" />
      <Button type="submit" value="실외" />
    </SubmitAll>
  );
};

const SubmitAll = styled.div`
  margin: 10px auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const Button = styled.input`
  background-color: white;
  border-radius: 8px;
  border: none;
  color: grey;
  width: 200px;
  margin: 20px;
  height: 43px;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: rgb(249, 246, 250);
  }
`;

export default Header2;
