export interface ITodo {
  id: number;
  title: string;
}

export interface IAction<TPayload = any> {
  type: string;
  payload?: TPayload;
}

export interface IGlobalState {
  todos: ITodo[];
  isLoading: boolean;
  error: string | null;
}
