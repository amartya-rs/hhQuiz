import "./category-card.css";

const CategoryCard = (props) => {
   return (
      <div className="category-card" onClick={props.redirect}>
         <img className="category-img" src={props.img} alt="category" />
         <div className="description">
            <h5>{props.category}</h5>
            <p>Take this quiz to test yourself</p>
            <p>5 Questions</p>
         </div>
      </div>
   );
};

export { CategoryCard };
