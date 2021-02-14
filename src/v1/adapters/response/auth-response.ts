import { Response } from 'express';


export interface AuthResponse extends Response {
    data: {
        user: string;
        type: string;
        token: string;
    }
}