import { FETCH_ALL, CREATE } from "../actions/types";
const initialState = {
  items: [],
  item: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        items: action.payload,
      };

    case CREATE:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
};
export default postReducer;
