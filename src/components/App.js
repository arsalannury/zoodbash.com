import Home from "./Home/Home";
import Electronics from "./CategoryPage/Electronics/Electronics";
import Jeweleryes from "./CategoryPage/Jeweleryes/Jeweleryes";
import MensClothing from "./CategoryPage/Clothing/MensClothing";
import Header from './Home/Header/Header';
import { Switch, Route } from "react-router-dom";
import "../index.css";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/electronics"} component={Electronics} />
        <Route path={'/jeweleryes'} component={Jeweleryes} />
        <Route path={'/mensClothing'} component={MensClothing} />
      </Switch>
    </>
  );
};

export default App;
