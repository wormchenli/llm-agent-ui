import HttpStatusCode from "@/patterns/types/httpStatusCode"

export interface IResponse {
    status: HttpStatusCode;
    message: string;
    data?: Record<string, any>;
}