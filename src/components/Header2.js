import { Category } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SubmitInput } from "../pages/Login";

const Header2 = () => {
  const [index, setIndex] = useState(null);

useEffect(() => {
  const fetchBoards = async() => {
    try {
      const response = await axios.get("http://3.39.223.175/api/board");
      setIndex(response.data.boards);

      for(let i in index) {
        console.log("category:", index[i].category);
      }

      console.log("index", index);

    } catch (e) {
      console.log(e);
    }
  };
  
  fetchBoards();
}, []);

// console.log("index:", index);

// const indexC = index.map(index.category => category);
// index.sort();
// console.log(index.sort(""));

// const indexcategory = () => {
//   {index &&
//     index.map((post, id) => {
//       return (
        
//             boardId={post.boardId},
//     })}
 
// }}
// console.log(indexcategory);

// console.log("index : ", index);
// console.log(index[0]);
// console.log(index[0].category);


  return (
    <SubmitAll>
      <Button 
      onClick={()=> {
        setIndex(0)}} type="submit" value="전체" />
      <Button
      onClick={()=> {setIndex(indexedDB)}} type="submit" value="실내" />
      <Button
      onClick={()=> {setIndex(2)}} type="submit" value="실외" />
    </SubmitAll>
  );
};

const SubmitAll = styled.div`
  margin: 10px auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const Button = styled.input`
  background-color: white;
  border-radius: 4px;
  border: none;
  color: grey;
  width: 150px;
  margin: 20px;
  height: 30px;
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: rgb(249, 246, 250);
  }
`;

export default Header2;
