import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Appname></Appname>
      <AddTodo></AddTodo>
      <div className="items-container">
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
