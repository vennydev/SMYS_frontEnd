import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import location from "react-route/lib/location";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../shared/firebase";
import axios from "axios";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextareaAutosize } from "@mui/base";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { TextField } from "@mui/material";
import { Update } from "@mui/icons-material";

const Post = () => {
  const [previewURL, setPreviewURL] = useState([]);
  const [post, setPost] = useState({
    title: "",
    category: "",
    content: "",
    image1: "",
  });
  const imageRef = useRef(null);
  const { title, category, content } = post;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  // 이미지 미리보기
  // const preview = (selectedFile) => {
  //   if (!selectedFile) return false;
  //   const reader = new FileReader();
  //   const imgLabel = document.querySelector(".img_label");
  //   reader.onLoad = () => {
  //     console.log(reader.result);
  //     imgLabel.style.backgroundImage = `url(${reader.result})`;
  //   };
  //   reader.readAsDataURL(selectedFile[0]);
  // };

  const uploadFB = async (e) => {
    const selectedFile = e.target.files;
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${selectedFile[0].name}`),
      selectedFile[0]
    );
    const downloaded_URL = await getDownloadURL(
      ref(storage, `images/${selectedFile[0].name}`)
    );
    setPost({ ...post, image1: downloaded_URL });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentKey = localStorage.getItem("jwt-token");
    axios
      .post("http://3.39.223.175/api/board", post, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentKey}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("게시물 등록 완료");
    navigate("/main");
  };

  return (
    <PostStyle>
      <FormStyle encType="multipart/form-data" onSubmit={handleSubmit}>
        <ColumnWrap>
          <ColumnLeft>
            <Label
              htmlFor="input-file"
              onChange={uploadFB}
              ref={imageRef}
              className="img_label"
            >
              이미지업로드
              <FileInput
                multiple
                type="file"
                accept="image/*"
                id="input-file"
                style={{ display: "none" }}
              />
            </Label>
            {/* <ImageList
              sx={{ width: "100%", height: 350 }}
              cols={3}
              rowHeight={164}
            >
              {previewImg.map((item, id) => (
                <ImageListItem key={id}>
                  <img src={item} alt={item} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList> */}
          </ColumnLeft>

          <ColumnRight>
            <Box sx={{ maxWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">장소</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="장소"
                  value={category}
                  name="category"
                  onChange={handleChange}
                >
                  <MenuItem value={1} selected>
                    실내
                  </MenuItem>
                  <MenuItem value={2}>실외</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              placeholder="제목"
              name="title"
              value={title}
              onChange={handleChange}
            />

            <TextareaAutosize
              maxRows="4"
              aria-label="maximum height"
              placeholder="내용"
              name="content"
              value={content}
              style={{
                width: "100%",
                height: "100%",
                resize: "none",
                fontSize: "16px",
                padding: "16.5px 14px",
                border: "#fff",
              }}
              onChange={handleChange}
            />
          </ColumnRight>
        </ColumnWrap>
        <SubmitInput type="submit" value="게시물 등록"></SubmitInput>
      </FormStyle>
    </PostStyle>
  );
};

const PostStyle = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  width: 100%;
  max-width: 1000px;
  height: 600px;
`;

const FormStyle = styled.form`
  background-color: #e0e0e0;
  padding: 30px 10px;
  height: 100%;
`;

const ColumnWrap = styled.div`
  margin: 0 auto;
  height: 80%;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  background-color: #eaedef;
  cursor: pointer;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  color: #bcbcbc;
  :hover {
    background-color: #bcbcbc;
    color: white;
  }
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
  gap: 15px;
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

const SubmitInput = styled.input`
  display: inline-block;
  margin-bottom: 10px;
  margin-top: 50px;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  text-decoration: none;
  border: 1px solid #dddddd;
  width: 300px;
  cursor: pointer;
  background-color: #8873f0;
  transition: all 0.2s linear;
  position: relative;
  right: -50%;
  transform: translateX(-50%);
  border-radius: 4px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  :hover {
    background-color: silver;
  }
`;

export default Post;
