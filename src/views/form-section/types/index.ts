import type { AxiosResponse } from "axios";

export interface IPosition {
  id: number;
  name: string;
}

export type PositionResponse = AxiosResponse<{
  success: boolean;
  positions: IPosition[];
}>

export type TokenResponse = AxiosResponse<{
  success: boolean;
  token: string;
}>

export type SignUpRespoonse = AxiosResponse<{
  message: string;
  success: boolean;
  user_id: number;
}>

export interface IFormFields {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: null | File;
}