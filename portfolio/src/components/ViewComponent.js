import React from "react";

import {Routes, Route, Link} from "react-router-dom";

// Tutorial
// import Tutorial from "../components/tutorial/Tutorial";
import TodoList from "../components/todoList/TodoList";

// TodoList

const ViewComponent = () => {
  return (
    <div className="view">
      <div className="view__header">
        <nav>
          {/* <Link to="/tutorial/">Tutorial</Link> */}
          <Link to="/todoList/">TodoList</Link>
        </nav>
      </div>
      <div className="view__wrap">
      <Routes>
        {/* <Route path="/tutorial/" element={<Tutorial />}></Route> */}
        <Route path="/todoList/" element={<TodoList />}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default ViewComponent;