import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import CommentContextProvider from "./Context/CommentContext";
import CacheProductContextProvider from "./Context/CacheProductContext";

ReactDOM.render(
  <BrowserRouter>
    <CommentContextProvider>
      <CacheProductContextProvider>
        <App />
      </CacheProductContextProvider>
    </CommentContextProvider>
  </BrowserRouter>,

  document.getElementById("Project")
);
