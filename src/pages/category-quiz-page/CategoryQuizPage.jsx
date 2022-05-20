import { useNavigate, useParams } from "react-router-dom";
import { QuizCard } from "../../components";
import { useData } from "../../context/data-context";
import { Loader } from "../../utils/Loader";
import { firstCharToCaps } from "../../utils/firstCharToCaps";
import "./category-quiz-page.css";

const CategoryQuizPage = () => {
   const { category } = useParams();
   const navigate = useNavigate();
   const {
      state: { quizData, isLoading },
      dispatch,
   } = useData();

   const quizToShow = (quizData) => {
      const filteredQuizData = [];
      for (const key in quizData) {
         if (quizData?.[key]?.category.toLowerCase() === category) {
            filteredQuizData.push({ category: key, data: quizData?.[key] });
         }
      }
      return filteredQuizData;
   };

   const redirect = (value) => {
      dispatch({ type: "SET_CURRENT_CATEGORY", payload: value });
      localStorage.setItem("currentCategory", value);
      navigate("/rules");
   };

   return (
      <>
         {isLoading ? (
            <div className="loader-wrapper">
               <Loader loading={isLoading} />
            </div>
         ) : (
            <main className="all-quiz-page my-1">
               <h5>{`${firstCharToCaps(category)} Quizzes`}</h5>
               <div className="category-wrapper mt-4">
                  {quizToShow(quizData)?.map(({ category, data }, index) => (
                     <QuizCard
                        key={index}
                        imgUrl={data.url}
                        category={category}
                        redirect={() => redirect(category)}
                     />
                  ))}
               </div>
            </main>
         )}
      </>
   );
};

export { CategoryQuizPage };
