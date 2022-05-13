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
  };

  useEffect(() => {
    if(comments.length !== 0) {
        if(localStorage.getItem("comments")){
             JSON.parse(localStorage.getItem("comments")).forEach((item) => {
              localStorage.setItem(
                "comments",
               JSON.stringify([item,...comments])
            );
             })
        }else {
            localStorage.setItem(
                "comments",
               JSON.stringify([...comments])
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
