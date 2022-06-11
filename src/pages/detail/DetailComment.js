import styled from "styled-components";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import InputUnstyled from "@mui/base/InputUnstyled";
import "./detail.css";
import Divider from "../../elements/Divider";
import CommentsList from "./CommentsList";

const DetailComment = () => {
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
      <CommentForm>
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
        />
      </CommentForm>
      <CommentsList />
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

export default DetailComment;
