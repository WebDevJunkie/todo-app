import React, { Fragment } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Fragment>
      <h1>
        Todo App
      </h1>
      <TodoList />
    </Fragment>
  );
}

export default App;
