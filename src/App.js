import logo from "./logo.svg";
import "./App.css";
import React, { Component, Fragment, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const apiKey = process.env.React_App_New_Api;

  return (
    <>
      <NavBar />
      <News
        pageSize={6}
        country="in"
        apiKey="e370df607a98405595147b00e0ff51a0"
        category="general"
      />
    </>
  );
}

export default App;
