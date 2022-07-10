import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import CommentContextProvider from "./Context/CommentContext";
import CacheProductContextProvider from "./Context/CacheProductContext";
import SearchContextProvider from "./Context/SearchContext";

ReactDOM.render(
  <BrowserRouter>
    <CommentContextProvider>
      <CacheProductContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </CacheProductContextProvider>
    </CommentContextProvider>
  </BrowserRouter>,

  document.getElementById("Project")
);
