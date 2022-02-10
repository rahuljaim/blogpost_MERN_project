import * as api from "../api";
import { FETCH_ALL, CREATE } from "./types";

// Action Creators
export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
    console.log("action data", data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
