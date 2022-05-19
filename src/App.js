import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, TopNav } from "./components";
import { useTheme } from "./context/theme-context";
import {
   HomePage,
   RulesPage,
   QuizPage,
   ResultPage,
   Page404,
   CategoryQuizPage,
} from "./pages/index";

function App() {
   const { theme } = useTheme();

   return (
      <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
         <TopNav />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<CategoryQuizPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/:category/quiz" element={<QuizPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="*" element={<Page404 />} />
         </Routes>
         <Footer />
      </div>
   );
}

export { App };
