import { BrowserRouter, Routes, Route, withRouter } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";

// import Components
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Upload from "./pages/Upload";
import Detail from "./pages/detail/Detail";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const [is_login, setIsLogin] = useState(false);

  // 토큰 유무에 따라 login 상태값 변경
  // const checkLogin = (토큰안에무언가) => {
  //   if (토큰안에무언가) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // };

  return (
    <div>
      <Signup />
    </div>
  );
}

export default App;
