import { useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";
import "./rules-page.css";

const RulesPage = () => {
   const navigate = useNavigate();
   const {
      state: { currentCategory },
   } = useData();

   return (
      <main className="rules-page">
         <h2>Rules</h2>
         <h3 className="mt-2">
            Before starting please, read the rules carefully
         </h3>
         <ul className="h5 font-semibold mt-4">
            <li>You will face 5 Questions</li>
            <li>
               The right answer will{" "}
               <span className="text-green">add 2 points</span> while wrong
               answer will <span className="text-red">deduct 1 point</span>
            </li>
            <li>
               To clear the Quiz, you will have to answer all questions
               correctly
            </li>
         </ul>
         <button
            onClick={() => navigate(`/${currentCategory.toLowerCase()}/quiz`)}
            className="button primary my-5 h6 font-medium"
         >
            LET'S BEGIN
         </button>
      </main>
   );
};

export { RulesPage };
