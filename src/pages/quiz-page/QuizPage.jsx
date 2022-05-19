import { useData } from "../../context/data-context";
import { LeftArrow, RightArrow } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "../../context/theme-context";
import { Loader } from "../../utils/Loader";
import "./quiz-page.css";

export const QuizPage = () => {
   const {
      state: {
         quizData,
         currentCategory,
         currentQuestionId,
         userAnswer,
         isLoading,
      },
      dispatch,
   } = useData();
   const navigate = useNavigate();
   const { theme } = useTheme();

   //getting the user selected category from the local storage on page refresh and setting it
   useEffect(() => {
      dispatch({
         type: "SET_CURRENT_CATEGORY",
         payload: localStorage.getItem("currentCategory"),
      });
      // eslint-disable-next-line
   }, []);

   const questionID =
      quizData && Object.keys(quizData?.[currentCategory]?.data);

   const nextQuestion = () => {
      dispatch({
         type: "SET_CURRENT_QUESTION_ID",
         payload: currentQuestionId + 1,
      });
   };

   const previousQuestion = () => {
      dispatch({
         type: "SET_CURRENT_QUESTION_ID",
         payload: currentQuestionId - 1,
      });
   };

   const setUserAnswer = (ele) => {
      if (
         userAnswer.find(
            (ele) =>
               ele.questionNo ===
               quizData?.[currentCategory]?.data?.[
                  questionID[currentQuestionId]
               ]?.qNo
         )
      ) {
         userAnswer.splice(currentQuestionId, 1);
         dispatch({
            type: "SET_USER_ANSWER",
            payload: {
               answer: ele,
               questionNo:
                  quizData?.[currentCategory]?.data?.[
                     questionID[currentQuestionId]
                  ]?.qNo,
            },
         });
      } else {
         dispatch({
            type: "SET_USER_ANSWER",
            payload: {
               answer: ele,
               questionNo:
                  quizData?.[currentCategory]?.data?.[
                     questionID[currentQuestionId]
                  ]?.qNo,
            },
         });
      }
   };

   return (
      <>
         {isLoading ? (
            <div className="loader-wrapper">
               <Loader loading={isLoading} />
            </div>
         ) : (
            <main className="quiz-page">
               <section className="quiz-heading">
                  <h5 className="font-medium">
                     {`Question no: ${
                        quizData?.[currentCategory]?.data?.[
                           questionID[currentQuestionId]
                        ]?.qNo
                     }/5`}
                  </h5>
                  <button
                     className={`button-link h6 ${
                        theme === "dark" ? "link-white" : ""
                     }`}
                     onClick={() => navigate("/")}
                  >
                     Quit quiz
                  </button>
               </section>
               <section className="quiz-details">
                  <h5>
                     {
                        quizData?.[currentCategory]?.data?.[
                           questionID[currentQuestionId]
                        ]?.text
                     }
                  </h5>
                  <div className="quiz-options">
                     {quizData?.[currentCategory]?.data?.[
                        questionID[currentQuestionId]
                     ]?.options.map((ele, index) => (
                        <button
                           value={ele}
                           key={index}
                           className={`button outline-primary ${
                              userAnswer.find((e) => e.answer === ele) &&
                              "selected"
                           }`}
                           onClick={() => setUserAnswer(ele)}
                        >
                           {ele}
                        </button>
                     ))}
                  </div>
               </section>
               <section className="navigate-question">
                  {quizData?.[currentCategory]?.data?.[
                     questionID[currentQuestionId]
                  ]?.qNo === 1 ? (
                     <button
                        onClick={() => navigate("/rules")}
                        className="button icon-only-button primary"
                     >
                        RULES
                     </button>
                  ) : (
                     <button
                        onClick={previousQuestion}
                        className="button icon-only-button primary"
                     >
                        <LeftArrow />
                     </button>
                  )}
                  {quizData?.[currentCategory]?.data?.[
                     questionID[currentQuestionId]
                  ]?.qNo === 5 ? (
                     <button
                        onClick={() => navigate("/result")}
                        className="button icon-only-button primary"
                     >
                        RESULTS
                     </button>
                  ) : (
                     <button
                        onClick={nextQuestion}
                        className="button icon-only-button primary"
                     >
                        <RightArrow />
                     </button>
                  )}
               </section>
            </main>
         )}
      </>
   );
};
