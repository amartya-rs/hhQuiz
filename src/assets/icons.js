const HeartIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill={props.fillColor ?? "none"}
         stroke={props.strokeColor ?? "white"}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-heart"
      >
         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
   );
};

const RightArrow = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="28"
         height="28"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-arrow-right"
      >
         <line x1="5" y1="12" x2="19" y2="12" />
         <polyline points="12 5 19 12 12 19" />
      </svg>
   );
};

const LeftArrow = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="28"
         height="28"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-arrow-left"
      >
         <line x1="19" y1="12" x2="5" y2="12" />
         <polyline points="12 19 5 12 12 5" />
      </svg>
   );
};

const UserIcon = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="28"
         height="28"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-user"
      >
         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
         <circle cx="12" cy="7" r="4"></circle>
      </svg>
   );
};

const CrossIcon = ({ width, height, handler }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={width ?? "24"}
         height={height ?? "24"}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-x"
         onClick={handler}
      >
         <line x1="18" y1="6" x2="6" y2="18" />
         <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
   );
};

const MoonIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="26"
         height="26"
         viewBox="0 0 24 24"
         fill="none"
         stroke="rgb(250,250,250)"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-moon"
         {...props}
      >
         <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
   );
};

const SunIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="26"
         height="26"
         viewBox="0 0 24 24"
         fill="none"
         stroke="rgb(250,250,250)"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-sun"
         {...props}
      >
         <circle cx="12" cy="12" r="5" />
         <line x1="12" y1="1" x2="12" y2="3" />
         <line x1="12" y1="21" x2="12" y2="23" />
         <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
         <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
         <line x1="1" y1="12" x2="3" y2="12" />
         <line x1="21" y1="12" x2="23" y2="12" />
         <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
         <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
   );
};

const LogoutIcon = (props) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="28"
         height="28"
         viewBox="0 0 24 24"
         fill="none"
         stroke="white"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="feather feather-log-out"
         onClick={props.logoutHandler}
      >
         <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
         <polyline points="16 17 21 12 16 7" />
         <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
   );
};

export {
   HeartIcon,
   UserIcon,
   CrossIcon,
   LogoutIcon,
   LeftArrow,
   RightArrow,
   SunIcon,
   MoonIcon,
};
