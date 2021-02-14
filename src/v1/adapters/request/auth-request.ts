import { Request } from 'express';

export interface AuthRequest extends Request {
    body: {
        user: string;
        password: string;
    }
}