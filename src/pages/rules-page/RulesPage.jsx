import { useNavigate } from "react-router-dom";
import "./rules-page.css";

const RulesPage = () => {
   const navigate = useNavigate();

   return (
      <div className="rules-page">
         <h2>Rules</h2>
         <h3>Before starting please, read the rules carefully</h3>
         <ul className="h5 font-semibold mt-4">
            <li>You will face 5 Questions</li>
            <li>
               The right answer will add 2 points while wrong answer will deduct
               1 point
            </li>
            <li>
               To clear the Quiz, you will have to answer all questions
               correctly
            </li>
         </ul>
         <button
            onClick={() => navigate("/quiz")}
            className="button primary my-5 h6 font-medium"
         >
            LET'S BEGIN
         </button>
      </div>
   );
};

export { RulesPage };
