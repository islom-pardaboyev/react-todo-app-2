import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { TodoContext } from "./Contexts/Context.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer.jsx";

library.add(fas);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <TodoContext>
      <App />
    </TodoContext>
    <Footer/>
  </>
);
