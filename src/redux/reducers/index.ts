import { IGlobalState, IAction, ITask } from "../../types";
import {
  FETCH_START,
  FETCH_FAILED,
  SET_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK
} from "../actions";

const initialState: IGlobalState = {
  tasks: [],
  isLoading: false,
  error: null
};

export const Tasks = (
  prevState: IGlobalState = initialState,
  action: IAction
): IGlobalState => {
  let state: IGlobalState = prevState;

  switch (action.type) {
    case FETCH_START:
      state = { ...state, isLoading: true, error: null, tasks: [] };
      break;

    case FETCH_FAILED:
      state = {
        ...state,
        isLoading: false,
        error: action.payload,
        tasks: []
      };
      break;

    case SET_TASKS:
      state = {
        ...state,
        isLoading: false,
        tasks: action.payload
      };
      break;

    case ADD_TASK: {
      state = {
        ...state,
        isLoading: false,
        tasks: [...state.tasks, action.payload]
      };
      break;
    }

    case UPDATE_TASK: {
      const task = action.payload as ITask;

      state = {
        ...state,
        isLoading: false,
        tasks: state.tasks.map(item => (task.id === item.id ? task : item))
      };
      break;
    }

    case DELETE_TASK: {
      state = {
        ...state,
        isLoading: false,
        tasks: state.tasks.filter(item => item.id !== action.payload)
      };
      break;
    }

    default:
      break;
  }

  return state;
};
