import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Components
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
// import Elements

function App() {


  return (
    <Routes>

      <Route path="/" element={<Main />}/ >
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      

      
    </Routes>
  );
};

export default App;
