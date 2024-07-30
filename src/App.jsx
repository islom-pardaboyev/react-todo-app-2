import React from "react";
import TodoForm from "./components/TodoForm";
import { TodoContext } from "./Contexts/Context";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-screen w-screen items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <h1 className="text-center text-white font-bold text-4xl my-5">👋 Welcome Todo</h1>
      <TodoContext>
        <TodoForm />
      </TodoContext>
      <Footer />
    </>
  );
}

export default App;
