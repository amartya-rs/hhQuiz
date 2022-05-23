import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, initialState } from "../reducer/auth-reducer";
import { useNavigate } from "react-router-dom";
import { toastSuccess, toastError } from "../utils/useToast";
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
         toastSuccess("Logged in successfully");
         navigate("/");
      } catch (error) {
         toastError(error.message);
      } finally {
         setLoginLoader(false);
      }
   };

   //signup handler
   const signupHandler = async (e, setSignupLoader) => {
      e.preventDefault();
      if (authState.password === authState.confirmPassword) {
         setSignupLoader(true);
         try {
            await createUserWithEmailAndPassword(
               auth,
               authState.email,
               authState.password
            );
            authDispatch({ type: "CLEAR_FORM_INPUTS" });
            toastSuccess("Signed up successfully");
            navigate("/");
         } catch (error) {
            toastError(error.message);
         } finally {
            setSignupLoader(false);
         }
      } else {
         toastError("Passwords do not match");
      }
   };

   //logging out user
   const logoutHandler = async () => {
      try {
         await signOut(auth);
         authDispatch({ type: "CLEAR_ALL" });
         toastSuccess("Logged out successfully");
      } catch (error) {
         toastError(error.message);
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
