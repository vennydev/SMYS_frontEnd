import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Card from "../elements/Card";
import Header2 from "../components/Header2";
import Grid from "@mui/material/Grid";
import axios from "axios";

const Main = () => {
  const [posts, setPosts] = useState(null);
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
  console.log(posts);
  return (
    <>
      <Header2 />

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

export default Main;
