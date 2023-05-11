import type { AxiosResponse } from "axios";

export interface IPosition {
  id: number;
  name: string;
}

export type PositionResponse = AxiosResponse<{
  success: boolean;
  positions: IPosition[];
}>