import { ITask } from "../../types";

export interface IResponseBody {
  success: boolean;
  error: string;
}

export interface IGetListResponseBody extends IResponseBody {
  data: ITask[];
  length: number;
}

export interface ICreateTaskResponseBody extends IResponseBody {
  id: number;
}
