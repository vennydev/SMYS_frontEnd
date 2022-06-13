import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Signup() {
  const [userInfo, setUserInfo] = useState({
    useremail: "",
    password: "",
    nickname: "",
  });

  const { useremail, nickname, password } = userInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5009/user-info", userInfo);
  };

  return (
    <MyDiv>
      <MyH1>Show me your space</MyH1>
      <form onSubmit={handleSubmit}>
        <MyUl>
          <MyLi>
            {/* <MyLabel htmlFor="user_id">아이디:</MyLabel> */}
            <hr />
            <InputDiv>
              <MyInput
                defaultValue={useremail}
                placeholder="e-mail을 입력해주세요"
                onChange={handleChange}
                name="useremail"
                required
              />
            </InputDiv>
          </MyLi>
          <MyLi>
            {/* <MyLabel htmlFor="user_id">아이디:</MyLabel> */}
            <hr />
            <InputDiv>
              <MyInput
                defaultValue={nickname}
                placeholder="nickname을 입력해주세요"
                onChange={handleChange}
                name="nickname"
                required
              />
            </InputDiv>
          </MyLi>{" "}
          <MyLi>
            {/* <MyLabel htmlFor="user_id">아이디:</MyLabel> */}
            <hr />
            <InputDiv>
              <MyInput
                defaultValue={password}
                placeholder="비밀번호를 입력해주세요"
                onChange={handleChange}
                name="password"
                type="password"
                required
              />
            </InputDiv>
          </MyLi>
          {/* <MyLi>
            <InputDiv>
              <MyInput
                id="user_pwd"
                // value={pwd}
                // onChange={onChangePwd}
                placeholder="비밀번호를 확인해주세요"
                type="password"
                required
              />
            </InputDiv>
          </MyLi> */}
        </MyUl>
        <SubmitInput type="submit" value="회원가입" />
      </form>
    </MyDiv>
  );
}

export const MyDiv = styled.div`
  padding: 0px;
  text-align: center;
  height: 570px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 100px auto;
  border: 1px solid #fdda68;
  border-radius: 10px;
`;
export const MyH1 = styled.h1`
  font-family: "Kdam Thmor Pro", sans-serif;
  color: #8873f0;
  font-size: 35px;
  padding: 30px;
  margin-top: -20px;
`;
export const MyUl = styled.ul`
  list-style: none;
  padding: 50px;
`;
export const MyLi = styled.li`
  width: 400px;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 0 auto;
`;
export const InputDiv = styled.div`
  width: 270px;
  height: 40px;
  margin: 3px;
  padding: 0px;
  display: block;
`;
export const MyInput = styled.input`
  width: 300px;
  height: 37px;
  margin-left: 21px;
  align-items: center;

  :focus {
    padding: 13px;
    border: 0.5px solid #8a8a8a;
    border-radius: 3px;
    width: 0px auto;
    outline: none;
  }
  ::placeholder {
    width: 300px;
    font-size: 15px;

    color: #8e8e8e;
  }
`;

export const MyLabel = styled.label`
  margin-right: 40px auto;
  height: 30px;
`;
export const SubmitInput = styled.input`
  background-color: #8873f0;
  border: none;
  color: white;
  width: 300px;
  height: 45px;
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  transition: all 0.2s linear;
  :hover {
    background-color: silver;
  }
  cursor: pointer;
`;

export default Signup;
