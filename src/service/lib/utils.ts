import { IResponseBody } from "./types";

// Throw error if success is false
export const checkSuccess = ({ success, error }: IResponseBody): void => {
  if (!success) {
    throw new Error(error);
  }
};
