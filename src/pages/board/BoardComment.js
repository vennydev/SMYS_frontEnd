import styled from "styled-components";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import InputUnstyled from "@mui/base/InputUnstyled";
import "./board.css";
import Divider from "../../elements/Divider";
import CommentsList from "./CommentsList";
import { useState } from "react";

import { Button } from "@mui/material";
import { axios } from "axios";
import { useParams } from "react-router-dom";

const DetailComment = ({ boardId }) => {
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  const updateComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment === "") {
      alert("내용을 입력해주세요");
    }
    setCommentArray((commentValueList) => [...commentValueList, comment]);
    setComment("");
    axios.put(`http://3.39.223.175/api/board/${boardId}`);
  };
  return (
    <DetailCommentStyle>
      <Counts>
        <span>
          댓글 <Count>2</Count>
        </span>
        <span>
          좋아요 <Count>10</Count>
        </span>
      </Counts>
      <Divider />
      <CommentForm onSubmit={handleSubmit}>
        <TagFacesIcon
          style={{
            fontSize: "35px",
            color: "grey",
          }}
          className="face-icon"
        />
        <InputUnstyled
          style={{
            width: "100%",
          }}
          placeholder="댓글달기"
          type="text"
          value={comment}
          onChange={updateComment}
        ></InputUnstyled>
        <SubmitInput type="submit" value="게시물 등록"></SubmitInput>
      </CommentForm>
      {commentArray.map((comment) => {
        console.log(comment);
      })}
    </DetailCommentStyle>
  );
};

const DetailCommentStyle = styled.div``;

const Counts = styled.div`
  display: Flex;
  gap: 10px;
  color: #656e75;
  margin-bottom: 15px;
`;

const Count = styled.span`
  font-weight: 700;
`;

const CommentForm = styled.form`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const SubmitInput = styled.input`
  display: inline-block;
  height: 46px;
  padding: 0 10px;
  text-decoration: none;
  border: 1px solid #dddddd;
  cursor: pointer;
  background-color: #8873f0;
  transition: all 0.2s linear;
  border-radius: 4px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  :hover {
    background-color: silver;
  }
`;
export default DetailComment;
