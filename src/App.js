import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Components
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Upload from "./pages/Upload";
import Detail from "./pages/detail/Detail";

// import Elements

function App() {
  return (
    <div>
      <Login />
    </div>
    // <Routes>
    //   <Route path="/" element={<Main />}/ >
    //     <Route path="/login" element={<Login />} />
    //     <Route path="signup" element={<Signup />} />
    // </Routes>
  );
}

export default App;
