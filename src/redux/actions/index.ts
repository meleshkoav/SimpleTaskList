import { ITask, IAction } from "../../types";

export const ADD_TASK = "TASK_ADD";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SET_TASKS = "SET_TASKS";
export const FETCH_START = "FETCH_START";
export const FETCH_FAILED = "FETCH_FAILED";

export const addTask = (item: ITask): IAction<ITask> => ({
  type: ADD_TASK,
  payload: item
});

export const updateTask = (item: ITask): IAction<ITask> => ({
  type: ADD_TASK,
  payload: item
});

export const setTasks = (tasks: ITask[]): IAction<ITask[]> => ({
  type: SET_TASKS,
  payload: tasks
});

export const deleteTask = (id: number): IAction<number> => ({
  type: DELETE_TASK,
  payload: id
});

export const tasksLoading = (): IAction => ({
  type: FETCH_START
});

export const tasksFailed = (error: string): IAction<string> => ({
  type: FETCH_FAILED,
  payload: error
});
