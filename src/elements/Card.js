import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

const Card = ({ boardId, content, image1, nickname }) => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate(`/board/${boardId}`);
  };
  return (
    <CardStyle>
      <UserMetaInfo>
        <AccountCircleIcon style={{ width: "32px", height: "32px" }} />
        <UserNickname>{nickname}</UserNickname>
      </UserMetaInfo>

      <CardImage
        onClick={handleImageClick}
        className="img"
        src={image1}
      ></CardImage>

      <CardAction>
        <ActionWrapper>
          <BookmarkBorderIcon />
          <span>12</span>
        </ActionWrapper>
        <ActionWrapper>
          <FavoriteBorderIcon />
          <span>14</span>
        </ActionWrapper>
      </CardAction>

      <CardText>{content}</CardText>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  height: 390px;
  margin: 0px auto;
  margin-top: 60px;
  width: 250px;
  padding: 0px 20px;
`;

const UserMetaInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

const UserNickname = styled.div`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
`;

const CardImage = styled.img`
  height: 210px;
  background-color: grey;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    filter: blur(radius);
  }
`;

const CardAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 13px 0px;
`;

const CardText = styled.div`
  margin-top: 12px;
  margin: 0px;
`;

export default Card;
