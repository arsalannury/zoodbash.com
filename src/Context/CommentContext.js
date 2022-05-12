import {createContext,useContext,useState} from 'react';

const CommentContext = createContext({})

export const useCommentContext = () => {
    return useContext(CommentContext);
}


const CommentContextProvider = ({children}) => {
    const [comments,saveComments] = useState([]);

    const handleSaveComments = (data) => {
        const newComments = [...comments]
        newComments.push(data);
        saveComments(newComments)
    }

    return (
        <CommentContext.Provider
        value={{
            handleSaveComments
        }}
        >
            {children}
        </CommentContext.Provider>
    )
}

export default CommentContextProvider;