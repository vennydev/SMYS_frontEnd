import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Card from "../elements/Card";
import Header2 from "../components/Header2";
import Grid from "@mui/material/Grid";
import axios from "axios";
// import { set } from "immer/dist/internal";

const Main = () => {
  const [posts, setPosts] = useState(null);
  // const [index, setIndex] = useState( category1, category2);
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get("http://3.39.223.175/api/board");
        setPosts(response.data.boards);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBoards();
  }, []);
  return (
    <>
      <SubmitAll>
        <Button onClick={category} type="submit" value="전체" />
        <Button onClick={category1} type="submit" value="실내" />
        <Button onClick={category2} type="submit" value="실외" />
      </SubmitAll>

      <MypageStyle>
        <GridContainer>
          {posts &&
            posts.map((post, id) => {
              return (
                <GridItem key={id}>
                  <Card
                    boardId={post.boardId}
                    title={post.title}
                    content={post.content}
                    category={post.category}
                    nickname={post.nickname}
                    image1={post.image1}
                  />
                </GridItem>
              );
            })}
        </GridContainer>
      </MypageStyle>
    </>
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

//header 2
const SubmitAll = styled.div`
  margin: 10px auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const Button = styled.input`
  background-color: white;
  border-radius: 4px;
  border: none;
  color: grey;
  width: 150px;
  margin: 20px;
  height: 30px;
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: rgb(249, 246, 250);
  }
`;

export default Main;
