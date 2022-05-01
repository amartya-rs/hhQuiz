import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, TopNav } from "./components";
import { HomePage } from "./pages/index";

function App() {
   return (
      <div className="App">
         <TopNav />
         <Routes>
            <Route path="/" element={<HomePage />} />
         </Routes>
         <Footer />
      </div>
   );
}

export { App };
