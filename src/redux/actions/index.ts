import { ITask, IAction } from "../../types";
import { Dispatch } from "redux";
import {
  getTaskListService,
  addTaskService,
  deleteTaskService,
  updateTaskService
} from "service/index";

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

export const updateTaskInStore = (item: ITask): IAction<ITask> => ({
  type: UPDATE_TASK,
  payload: item
});

export const setTasks = (tasks: ITask[]): IAction<ITask[]> => ({
  type: SET_TASKS,
  payload: tasks
});

export const deleteTaskFromStore = (id: number): IAction<number> => ({
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

// Async actions

export const fetchTasks = () => async (dispatch: Dispatch) => {
  dispatch(tasksLoading());

  try {
    const tasks = await getTaskListService();
    dispatch(setTasks(tasks));
  } catch (error) {
    dispatch(tasksFailed(error.toString()));
  }
};

export const postTask = (title: string) => async (dispatch: Dispatch) => {
  dispatch(tasksLoading());

  try {
    const id = await addTaskService(title);
    const task: ITask = {
      id,
      title
    };
    dispatch(addTask(task));
  } catch (error) {
    dispatch(tasksFailed(error.toString()));
  }
};

export const deleteTask = (id: number) => async (dispatch: Dispatch) => {
  dispatch(tasksLoading());

  try {
    await deleteTaskService(id);
    dispatch(deleteTaskFromStore(id));
  } catch (error) {
    dispatch(tasksFailed(error.toString()));
  }
};

export const updateTask = (task: ITask) => async (dispatch: Dispatch) => {
  dispatch(tasksLoading());

  const { id, title } = task;

  try {
    await updateTaskService(id, title);
    dispatch(updateTaskInStore(task));
  } catch (error) {
    dispatch(tasksFailed(error.toString()));
  }
};
