import styled from "styled-components";
import { Avatar } from "@mui/material";

const CommentsList = () => {
  return (
    <CommentsListStyle>
      <Comment>
        <strong>이형섭섭</strong>
        <div>오 처음 알았어요</div>
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

const CommentsListStyle = styled.ul``;

const Comment = styled.li`
  padding-left: 55px;
  position: relative;
`;

// const DetailCommentStyle = styled.div``;

export default CommentsList;
