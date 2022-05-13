import { createContext, useContext, useState,useEffect } from "react";

const CommentContext = createContext({});

export const useCommentContext = () => {
  return useContext(CommentContext);
};

const CommentContextProvider = ({ children }) => {
  const [comments, saveComments] = useState([]);

  const handleSaveComments = (data) => {
    const newComments = [...comments];
    newComments.push(data);
    saveComments(newComments);

    // const saveCommentsToLocalStorage = localStorage.setItem(
    //   "comments",
    //   JSON.stringify()
    // );
  };

  useEffect(() => {
    if(comments.length !== 0) {
        if(localStorage.getItem("comments")){
            let existLocal = JSON.parse(localStorage.getItem("comments"))
            console.log(existLocal);
            localStorage.setItem(
                "comments",
               JSON.stringify([...existLocal,comments])
            );
        }else {
            localStorage.setItem(
                "comments",
               JSON.stringify(comments)
            );
        }
    }
  },[comments])

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
