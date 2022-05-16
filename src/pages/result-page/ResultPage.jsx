import "./result-page.css";
import { useData } from "../../context/data-context";

const ResultPage = () => {
   const {
      state: { quizData, currentCategory, userAnswer },
   } = useData();

   const questionID = quizData && Object.keys(quizData?.[currentCategory]);

   const calculateScore = () => {
      let score = 0;
      userAnswer.length !== 0 &&
         questionID.forEach((ele) => {
            return userAnswer.find(
               (ans) =>
                  ans.answer ===
                  quizData?.[currentCategory]?.[ele]?.correctAnswer
            )
               ? (score += 2)
               : score--;
         });
      return score;
   };

   const resultOption = (val) => {
      const correctAnswers = questionID.map(
         (ele) => quizData?.[currentCategory]?.[ele]?.correctAnswer
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
      <main className="result-page">
         {quizData === "" ? (
            <div className="h2">Loading...</div>
         ) : (
            <>
               <section>
                  <h3 className="font-medium">{`Your total score is: ${
                     quizData && calculateScore()
                  }`}</h3>
               </section>
               {questionID.map((ele, index) => (
                  <section key={index} className="quiz-details">
                     <h5>
                        {`${ele.toUpperCase()}. ${
                           quizData?.[currentCategory]?.[ele]?.text
                        }`}
                     </h5>
                     <div className="quiz-options">
                        {quizData?.[currentCategory]?.[ele]?.options.map(
                           (ele, index) => (
                              <button
                                 value={ele}
                                 key={index}
                                 className={`button ${resultOption(ele)}`}
                              >
                                 {ele}
                              </button>
                           )
                        )}
                     </div>
                  </section>
               ))}
            </>
         )}
      </main>
   );
};

export { ResultPage };
