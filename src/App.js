import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Mypage from "./pages/Mypage";
// import Upload from "./pages/Upload";
// import Detail from "./pages/detail/Detail";

// Elements
function App() {
  return (
    <div className="App">
      <Header />
      <Mypage />
    </div>
  );
}

export default App;
