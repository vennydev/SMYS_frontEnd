import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useMatch } from "react-router-dom";

function Signup() {
  const params = useMatch("/signup");
  const [userInfo, setUserInfo] = useState({
    useremail: "",
    nickname: "",
    password: "",
    checkpassword: "",
  });
  const navigation = useNavigate();
  const emailRef = useRef(null);
  const pwRef = useRef(null);
  const pw2Ref = useRef(null);

  // 이메일 유효성 검사
  const emailRegExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  // 비밀번호 유효성 검사
  const pwRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;

  const { useremail, nickname, password, checkpassword } = userInfo;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(useremail);
    if (emailRegExp.test(useremail)) {
      if (pwRegExp.test(password)) {
        alert("회원가입을 축하드립니다 :)");
        navigation("/login");
      } else {
        alert("8~15자 영문, 숫자를 조합해주세요 :(");
        pwRef.current.focus();
      }
    } else {
      alert("유효한 이메일 형식이 아닙니다 :(");
      emailRef.current.focus();
    }
  };

  axios.post("http://3.39.223.175/api/user/signup", userInfo);
  // alert("회원가입 성공!");

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
                placeholder="example@aaaa.com"
                onChange={handleChange}
                name="useremail"
                required
                ref={emailRef}
              />
            </InputDiv>
          </MyLi>
          <MyLi>
            {/* <MyLabel htmlFor="user_id">아이디:</MyLabel> */}
            <hr />
            <InputDiv>
              <MyInput
                defaultValue={nickname}
                placeholder="닉네임"
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
                placeholder="8-15자리의 영문, 특수문자, 숫자조합"
                onChange={handleChange}
                name="password"
                type="password"
                ref={pwRef}
                required
              />
            </InputDiv>
          </MyLi>
          <MyLi>
            <InputDiv>
              <MyInput
                defaultValue={checkpassword}
                onChange={handleChange}
                name="checkpassword"
                placeholder="비밀번호 확인"
                type="password"
                ref={pw2Ref}
                required
              />
            </InputDiv>
          </MyLi>
        </MyUl>
        <SubmitInput type="submit" value="회원가입" />
      </form>
    </MyDiv>
  );
}

const MyDiv = styled.div`
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
const MyH1 = styled.h1`
  font-family: "Kdam Thmor Pro", sans-serif;
  color: #8873f0;
  font-size: 35px;
  padding: 30px;
  margin-top: -20px;
`;
const MyUl = styled.ul`
  list-style: none;
  padding: 50px;
`;
const MyLi = styled.li`
  width: 400px;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 0 auto;
`;
const InputDiv = styled.div`
  width: 270px;
  height: 40px;
  margin: 3px;
  padding: 0px;
  display: block;
`;
const MyInput = styled.input`
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

const SubmitInput = styled.input`
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
