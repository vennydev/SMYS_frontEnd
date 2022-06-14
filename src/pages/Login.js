import { Token } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import "./Login.css"
import styled from "styled-components";

function Login() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = React.useState({
    useremail: "",
    password: "",
  });

  const { useremail, password } = loginInfo;

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleAction = (e) => {
    navigate("/");
    e.preventDefault();

    axios({
      method: "post",
      headers: {
        Authorization: localStorage.getItem("jwt-token"),
      },
      url: "http://3.39.223.175/api/user/signin",
      data: {
        useremail: loginInfo.useremail,
        password: loginInfo.password,
      },
    })
      .then((response) => {
        localStorage.setItem("jwt-token", response.data.token);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log("에러1");
        } else if (error.request) {
          console.log(error.request);
          console.log("에러2");
        } else {
          console.log("Error", error.message);
          console.log("에러3");
        }
        console.log(error.config);
        console.log("에러4");
      });
  };

  return (
    <MyDiv>
      <MyH1>Show me your space</MyH1>
      <form onSubmit={handleAction}>
        <MyUl>
          <MyLi>
            <hr />
            <InputDiv>
              <MyInput
                defaultValue={loginInfo.useremail}
                name="useremail"
                onChange={handleChange}
                placeholder="e-mail을 입력해주세요"
                autoComplete="on"
                required
              />
            </InputDiv>
          </MyLi>

          <MyLi>
            <InputDiv>
              <MyInput
                defaultValue={loginInfo.password}
                name="password"
                onChange={handleChange}
                // id="user_pwd"

                // onChange={onChangePwd}
                placeholder="비밀번호를 입력해주세요"
                type="password"
                required
                autoComplete="on"
              />
            </InputDiv>
          </MyLi>
        </MyUl>
        <SubmitInput input type="submit" value="로그인" />
      </form>
    </MyDiv>
  );
}

export const MyDiv = styled.div`
  padding: 0px;
  text-align: center;
  height: 500px;
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
  cursor: pointer;
`;

export default Login;
