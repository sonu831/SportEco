import { FileUploadResponse } from "../../types/FileUpload";

export type OptionType = {
  label: string;
  value: string;
};

export type StepType = {
  step: number;
  title: string;
};

export enum StepsEnum {
  NameDetails = 1,
  Gender = 2,
  DateOfBirth = 3,
  SelectCity = 4,
  ProfilePhoto = 5,
}

export type InitialState = {
  fName: string;
  lName: string;
  mName: string;
  email: string;
  dobMonth: string;
  dobDate: string;
  dobYear: string;
  gender: string;
  selectedCity: string;
  selectedState: string;
  role: string[];
  image: string;
  idProof?: FileUploadResponse;
};
