import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Shop from "./Components/Shop/Shop.jsx";

function App() {
  return (
    <>
      <Header/>
      <Shop/>
    </>
  );
}

export default App;
