import "./result-page.css";
import { useData } from "../../context/data-context";
import { Loader } from "../../utils/Loader";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
   const {
      state: { quizData, currentCategory, userAnswer, isLoading },
   } = useData();
   const navigate = useNavigate();

   const questionID = quizData && Object.keys(quizData?.[currentCategory].data);

   const calculateScore = () => {
      let score = 0;
      userAnswer.length !== 0 &&
         questionID.forEach((ele) => {
            return userAnswer.find(
               (ans) =>
                  ans.answer ===
                  quizData?.[currentCategory]?.data?.[ele]?.correctAnswer
            )
               ? (score += 2)
               : score--;
         });
      return score;
   };

   const resultOption = (val) => {
      const correctAnswers = questionID.map(
         (ele) => quizData?.[currentCategory]?.data?.[ele]?.correctAnswer
      );

      if (correctAnswers.includes(val)) {
         return "success";
      }
      if (userAnswer.find((ele) => ele.answer === val)) {
         return "danger";
      }

      return "outline-primary";
   };

   return (
      <>
         {isLoading ? (
            <div className="loader-wrapper">
               <Loader loading={isLoading} />
            </div>
         ) : (
            <main className="result-page">
               <section>
                  <h3 className="font-medium">{`Your total score is: ${
                     quizData && calculateScore()
                  }`}</h3>
               </section>
               <>
                  {questionID &&
                     questionID?.map((ele, index) => (
                        <section key={index} className="quiz-details">
                           <h5>
                              {`${ele.toUpperCase()}. ${
                                 quizData?.[currentCategory]?.data?.[ele]?.text
                              }`}
                           </h5>
                           <div className="quiz-options">
                              {quizData?.[currentCategory]?.data?.[
                                 ele
                              ]?.options.map((ele, index) => (
                                 <button
                                    value={ele}
                                    key={index}
                                    className={`button ${resultOption(ele)}`}
                                 >
                                    {ele}
                                 </button>
                              ))}
                           </div>
                        </section>
                     ))}
                  <button
                     className="button primary mt-4"
                     onClick={() => navigate("/")}
                  >
                     TRY OTHER QUIZZES
                  </button>
               </>
            </main>
         )}
      </>
   );
};

export { ResultPage };
