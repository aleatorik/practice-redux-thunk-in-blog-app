import jsonplaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
  // Bad approach! because it breaks the rules of redux(action creator)
  const response = await jsonplaceholder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};

//this bad approach causes an error saying
// 1. Actions must be plain objects.
// 2. Use custom middleware for async actions. => this will be solved by making use of redux-thunk.
