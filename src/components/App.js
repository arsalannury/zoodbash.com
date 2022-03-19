import Home from "./Home/Home";
import Electronics from "./CategoryPage/Electronics/Electronics";
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
      </Switch>
    </>
  );
};

export default App;
