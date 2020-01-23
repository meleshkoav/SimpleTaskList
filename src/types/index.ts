export interface ITask {
  id: number;
  title: string;
}

export interface IAction<TPayload = any> {
  type: string;
  payload?: TPayload;
}

export interface IGlobalState {
  tasks: ITask[];
  isLoading: boolean;
  error: string | null;
}
