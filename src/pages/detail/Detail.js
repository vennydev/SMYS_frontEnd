import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import "./detail.css";

import DetailComment from "./DetailComment";

// Icon & material
import { Fade } from "react-slideshow-image";
import img1 from "./1.png";
import img2 from "./2.webp";
import img3 from "./3.png";
import img4 from "./4.jpeg";
import img5 from "./5.jpeg";

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

const Detail = () => {
  return (
    <DetailStyle>
      <DetailLayout>
        <Fade className="slide-wrap">
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.url} alt="images" className="each-image" />
              </div>
            </div>
          ))}
        </Fade>

        <DetailInfoTitle>Home sweet home</DetailInfoTitle>

        <DetailInfoTextArea name="" id="" cols="30" rows="10">
          병아리도 펭귄의 공통점은 조류이면서 귀엽다는 것 입니다
          <br /> 병아리 : 아직 다 자라지 않은 닭의 새끼로, 인간에 비유하면 대략
          아기에서 어린이 정도의 단계이다.
        </DetailInfoTextArea>

        <DetailComment></DetailComment>
      </DetailLayout>
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
export default Detail;
