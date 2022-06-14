import { Token } from "@mui/icons-material";
import axios from "axios";
import React from "react";
import {useNavigate} from "react-router-dom";


// import { useDispatch } from "react-redux";
// import "./Login.css"
import styled from "styled-components";


function Login() {
  const navigate = useNavigate();


  const [loginInfo, setLoginInfo] = React.useState({
    useremail: "",
    password: "",
  });

  const{ useremail, password} = loginInfo;
 
  const handleChange = (e) => {
    e.preventDefault();
    const {value, name} = e.target;
    setLoginInfo({...loginInfo, [name]: value});
    // console.log(setLoginInfo); //password
    console.log(e.target.value);
  };


  //e.preventDefault(); 
  //   // 추가 코드를 작성하여 DB를 제어하거나 state를 변경할 수 있습니다! 
  const handleAction = (e) => {

    e.preventDefault();
    // navigate("/main")
  
    axios({
      method: 'post',
      headers: {
            'Authorization': localStorage.getItem('jwt-token'),
          },
      url: 'http://3.39.223.175/api/user/signin', 
      data: {
        useremail: loginInfo.useremail,
        password: loginInfo.password
      }
    })
    .then((response) => {
        console.log(response);
        // console.log("data.token:", response.data.token);
        localStorage.setItem('jwt-token', response.data.token);
        window.location.replace("/main")
        // navigate("/main")
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log('에러1');
          // console.log(error.response.headers);
        }
        else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
          console.log('에러2');
        }
        else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log('Error', error.message);
          console.log('에러3');
        }
        console.log(error.config);
        console.log('에러4');
      });
   
  };

  
    //입력 값 정합성 체크 후 login API 요청
    //form tag에 재렌더링 막을 메서드 추가한 함수를 붙여줌
  return (
    <MyDiv>
      <MyH1>Show me your space</MyH1>
      <form  onSubmit={handleAction}>
        <MyUl>
          <MyLi>
            <hr />
            <InputDiv>
              <MyInput
              defaultValue={loginInfo.useremail}
              //name은 key값
              name = "useremail"
                onChange={handleChange}
                // id="user_id"
            
                // onChange={onChangeId}
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
