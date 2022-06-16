import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import "./board.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router";

// Icon & material
import BoardComment from "./BoardComment";

const Board = (props) => {
  const [board, setBoard] = useState(null);
  const { state } = useLocation();
  console.log(state);
  const params = useParams();
  const boardId = Number(params.boardId);
  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await axios.get(
          `http://3.39.223.175/api/board/${boardId}`
        );
        console.log(response.data.boardfind);
        setBoard(response.data.boardfind);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBoard();
  }, []);

  return (
    <DetailStyle>
      {board && (
        <DetailLayout>
          <DetailImageWrap>
            <DetailImage src={board.image1} alt="" />
          </DetailImageWrap>
          <DetailInfoTitle>{board.title}</DetailInfoTitle>

          <DetailInfoTextArea name="" id="" cols="30" rows="10">
            {board.content}
          </DetailInfoTextArea>

          <BoardComment></BoardComment>
        </DetailLayout>
      )}
    </DetailStyle>
  );
};

const DetailStyle = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const DetailLayout = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 100%;
`;

const DetailInfoTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const DetailInfoTextArea = styled.p`
  width: 100%;
  margin-bottom: 50px;
`;
const DetailImageWrap = styled.div`
  width: 100%;
`;

const DetailImage = styled.img`
  width: 100%;
  background-size: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export default Board;
