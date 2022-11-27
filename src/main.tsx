import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ModalProvider from "./context/modal.context";
import TaskProvider from "./context/tasks.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </ModalProvider>
  </React.StrictMode>
);
