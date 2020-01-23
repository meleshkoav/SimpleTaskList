import { ITodo, IAction } from "../../types";

export const ADD_TODO = "TODO_ADD";
export const UPDATE_TODO = "UPDATE_TODO";
export const FETCH_START = "FETCH_START";
export const FETCH_FAILED = "FETCH_FAILED";

export const addTodo = (item: ITodo): IAction<ITodo> => ({
  type: ADD_TODO,
  payload: item
});

export const updateTodo = (item: ITodo): IAction<ITodo> => ({
  type: ADD_TODO,
  payload: item
});

export const todosLoading = (): IAction => ({
  type: FETCH_START
});

export const todosFailed = (error: string): IAction<string> => ({
  type: FETCH_FAILED,
  payload: error
});
