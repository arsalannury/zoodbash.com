import { createContext, useContext, useState, useEffect } from "react";

const CommentContext = createContext({});

export const useCommentContext = () => {
  return useContext(CommentContext);
};

const CommentContextProvider = ({ children }) => {
  const [comments, saveComments] = useState([]);

  const handleSaveComments = (data) => {
     setTimeout(() => {
    const newComments = [...comments];
    newComments.push(data);
    saveComments(newComments);
    const localStorageCheck = JSON.parse(localStorage.getItem("comments"));
      if (localStorageCheck) {
        localStorage.setItem(
          "comments",
          JSON.stringify([data, ...localStorageCheck])
        );
      } else {
        localStorage.setItem("comments", JSON.stringify([data, ...comments]));
      }
    }, 2000);
  };

  useEffect(() => {
    if (localStorage.getItem("comments")) {
      saveComments(JSON.parse(localStorage.getItem("comments")));
    }
  }, []);

  return (
    <CommentContext.Provider
      value={{
        handleSaveComments,
        comments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;

// if(localStorage.getItem("comments")){
//   JSON.parse(localStorage.getItem("comments")).forEach((item) => {
//    localStorage.setItem(
//      "comments",
//     JSON.stringify([item])
//  );
//   })
// }else {
//  localStorage.setItem(
//      "comments",
//     JSON.stringify([...comments])
//  );
// }
