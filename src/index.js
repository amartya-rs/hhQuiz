import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme-context";
import { DataProvider } from "./context/data-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <ThemeProvider>
            <DataProvider>
               <App />
            </DataProvider>
         </ThemeProvider>
      </BrowserRouter>
   </React.StrictMode>
);
