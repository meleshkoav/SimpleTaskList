import { baseUrl } from "../config";
import { ITodo } from "../types";
import {
  IResponseBody,
  IGetListResponseBody,
  ICreateTodoResponseBody
} from "./lib/types";
import { checkSuccess } from "./lib/utils";

const URL = `${baseUrl}/api/list`;

export const getTodoListService = async (): Promise<ITodo[]> => {
  const response = await fetch(URL, {
    method: "GET"
  });

  const body = (await response.json()) as IGetListResponseBody;

  checkSuccess(body);

  return body.data;
};

export const addTodoService = async (title: string): Promise<number> => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({ title })
  });

  const body = (await response.json()) as ICreateTodoResponseBody;

  checkSuccess(body);

  return body.id;
};

export const updateTodoService = async (
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

export const deleteTodoService = async (id: number): Promise<void> => {
  const url = `${URL}/${id}`;
  const response = await fetch(url, {
    method: "DELETE"
  });

  const body = (await response.json()) as IResponseBody;

  checkSuccess(body);
};
