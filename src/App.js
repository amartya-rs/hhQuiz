import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, TopNav } from "./components";
import { HomePage, RulesPage, QuizPage } from "./pages/index";

function App() {
   return (
      <div className="App">
         <TopNav />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/quiz" element={<QuizPage />} />
         </Routes>
         <Footer />
      </div>
   );
}

export { App };
