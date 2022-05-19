import { createContext, useContext, useReducer } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
   const firebaseConfig = {
      databaseURL:
         "https://hhquiz-4ef5c-default-rtdb.asia-southeast1.firebasedatabase.app",
   };

   // eslint-disable-next-line
   const app = initializeApp(firebaseConfig);

   //getting the user selected category from the local storage on page refresh and setting it
   useEffect(() => {
      dispatch({
         type: "SET_CURRENT_CATEGORY",
         payload: localStorage.getItem("currentCategory"),
      });
      // eslint-disable-next-line
   }, []);

   //fetching quiz data and categories from firebase realtime database
   useEffect(() => {
      const db = ref(getDatabase());
      get(db)
         .then((obj) => {
            if (obj.exists()) {
               dispatch({
                  type: "SET_QUIZ_DATA",
                  payload: obj.val().quizData,
               });
               dispatch({
                  type: "SET_CATEGORIES",
                  payload: obj.val().categories,
               });
            }
         })
         .catch((error) => console.log(error))
         .finally(() => dispatch({ type: "TOGGLE_LOADER", payload: false }));
   }, []);

   const dataReducer = (state, { type, payload }) => {
      switch (type) {
         case "TOGGLE_LOADER":
            return {
               ...state,
               isLoading: false,
            };
         case "SET_QUIZ_DATA":
            return {
               ...state,
               quizData: payload,
            };
         case "SET_CATEGORIES":
            return {
               ...state,
               quizCategories: payload,
            };
         case "SET_CURRENT_QUESTION_ID":
            return {
               ...state,
               currentQuestionId: payload,
            };
         case "SET_CURRENT_CATEGORY":
            return {
               ...state,
               currentCategory: payload,
            };
         case "SET_USER_ANSWER":
            return {
               ...state,
               userAnswer: [...state.userAnswer, payload],
            };
         case "RESET_QUIZ":
            return {
               ...state,
               userAnswer: [],
               currentQuestionId: 0,
            };
         default:
            return state;
      }
   };

   const initialState = {
      quizData: "",
      quizCategories: "",
      currentQuestionId: 0,
      currentCategory: "",
      userAnswer: [],
      isLoading: true,
   };

   const [state, dispatch] = useReducer(dataReducer, initialState);

   return (
      <DataContext.Provider
         value={{
            state,
            dispatch,
         }}
      >
         {children}
      </DataContext.Provider>
   );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
