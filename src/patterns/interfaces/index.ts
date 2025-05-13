import { HttpStatus } from "@/patterns/types";

export interface IRequestOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any> | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: Record<string, any> | null;
}

/*
{
    "code": 404,
    "data": {},
    "message": "App not found",
    "status": "not_found"
}
* */
export interface IResponse {
  code: HttpStatus;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
  message: string;
  status: string;
}
