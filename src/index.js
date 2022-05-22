import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, DataProvider, AuthProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthProvider>
            <ThemeProvider>
               <DataProvider>
                  <App />
               </DataProvider>
            </ThemeProvider>
         </AuthProvider>
      </BrowserRouter>
   </React.StrictMode>
);
