import jsonplaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = (id) => (dispatch) => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  // ' _ ' <- means private function so that other devs should not attempt to call this
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
