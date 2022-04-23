import Home from "./Home/Home";
import Electronics from "./CategoryPage/Electronics/Electronics";
import Jeweleryes from "./CategoryPage/Jeweleryes/Jeweleryes";
import MensClothing from "./CategoryPage/Clothing/MensClothing";
import WomenClothing from "./CategoryPage/Clothing/WomenClothing";
import Header from './Home/Header/Header';
import EachProduct from "./CategoryPage/EachProduct/EachProduct";
import { Switch, Route } from "react-router-dom";
import "../index.css";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/electronics/:id"} component={EachProduct} />
        <Route path={'/jewelery/:id'} component={EachProduct} />
        <Route path={"/men's clothing/:id"} component={EachProduct} />
        <Route path={"/women's clothing/:id"} component={EachProduct} />
        <Route path={"/electronics"} component={Electronics} />
        <Route path={'/jewelery'} component={Jeweleryes} />
        <Route path={"/men's clothing"} component={MensClothing} />
        <Route path={"/women's clothing"} component={WomenClothing} />
      </Switch>
    </>
  );
};

export default App;
