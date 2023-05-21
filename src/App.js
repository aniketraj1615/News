import logo from "./logo.svg";
import "./App.css";
import React, { Component, Fragment } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <News pageSize={6} country="in" category="health" />
    </>
  );
}

export default App;
