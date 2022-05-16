import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "../../assets/icons";
import { useTheme } from "../../context/theme-context";
import "./top-nav.css";

const TopNav = () => {
   const { theme, setTheme } = useTheme();

   return (
      <nav className="main-nav">
         <Link to="/">
            <span className="h5 brand">hhQuiz</span>
         </Link>
         {theme === "light" ? (
            <MoonIcon onClick={() => setTheme("dark")} />
         ) : (
            <SunIcon onClick={() => setTheme("light")} />
         )}
      </nav>
   );
};

export { TopNav };
