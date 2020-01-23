import { IGlobalState, IAction, ITodo } from "../../types";
import {
  FETCH_START,
  FETCH_FAILED,
  SET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "../actions";

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
      state = { ...state, isLoading: true, error: null, todos: [] };
      break;

    case FETCH_FAILED:
      state = {
        ...state,
        isLoading: false,
        error: action.payload,
        todos: []
      };
      break;

    case SET_TODOS:
      state = {
        ...state,
        isLoading: false,
        todos: action.payload
      };
      break;

    case ADD_TODO: {
      state = {
        ...state,
        isLoading: false,
        todos: [...state.todos, action.payload]
      };
      break;
    }

    case UPDATE_TODO: {
      const todo = action.payload as ITodo;

      state = {
        ...state,
        isLoading: false,
        todos: state.todos.map(item => (todo.id === item.id ? todo : item))
      };
      break;
    }

    case DELETE_TODO: {
      state = {
        ...state,
        isLoading: false,
        todos: state.todos.filter(item => item.id !== action.payload)
      };
      break;
    }

    default:
      break;
  }

  return state;
};

export default todos;
