import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

// import Components
// import HeaderLogOn from "./components/HeaderLogOn";
import HeaderLogOff, { HeaderLogOn } from "./components/HeaderLogOff";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Board from "./pages/board/Board";
import Detail from "./pages/Detail";
import Post from "./pages/Post";




function App() {
  const [is_login, setIsLogin] = useState(false);


  // const token = localStorage.getItem('jwt-token')
  // console.log("token : ", token);


  useEffect (() => {
    const token = localStorage.getItem('jwt-token')
    console.log(token);

    token==null?setIsLogin(false):setIsLogin(true)
  }, []);



  return (
    <div>
      <Routes>
        {is_login ? (
          <Route path="/" element={<HeaderLogOn />}>
            {/* 메인페이지 */}
            <Route path="main" element={<Main />} />

            {/* 게시물 올리기 페이지 */}
            <Route path="post" element={<Post />} />

            {/* 게시글 상세 조회 페이지 - 게시물 id parameter 필요*/}
            <Route path="board" element={<Board />} />

            {/* 마이페이지 - 유저 id parameter 필요*/}
            <Route path="mypage" element={<Mypage />} />
          </Route>
        ) : (
          <Route path="/" element={<HeaderLogOff />}>
            <Route path="main" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        )}
      </Routes>
    </div>
  );


}

export default App;
