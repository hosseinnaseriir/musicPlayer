import Main from "./../components/Main/index";
import { useLocation } from "react-router-dom";

const MainScreen = () => {
  const location = useLocation();
  console.log(location.state);

  return <Main />;
};

export default MainScreen;
