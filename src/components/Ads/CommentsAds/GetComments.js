import axios from "axios";

const getCommentsApi = async (setState, currentState) => {
  const randomCommentOne = await axios.get(
    "https://api.freerealapi.com/comments/61869149b883dbaafa944914"
  );

  const randomCommentTwo = await axios.get(
    "https://api.freerealapi.com/comments/618a80b8b883dbaafa944966"
  );

  const randomCommentThree = await axios.get(
    "https://api.freerealapi.com/comments/618a8492b883dbaafa944979"
  );
  setState([
    ...currentState,
    randomCommentOne.data.comment,
    randomCommentTwo.data.comment,
    randomCommentThree.data.comment,
  ]);
};
export default getCommentsApi;
