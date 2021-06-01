import { StatusCodes } from "http-status-codes";
 
export default interface DataResponse {
    data?: any,
    status: StatusCodes,
    message?: String
};