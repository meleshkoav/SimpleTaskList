import { IGlobalState, IAction } from "../../types";
import { FETCH_START, FETCH_FAILED } from "../actions";

const initialState: IGlobalState = {
  todos: [],
  isLoading: false,
  error: null
};

const todos = (
  prevState: IGlobalState = initialState,
  action: IAction
): IGlobalState => {
  let state: IGlobalState = prevState;

  switch (action.type) {
    case FETCH_START:
      state = { ...prevState, isLoading: true, error: null, todos: [] };
      break;
    case FETCH_FAILED:
      state = {
        ...prevState,
        isLoading: false,
        error: action.payload,
        todos: []
      };
      break;
    default:
      break;
  }

  return state;
};

export default todos;
