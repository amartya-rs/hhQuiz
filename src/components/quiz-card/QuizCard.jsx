import "./quiz-card.css";

const QuizCard = ({ redirect, imgUrl, category }) => {
   return (
      <div className="quiz-card" onClick={redirect}>
         <img className="quiz-img" src={imgUrl} alt={category} />
         <div className="description">
            <h5>{category}</h5>
            <p>Take this quiz to test yourself</p>
            <p>5 Questions</p>
         </div>
      </div>
   );
};

export { QuizCard };
