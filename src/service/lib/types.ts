import { ITodo } from "../../types";

export interface IResponseBody {
  success: boolean;
  error: string;
}

export interface IGetListResponseBody extends IResponseBody {
  data: ITodo[];
  length: number;
}

export interface ICreateTodoResponseBody extends IResponseBody {
  id: number;
}
