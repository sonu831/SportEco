type UpdateStateProps = {
  key: string;
  value: any;
};

export interface UpdateState {
  (props: UpdateStateProps | UpdateStateProps[]): void;
}
