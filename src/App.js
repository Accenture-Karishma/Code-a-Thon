import React from "react";
import Todo from "./components/todo/todo";
import "./App.css";

console.log("test");
function App() {
  return (
    <div className="App">
      <u>
        <h1>TODO LIST</h1>
      </u>
      <Todo label="add"></Todo>
    </div>
  );
}

export default App;
