import { Link, useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon, UserIcon, LogoutIcon } from "../../assets/icons";
import { useAuth } from "../../context";
import { useTheme } from "../../context/theme-context";
import "./top-nav.css";

const TopNav = () => {
   const { theme, setTheme } = useTheme();
   const {
      logoutHandler,
      authState: { isLoggedIn },
   } = useAuth();
   const navigate = useNavigate();

   return (
      <nav className="main-nav">
         <Link to="/">
            <span className="h5 brand">hhQuiz</span>
         </Link>
         <ul className="link-wrapper">
            <li>
               {theme === "light" ? (
                  <MoonIcon onClick={() => setTheme("dark")} />
               ) : (
                  <SunIcon onClick={() => setTheme("light")} />
               )}
            </li>
            <li>
               {isLoggedIn ? (
                  <LogoutIcon onClick={logoutHandler} />
               ) : (
                  <UserIcon onClick={() => navigate("/login")} />
               )}
            </li>
         </ul>
      </nav>
   );
};

export { TopNav };
