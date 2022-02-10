import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./../reducers";

const initialState = {};
const middlewares = [ReduxThunk];

// export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
//   createStore
// );
// const store = createStoreWithMiddleware(rootReducer);
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);
export default store;
