import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../context";
import { Loader } from "../../utils/Loader";
import "./login-page.css";

const LoginPage = () => {
   const {
      authState: { email, password, error, isLoading },
      authDispatch,
      loginHandler,
      setGuestCredentials,
   } = useAuth();
   const { theme } = useTheme();
   const [loginLoader, setLoginLoader] = useState(false);

   return (
      <>
         {isLoading ? (
            <div className="loader-wrapper">
               <Loader loading={isLoading} />
            </div>
         ) : (
            <div className="login-page">
               <form
                  className={`auth-form ${
                     theme === "dark" ? "dark-mode-bg" : ""
                  }`}
                  onSubmit={(e) => loginHandler(e, setLoginLoader)}
               >
                  <div className="form-header">
                     <h5>LOGIN</h5>
                     <p className="p-sm">
                        Please enter your email and password.
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
                           name="email"
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
                           name="password"
                           className="text-input"
                           type="password"
                           placeholder="***************"
                           value={password}
                           required
                        />
                     </div>
                  </div>
                  <span className="auth-error">{error}</span>
                  {loginLoader ? (
                     <Loader loading={loginLoader} size="2rem" />
                  ) : (
                     <button className="button primary" type="submit">
                        LOGIN
                     </button>
                  )}
                  <div className="form-footer">
                     <p className="p-sm">Not a user yet?</p>
                     <Link
                        className={theme === "dark" ? "dark-mode-link" : ""}
                        to="/signup"
                     >
                        Sign Up
                     </Link>
                  </div>
                  <span
                     className="helper font-medium"
                     onClick={setGuestCredentials}
                  >
                     Use Guest Credentials
                  </span>
               </form>
            </div>
         )}
      </>
   );
};

export { LoginPage };
