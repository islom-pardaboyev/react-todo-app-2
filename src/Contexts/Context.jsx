import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Context = createContext();

function TodoContext({ children }) {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );

  // save todo start
  function saveTodo(obj) {
    if (todos.some((todo) => todo.title === obj.title)) {
      toast.error("Todo already exists!");
    } else {
      setTodos([...todos, obj]);
      toast.success("Added todo!");
    }
  }
  // save todo end

  // delete todo start
  function deleteTodo(id) {
    const findedIndex = todos.findIndex((item) => item.id == id);
    todos.splice(findedIndex, 1);
    setTodos([...todos]);
    toast.error("Todo Deleted!");
  }
  // delete todo end

  // update todo start
  function updateTodo(id, newValue) {
    const updateObj = todos.find((item) => item.id == id);
    updateObj.title = newValue;
    toast.success("Todo Updated")
    setTodos([...todos]);
  }
  // update todo end


  // complated todo start
  function complatedTodo(id){
    const findedArray = todos.find((item) => item.id == id);
    findedArray.isComplated = !findedArray.isComplated
    setTodos([...todos]);
  }
  // complated todo end

  window.localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Context.Provider
        value={{ todos, setTodos, saveTodo, deleteTodo, updateTodo, complatedTodo }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export { Context, TodoContext };
