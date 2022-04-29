import { Link } from "react-router-dom";
import "./top-nav.css";
//import { useAuth } from "../../context/auth-context";

const TopNav = () => {
   return (
      <>
         <nav className="main-nav">
            <Link to="/">
               <span className="h5 brand">hhQuiz</span>
            </Link>
         </nav>
      </>
   );
};

export { TopNav };
