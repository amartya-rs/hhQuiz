import { quiz_banner } from "../../assets/images/index";
import { CategoryCard } from "../../components";
import { useData } from "../../context/data-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Loader } from "../../utils/Loader";
import "./home-page.css";

const HomePage = () => {
   const navigate = useNavigate();
   const {
      state: { quizCategories, isLoading },
      dispatch,
   } = useData();

   //resetting quiz
   useEffect(() => {
      dispatch({ type: "RESET_QUIZ" });
      // eslint-disable-next-line
   }, []);

   return (
      <main className="home-page">
         {isLoading ? (
            <div className="loader-wrapper">
               <Loader loading={isLoading} />
            </div>
         ) : (
            <>
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
                     <img
                        className="res-img"
                        src={quiz_banner}
                        alt="quiz banner"
                     />
                  </div>
               </header>
               <section id="categories" className="category-section">
                  <h4>Category</h4>
                  <div className="categories">
                     {quizCategories &&
                        quizCategories.map((ele, index) => (
                           <CategoryCard
                              key={index}
                              imgUrl={ele.url}
                              category={ele.category}
                              redirect={() =>
                                 navigate(`/${ele.category.toLowerCase()}`)
                              }
                           />
                        ))}
                  </div>
               </section>
            </>
         )}
      </main>
   );
};

export { HomePage };
