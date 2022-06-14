import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import { TextareaAutosize } from "@mui/base";
import { useRef } from "react";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [post, setPost] = useState({
    title: "",
    category: "",
  });

  const [image, setImage] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);

  const inputRef = useRef(null);
  const handleChange = (e) => {};

  const saveImage = (e) => {
    // image 미리보기
    const imageLists = e.target.files[0];
    let reader = new FileReader();

    if (imageLists) {
      reader.readAsDataURL(imageLists);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setPreviewImg([...previewImg, previewImgUrl]);
      }
    };

    if (previewImg.length >= 5) {
      previewImg.slice(0, 5);
      alert("그만! 6개면 충분해!");
    }

    // setPreviewImg(nowImageURLList);

    // image 업로드
    // const formData = new FormData();
    // console.log(nowUploadedImageList);
    // for(let i =0; )
    // formData.append("image", nowUploadedImageList[0]);
    // for (const keyvalue of formData) {
    //   console.log(keyvalue);
    // }

    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`image${i}`, files[i]);
    }
    formData.forEach((a) => console.log(a));
    setImage([...image, formData]);
  };
  const handleSubmit = (e) => {
    // const formData = new FormData();
    // formData.append("image", nowUploadedImageList[i]);
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <UploadStyle>
          <ColumnWrap>
            <ColumnLeft>
              <label htmlFor="input-file" onChange={saveImage}>
                이미지업로드
                <FileInput
                  type="file"
                  accept="image/*"
                  id="input-file"
                  multiple
                />
              </label>

              <ImageList
                sx={{ width: 500, height: 450 }}
                cols={3}
                rowHeight={164}
              >
                {previewImg.map((item, id) => (
                  <ImageListItem key={id}>
                    <img src={item} alt={item} loading="lazy" />
                  </ImageListItem>
                ))}
              </ImageList>
            </ColumnLeft>

            <ColumnRight>
              <Box sx={{ maxWidth: 150 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">장소</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="1"
                    label="장소"
                    onChange={handleChange}
                  >
                    <MenuItem value="1">실내</MenuItem>
                    <MenuItem value="2">실외</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextareaAutosize
                maxRows="4"
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="글을 써주세요."
                style={{ width: "100%", height: "70%", resize: "none" }}
              />
            </ColumnRight>
          </ColumnWrap>
        </UploadStyle>
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

const UploadStyle = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 500px;
`;

const ColumnWrap = styled.div`
  margin: 0 auto;
  height: 80%;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const FileInput = styled.input`
  cursor: pointer;
  width: 150px;
`;

const ColumnRight = styled.div`
  height: 100%;
  width: 45%;
  display: Flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ColumnLeft = styled.div`
  height: 100%;
  width: 45%;
  display: Flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageButton = styled.button`
  cursor: pointer;
  width: 45%;
  height: 100%;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  :hover {
    background-color: #dbdbdb;
  }
`;

const UploadFileInput = styled.input`
  display: inline-block;
  margin-bottom: 10px;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 100%;
  color: #999999;
`;

export default Upload;
