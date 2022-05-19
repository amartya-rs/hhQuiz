import "./category-card.css";

const CategoryCard = ({ imgUrl, category, redirect }) => {
   return (
      <div className="card vertical category" onClick={redirect}>
         <img className="card-img" src={imgUrl} alt={category} />
         <div className="overlay h4">{category}</div>
      </div>
   );
};

export { CategoryCard };
