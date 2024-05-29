import { HttpHeaders } from "@angular/common/http";


export interface IError {
  message: string;
  statusCode: number;
  additionalInfo: {
      errors: {
          [key: string]: string[];
      };
  };
}


export interface IErrorResponse{
    headers?: HttpHeaders;
    error: IError;
    message?: string;
    name?: string;
    ok?: boolean;
    status?: number;
    statusText?: string;
    url?: string;
}
