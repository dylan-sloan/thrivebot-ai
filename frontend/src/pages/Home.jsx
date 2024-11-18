import React from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainChatContainer";
import "../App.css";

function Home() {
  return (
    <div className="app">
      <Header />
      <MainContainer />
    </div>
  );
}

export default Home;
