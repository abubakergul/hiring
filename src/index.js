import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ClientContextProvider } from "./component/store/client-context";

ReactDOM.render(
  <React.StrictMode>
    <ClientContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClientContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
