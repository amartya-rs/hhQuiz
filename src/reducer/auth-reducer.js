//reducer function
const authReducer = (authState, { type, payload }) => {
   switch (type) {
      case "TOGGLE_LOADER":
         return {
            ...authState,
            isLoading: payload,
         };
      case "SET_CURRENT_USER":
         return {
            ...authState,
            currentUser: payload,
            isLoggedIn: payload && true,
         };
      case "SET_EMAIL":
         return {
            ...authState,
            email: payload,
         };
      case "SET_PW":
         return {
            ...authState,
            password: payload,
         };
      case "SET_CONFIRM_PW":
         return {
            ...authState,
            confirmPassword: payload,
         };
      case "SET_GUEST_CREDENTIALS":
         return {
            ...authState,
            email: payload[0],
            password: payload[1],
            error: "",
         };
      case "CLEAR_ALL":
         return {
            ...authState,
            name: "",
            email: "",
            password: "",
            isLoggedIn: false,
         };
      case "CLEAR_FORM_INPUTS":
         return {
            ...authState,
            name: "",
            email: "",
            password: "",
         };
      default:
         return authState;
   }
};

//initial states
const initialState = {
   isLoggedIn: false,
   email: "",
   password: "",
   confirmPassword: "",
   currentUser: "",
   isLoading: true,
};

export { authReducer, initialState };
