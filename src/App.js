import logo from "./logo.svg";
import "./App.css";
import React, { Component, Fragment, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    // <>
    //   <NavBar />
    //   <routes>

    //   </routes>
    //   <News
    //     pageSize={12}
    //     country="in"
    //     apiKey="e370df607a98405595147b00e0ff51a0"
    //     category="sports"
    //   />
      
    // </>
   
    <BrowserRouter>
        <NavBar />
        
        <Routes>
        <Route
              exact
              path="/"
              element={<News apiKey="e370df607a98405595147b00e0ff51a0" key="general" pageSize={12} country="in" category="general"/>}
            />
            <Route
              exact
              path="/business"
              element={<News apiKey="e370df607a98405595147b00e0ff51a0" key="business" pageSize={12} country="in" category="business"/>}
            />
            <Route
              exact
              path="/entertainment"
              element={<News apiKey="e370df607a98405595147b00e0ff51a0" key="entertainment" pageSize={12} country="in" category="entertainment"/>}
            />
             <Route
              exact
              path="/health"
              element={<News apiKey="e370df607a98405595147b00e0ff51a0" key="health" pageSize={12} country="in" category="health"/>}
            />
            <Route
              exact
              path="/science"
              element={<News apiKey="e370df607a98405595147b00e0ff51a0" key="science" pageSize={12} country="in" category="science"/>}
            />
             <Route
              exact
              path="/sports"
              element={<News apiKey="e370df607a98405595147b00e0ff51a0" key="sports" pageSize={12} country="in" category="sports"/>}
            />
            <Route
              exact
              path="/technology"
              element={<News apiKey="e370df607a98405595147b00e0ff51a0" key="technology" pageSize={12} country="in" category="technology"/>}
            />
        </Routes>
       
      </BrowserRouter>
    
    
  );
}

export default App;
