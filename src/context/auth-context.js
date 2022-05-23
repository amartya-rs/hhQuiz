import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, initialState } from "../reducer/auth-reducer";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
} from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const navigate = useNavigate();
   const [authState, authDispatch] = useReducer(authReducer, initialState);

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         authDispatch({
            type: "SET_CURRENT_USER",
            payload: user,
         });
         authDispatch({
            type: "TOGGLE_LOADER",
            payload: false,
         });
      });
      // eslint-disable-next-line
   }, []);

   //login handler
   const loginHandler = async (e, setLoginLoader) => {
      e.preventDefault();
      setLoginLoader(true);
      try {
         await signInWithEmailAndPassword(
            auth,
            authState.email,
            authState.password
         );
         authDispatch({ type: "CLEAR_FORM_INPUTS" });
         navigate("/");
      } catch (error) {
         console.log(error);
      } finally {
         setLoginLoader(false);
      }
   };

   //signup handler
   const signupHandler = async (e, setSignupLoader) => {
      e.preventDefault();
      setSignupLoader(true);
      if (authState.password === authState.confirmPassword) {
         try {
            await createUserWithEmailAndPassword(
               auth,
               authState.email,
               authState.password
            );
            authDispatch({ type: "CLEAR_FORM_INPUTS" });
            navigate("/");
         } catch (error) {
            console.log(error);
         } finally {
            setSignupLoader(false);
         }
      } else {
         console.log("Passwords do not match");
      }
   };

   //logging out user
   const logoutHandler = async () => {
      try {
         await signOut(auth);
         authDispatch({ type: "CLEAR_ALL" });
      } catch (error) {
         console.log(error);
      }
   };

   //setting the guest credentials
   const setGuestCredentials = () => {
      authDispatch({
         type: "SET_GUEST_CREDENTIALS",
         payload: ["guest@gmail.com", "Guest123"],
      });
   };

   return (
      <AuthContext.Provider
         value={{
            authState,
            authDispatch,
            loginHandler,
            signupHandler,
            logoutHandler,
            setGuestCredentials,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
