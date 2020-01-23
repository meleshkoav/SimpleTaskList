import { ITask, IAction } from "../../types";

export const ADD_TODO = "TODO_ADD";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_TODOS = "SET_TODOS";
export const FETCH_START = "FETCH_START";
export const FETCH_FAILED = "FETCH_FAILED";

export const addTask = (item: ITask): IAction<ITask> => ({
  type: ADD_TODO,
  payload: item
});

export const updateTask = (item: ITask): IAction<ITask> => ({
  type: ADD_TODO,
  payload: item
});

export const setTasks = (tasks: ITask[]): IAction<ITask[]> => ({
  type: SET_TODOS,
  payload: tasks
});

export const deleteTask = (id: number): IAction<number> => ({
  type: DELETE_TODO,
  payload: id
});

export const tasksLoading = (): IAction => ({
  type: FETCH_START
});

export const tasksFailed = (error: string): IAction<string> => ({
  type: FETCH_FAILED,
  payload: error
});
