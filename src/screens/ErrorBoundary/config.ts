import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface IError {
  message: string;
  stack?: string;
}

export interface State {
  hasError: boolean;
  error: IError;
  info: { componentStack: string };
}

export type IErrorComponentProps = {
  error: IError;
  onRetry?: () => void;
};
