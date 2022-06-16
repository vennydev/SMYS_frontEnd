import styled from "styled-components";
import { Avatar } from "@mui/material";

const CommentsList = ({ nickname, comment }) => {
  return (
    <CommentsListStyle>
      <Comment>
        <strong>{nickname}</strong>
        <div>{comment}</div>
        <Avatar
          style={{
            width: "35px",
            height: "35px",
            position: "absolute",
            top: "0",
            left: "0",
          }}
          src="/broken-image.jpg"
        />
      </Comment>
    </CommentsListStyle>
  );
};

const CommentsListStyle = styled.ul`
  border: 1px solid #eaedef;
  margin-bottom: 10px;
  padding: 4px;
`;

const Comment = styled.li`
  padding-left: 55px;
  position: relative;
`;

// const DetailCommentStyle = styled.div``;

export default CommentsList;
