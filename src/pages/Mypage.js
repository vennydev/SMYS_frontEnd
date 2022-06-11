import styled from "styled-components";
import Card from "../elements/Card";
import { useState } from "react";

const Mypage = () => {
  return (
    <div>
      <MypageStyle>
        <CategoryButtons>
          <CategoryButton>즐겨찾기</CategoryButton>
          <CategoryButton>내 게시물</CategoryButton>
        </CategoryButtons>

        <GridContainer>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
          <GridItem>
            <Card />
          </GridItem>
        </GridContainer>
      </MypageStyle>
    </div>
  );
};

const MypageStyle = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`;

const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryButton = styled.button`
  all: unset;
  width: 280px;
  text-align: center;
  box-shadow: 2px 2px 2px black;
  font-size: 14px;
  padding: 10px 0px;
  margin: 130px 40px 60px 40px;
  color: white;
  font-weight: 700;
  background-color: #8873f0;
  cursor: pointer;
  transition: all 0.2s linear;
  :hover {
    background-color: #9d90e5;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: stretch;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Mypage;
