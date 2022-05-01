import { quiz_banner } from "../../assets/images/index";
import { CategoryCard } from "../../components";
import { useData } from "../../context/data-context";
import "./home-page.css";

const HomePage = () => {
   const { state } = useData();

   return (
      <div className="home-page">
         <header>
            <div className="content-wrapper">
               <h3>Are you a real Hiphop fan?</h3>
               <h3>Take a quiz and find out.</h3>
               <a href="#categories">
                  <button className="button primary round-edge">
                     EXPLORE CATEGORIES
                  </button>
               </a>
            </div>
            <div className="image-wrapper">
               <img className="res-img" src={quiz_banner} alt="quiz banner" />
            </div>
         </header>
         <section id="categories" className="category-section">
            <h4>Category</h4>
            <div className="categories">
               {state.quizCategories &&
                  state.quizCategories.map((ele, index) => (
                     <CategoryCard
                        key={index}
                        img={ele.url}
                        category={ele.category}
                     />
                  ))}
            </div>
         </section>
      </div>
   );
};

export { HomePage };
