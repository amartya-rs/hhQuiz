import { createContext, useContext, useReducer } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
   var firebaseConfig = {
      databaseURL:
         "https://hhquiz-4ef5c-default-rtdb.asia-southeast1.firebasedatabase.app",
   };

   const app = initializeApp(firebaseConfig);

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
         .catch((error) => {
            console.log(error);
         });
   }, []);

   const dataReducer = (state, { type, payload }) => {
      switch (type) {
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
         case "SET_QUESTION_NO":
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
