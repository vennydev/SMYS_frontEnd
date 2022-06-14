import styled from "styled-components";
import { useState } from "react";
import location from "react-route/lib/location";
import { useNavigate } from "react-router-dom";
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

const Post = () => {
  const [imageFile, setImageFile] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);
  const [post, setPost] = useState({
    title: "",
    category: "",
    content: "",
    image: {},
  });
  const { title, category, content, image } = post;
  const navigate = useNavigate();

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
      previewImg.slice(0, 4);
      alert("그만 올리세요!");
    }

    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`image${i}`, files[i]);
      console.log(formData);
      setImageFile([...imageFile, formData]);
    }
    console.log(imageFile);
    // formData.forEach((a, id) => console.log(a));
  };
  console.log(post);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (post && image) {
      if (post.title && post.category && post.content) {
        alert("게시글 작성 완료");
        // navigate("/main");
        // setPost({
        //   title: "",
        //   category: "",
        //   content: "",
        // });
        // setImage([]);
      } else {
        alert("게시할 내용을 모두 채워주세요");
      }
    }
    // const formData = new FormData();
    // formData.append("image", nowPostedImageList[i]);
  };

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <PostStyle>
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
                  height: "50%",
                  resize: "none",
                  fontSize: "22px",
                  padding: "16.5px 14px",
                  boder: "#fff",
                }}
                onChange={handleChange}
              />
            </ColumnRight>
          </ColumnWrap>
        </PostStyle>
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

const PostStyle = styled.div`
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

const PostFileInput = styled.input`
  display: inline-block;
  margin-bottom: 10px;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 100%;
  color: #999999;
`;

export default Post;
