import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./reducers/TodoReducers";
import PageNumberReducer from "./reducers/PageNumReducer";
const reducer = combineReducers({
  Todo: TodoReducer,
  Page_Number: PageNumberReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
