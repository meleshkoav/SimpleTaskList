import { baseUrl } from "../config";
import { ITask } from "../types";
import {
  IResponseBody,
  IGetListResponseBody,
  ICreateTaskResponseBody
} from "./lib/types";
import { checkSuccess } from "./lib/utils";

const URL = `${baseUrl}/api/list`;

export const getTaskListService = async (): Promise<ITask[]> => {
  const response = await fetch(URL, {
    method: "GET"
  });

  const body = (await response.json()) as IGetListResponseBody;

  checkSuccess(body);

  return body.data;
};

export const addTaskService = async (title: string): Promise<number> => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ title })
  });

  const body = (await response.json()) as ICreateTaskResponseBody;

  checkSuccess(body);

  return body.id;
};

export const updateTaskService = async (
  id: number,
  title: string
): Promise<void> => {
  const url = `${URL}/${id}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ title })
  });

  const body = (await response.json()) as IResponseBody;

  checkSuccess(body);
};

export const deleteTaskService = async (id: number): Promise<void> => {
  const url = `${URL}/${id}`;
  const response = await fetch(url, {
    method: "DELETE"
  });

  const body = (await response.json()) as IResponseBody;

  checkSuccess(body);
};
