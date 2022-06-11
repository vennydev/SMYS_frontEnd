import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Upload from "./pages/Upload";
// import Detail from "./pages/detail/Detail";

// Elements
function App() {
  return (
    <div className="App">
      <Header />
      <Upload />
      {/* <Detail /> */}
    </div>
  );
}

export default App;
