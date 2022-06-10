import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Card = () => {
  return (
    <CardStyle>
      <UserMetaInfo>
        <AccountCircleIcon style={{ width: "32px", height: "32px" }} />
        <UserNickname>병아리콩</UserNickname>
      </UserMetaInfo>
      <div></div>

      <CardImage className="img"></CardImage>

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

      <CardText>
        싱그러운 초록이들과 화이트 침구로 시원한 침실분위기로 바꿔봤어요~~ 밝은
        그린
      </CardText>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  height: 300px;
  max-width: 200px;
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

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: grey;
  border-radius: 4px;
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
