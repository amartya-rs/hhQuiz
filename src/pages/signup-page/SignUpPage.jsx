import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../context";
import { Loader } from "../../utils/Loader";
import "./signup-page.css";

const SignUpPage = () => {
   const {
      authState: { email, password, confirmPassword, error, isLoading },
      authDispatch,
      signupHandler,
   } = useAuth();
   const { theme } = useTheme();
   const [signupLoader, setSignupLoader] = useState(false);

   useEffect(() => {
      authDispatch({ type: "CLEAR_FORM_INPUTS" });
      // eslint-disable-next-line
   }, []);

   return (
      <>
         {isLoading ? (
            <div className="loader-wrapper">
               <Loader loading={isLoading} />
            </div>
         ) : (
            <div className="signup-page">
               <form
                  className={`auth-form ${
                     theme === "dark" ? "dark-mode-bg" : ""
                  }`}
                  onSubmit={(e) => signupHandler(e, setSignupLoader)}
               >
                  <div className="form-header">
                     <h5>SIGNUP</h5>
                     <p className="p-sm">
                        Please fill in your information below.
                     </p>
                  </div>
                  <div className="form-field">
                     <div>
                        <label className="h6 font-medium" htmlFor="email">
                           E-mail*
                        </label>
                        <input
                           onChange={(e) =>
                              authDispatch({
                                 type: "SET_EMAIL",
                                 payload: e.target.value,
                              })
                           }
                           className="text-input"
                           type="email"
                           placeholder="kanye@xyz.com"
                           value={email}
                           required
                        />
                     </div>
                     <div>
                        <label className="h6 font-medium" htmlFor="password">
                           Password*
                        </label>
                        <input
                           onChange={(e) =>
                              authDispatch({
                                 type: "SET_PW",
                                 payload: e.target.value,
                              })
                           }
                           className="text-input"
                           type="password"
                           placeholder="***************"
                           value={password}
                           required
                        />
                     </div>
                     <div>
                        <label className="h6 font-medium" htmlFor="name">
                           Confirm Password*
                        </label>
                        <input
                           onChange={(e) =>
                              authDispatch({
                                 type: "SET_CONFIRM_PW",
                                 payload: e.target.value,
                              })
                           }
                           className="text-input"
                           type="password"
                           placeholder="***************"
                           value={confirmPassword}
                           required
                        />
                     </div>
                  </div>
                  <span className="auth-error">{error}</span>
                  {signupLoader ? (
                     <Loader loading={signupLoader} size="2rem" />
                  ) : (
                     <button className="button primary" type="submit">
                        SIGNUP
                     </button>
                  )}
                  <div className="form-footer">
                     <p className="p-sm">Already a user?</p>
                     <Link
                        className={theme === "dark" ? "dark-mode-link" : ""}
                        to="/login"
                     >
                        Login
                     </Link>
                  </div>
               </form>
            </div>
         )}
      </>
   );
};

export { SignUpPage };
