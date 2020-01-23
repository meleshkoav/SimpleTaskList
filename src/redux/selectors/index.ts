import { IGlobalState } from "../../types";

export const getTasks = (state: IGlobalState) => state.tasks;
export const getLoadingStatus = (state: IGlobalState) => state.isLoading;
export const getError = (state: IGlobalState) => state.error;
