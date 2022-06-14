import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import "./board.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Icon & material
import { Fade } from "react-slideshow-image";
import img1 from "./1.png";
import img2 from "./2.webp";
import img3 from "./3.png";
import img4 from "./4.jpeg";
import img5 from "./5.jpeg";
import BoardComment from "./BoardComment";

const fadeImages = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
  {
    url: img4,
  },
  {
    url: img5,
  },
];

const Board = (props) => {
  const [board, setBoard] = useState(null);
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
          <Fade className="slide-wrap">
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <img
                    src={fadeImage.url}
                    alt="images"
                    className="each-image"
                  />
                </div>
              </div>
            ))}
          </Fade>

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
  margin-bottom: 10px;
`;

const DetailInfoTextArea = styled.p`
  width: 100%;
  margin-bottom: 50px;
`;

// const CommentForm = styled.div`
// `;
export default Board;
