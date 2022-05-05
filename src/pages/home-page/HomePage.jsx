import { quiz_banner } from "../../assets/images/index";
import { CategoryCard } from "../../components";
import { useData } from "../../context/data-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./home-page.css";

const HomePage = () => {
   const navigate = useNavigate();
   const {
      state: { quizCategories },
      dispatch,
   } = useData();

   //resetting quiz
   useEffect(() => {
      dispatch({ type: "RESET_QUIZ" });
      // eslint-disable-next-line
   }, []);

   const redirect = (value) => {
      dispatch({ type: "SET_CURRENT_CATEGORY", payload: value });
      localStorage.setItem("currentCategory", value);
      navigate("/rules");
   };

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
               {quizCategories &&
                  quizCategories.map((ele, index) => (
                     <CategoryCard
                        key={index}
                        img={ele.url}
                        category={ele.category}
                        redirect={() => redirect(ele.category)}
                     />
                  ))}
            </div>
         </section>
      </div>
   );
};

export { HomePage };
