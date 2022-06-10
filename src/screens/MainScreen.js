import Main from "./../components/Main/index";
import { useLocation } from "react-router-dom";

const MainScreen = () => {
  const location = useLocation();
  return <Main />;
};

export default MainScreen;
