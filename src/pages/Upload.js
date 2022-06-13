import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import { TextareaAutosize } from "@mui/base";

import { useState } from "react";

const Upload = () => {
  const [space, setSpace] = useState("");

  const handleChange = (event) => {
    setSpace(event.target.value);
  };

  return (
    <UploadStyle>
      <ColumnWrap>
        <ColumnLeft>
          <span>사진 올리기</span>
        </ColumnLeft>
        <ColumnRight>
          <Box sx={{ maxWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">장소</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={space}
                label="장소"
                onChange={handleChange}
              >
                <MenuItem value={1}>실내</MenuItem>
                <MenuItem value={2}>실외</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextareaAutosize
            maxRows={4}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
            style={{ width: "100%", height: "70%", resize: "none" }}
          />
        </ColumnRight>
      </ColumnWrap>
      <Some></Some>
    </UploadStyle>
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

const ColumnLeft = styled.div`
  cursor: pointer;
  width: 45%;
  height: 100%;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #dbdbdb;
  }
`;

const ColumnRight = styled.div`
  height: 100%;
  width: 45%;
  display: Flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Some = styled.div``;

export default Upload;
