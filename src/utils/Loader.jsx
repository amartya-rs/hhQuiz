import PuffLoader from "react-spinners/PuffLoader";
import { useTheme } from "../context/theme-context";

const Loader = ({ loading }) => {
   const { theme } = useTheme();
   let isThemeDark = theme === "dark" ? true : false;

   return (
      <PuffLoader
         loading={loading}
         size="4.8rem"
         color={isThemeDark ? "rgb(250,250,250)" : "rgb(145, 55, 135)"}
      />
   );
};

export { Loader };
