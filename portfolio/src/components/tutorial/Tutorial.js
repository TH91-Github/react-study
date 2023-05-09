import React from "react";
import {Routes, Route, Link} from "react-router-dom";

// Tutorial Component
import Home from "./Home";
import About from "./About";
import Counter from "./Counter";
import Input from "./Input";
import Input2 from "./Input2";
import List from "./List";

const Tutorial = () => {
  return (
    <div className="tutorial">
      <h1>임시 기록용</h1>
      { /* Tutorial component */}
      <h1 className="tutorial-title">Tutorial component</h1>
      <nav className="tutorial__nav">
        <Link to="/tutorial/home">Home</Link> | 
        <Link to="/tutorial/about">About</Link> | 
        <Link to="/tutorial/counter">Counter</Link> | 
        <Link to="/tutorial/input">Input</Link> | 
        <Link to="/tutorial/input2">Input2</Link> | 
        <Link to="/tutorial/list">List</Link>
      </nav>
      <div className="tutorial__view-wrap">
        <Routes>
          <Route path="/tutorial/home" element={<Home />}></Route>
          <Route path="/tutorial/about" element={<About />}></Route>
          <Route path="/tutorial/counter" element={<Counter />}></Route>
          <Route path="/tutorial/input" element={<Input />}></Route>
          <Route path="/tutorial/input2" element={<Input2 />}></Route>
          <Route path="/tutorial/list" element={<List />}></Route>
        </Routes>
      </div>
    </div>
  )  
}
export default Tutorial;