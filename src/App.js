import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./context/theme-context";
import { Footer, TopNav, RestrictedRoute, PrivateRoute } from "./components";
import {
   HomePage,
   RulesPage,
   QuizPage,
   ResultPage,
   Page404,
   CategoryQuizPage,
   LoginPage,
   SignUpPage,
} from "./pages/index";

function App() {
   const { theme } = useTheme();

   return (
      <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
         <TopNav />
         <Routes>
            {/*public routes*/}
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<CategoryQuizPage />} />
            <Route path="*" element={<Page404 />} />
            {/*restricted routes*/}
            <Route element={<RestrictedRoute />}>
               <Route path="/login" element={<LoginPage />} />
               <Route path="/signup" element={<SignUpPage />} />
            </Route>
            {/*private routes*/}
            <Route element={<PrivateRoute />}>
               <Route path="/rules" element={<RulesPage />} />
               <Route path="/:category/quiz" element={<QuizPage />} />
               <Route path="/result" element={<ResultPage />} />
            </Route>
         </Routes>
         <Footer />
      </div>
   );
}

export { App };
