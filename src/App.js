import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Detail from "./pages/detail/Detail";

// Elements

function App() {
  return (
    <div className="App">
      <Header />
      <Detail />
      <Routes></Routes>
    </div>
  );
}

export default App;
