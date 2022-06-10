import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

// import Components
import Header from "./components/Header";

// import Elements
import Card from "./elements/Card";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Card />
    </div>
  );
}

export default App;
