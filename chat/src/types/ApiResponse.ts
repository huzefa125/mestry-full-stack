import {Message} from "../model/user"
export interface ApiResponse<T> {
    success:boolean;
    data?: T;
    message: string;
    isAcceptingMessages?: boolean;
    messages?: Message[];
}