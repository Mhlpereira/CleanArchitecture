import {Request, Response} from 'express';
export type HttpMethod = "get" | "post";

export const HttpMethod = {
    GET: "get" as HttpMethod,
    POST: "post" as HttpMethod
} as const; //enums tem problema de perfomance no ts, por isso utiliza-los dessa forma

export interface Route {
    getHandler(): (request: Request, response: Response) => Promise<void>;
    getPath(): string;
    getMethod(): HttpMethod;

}