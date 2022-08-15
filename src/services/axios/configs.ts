import { Nullable } from "../../types";
import axios, { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

let apiInstance: Nullable<AxiosInstance> = null;
export const getAPIInstance = (): AxiosInstance => {
  if (!apiInstance) {
    apiInstance = axios.create();
  }

  return apiInstance;
};
