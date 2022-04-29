import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/data-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <DataProvider>
            <App />
         </DataProvider>
      </BrowserRouter>
   </React.StrictMode>
);
