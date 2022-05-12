import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import CommentContextProvider from "./Context/CommentContext";

ReactDOM.render(
  <BrowserRouter>
    <CommentContextProvider>
      <App />
    </CommentContextProvider>
  </BrowserRouter>,

  document.getElementById("Project")
);
